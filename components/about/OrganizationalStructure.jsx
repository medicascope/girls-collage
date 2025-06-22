'use client'

import React, { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import the tree components to avoid SSR issues
const Tree = dynamic(() => import('react-organizational-chart').then(mod => ({ default: mod.Tree })), { ssr: false })
const TreeNode = dynamic(() => import('react-organizational-chart').then(mod => ({ default: mod.TreeNode })), { ssr: false })

import * as LucideIcons from 'lucide-react'

// CSS-in-JS styles to avoid SSR issues - MODERN GLASSMORPHIC VERSION
const getNodeStyle = (nodeStyles, clickable, expanded, isRoot, scale = 1) => ({
    display: 'inline-block',
    border: `${Math.max(1, 1.5 * scale)}px solid ${nodeStyles.borderColor || 'rgba(255, 255, 255, 0.2)'}`,
    borderRadius: `${16 * scale}px`,
    padding: `${12 * scale}px ${16 * scale}px`,
    margin: `${6 * scale}px`,
    background: `${nodeStyles.background || 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'}`,
    backdropFilter: 'blur(10px)',
    color: nodeStyles.color || '#1e293b',
    fontFamily: 'Cairo, sans-serif',
    fontWeight: isRoot ? 'bold' : '600',
    fontSize: `${13 * scale}px`,
    textAlign: 'center',
    minWidth: `${140 * scale}px`,
    maxWidth: `${200 * scale}px`,
    boxShadow: isRoot
        ? `0 ${8 * scale}px ${32 * scale}px ${nodeStyles.shadowColor || 'rgba(0, 0, 0, 0.15)'}, 0 ${4 * scale}px ${16 * scale}px rgba(255, 255, 255, 0.1) inset`
        : `0 ${4 * scale}px ${20 * scale}px ${nodeStyles.shadowColor || 'rgba(0, 0, 0, 0.1)'}, 0 ${2 * scale}px ${8 * scale}px rgba(255, 255, 255, 0.1) inset`,
    cursor: clickable ? 'pointer' : 'default',
    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    position: 'relative',
    direction: 'rtl',
    transform: isRoot ? 'scale(1.05)' : 'none',
    WebkitBackdropFilter: 'blur(10px)'
})

const nodeContentStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    flexWrap: 'wrap',
    pointerEvents: 'none' // Prevent child elements from interfering with hover
}

const nodeTitleStyle = {
    flex: 1,
    lineHeight: 1.3,
    pointerEvents: 'none' // Prevent text from interfering with hover
}

const getExpandIndicatorStyle = (expanded) => ({
    marginRight: '6px',
    transition: 'transform 0.3s ease',
    transform: expanded ? 'rotate(180deg)' : 'none',
    pointerEvents: 'none' // Prevent chevron from interfering with hover
})

const treeContainerStyle = {
    direction: 'ltr',
    width: '100%',
    height: '70vh',
    minHeight: '500px',
    overflow: 'auto',
    border: '2px solid rgba(59, 130, 246, 0.1)',
    borderRadius: '16px',
    background: 'rgba(255, 255, 255, 0.5)',
    backdropFilter: 'blur(10px)',
    padding: '20px',
    WebkitMaskImage: 'linear-gradient(to right, transparent 5%, black 12%, black 95%, transparent 100%)'
}

const OrganizationalStructure = ({ data }) => {
    const [expandedNodes, setExpandedNodes] = useState(new Set())
    const [isClient, setIsClient] = useState(false)
    const [treeScale, setTreeScale] = useState(1)
    const treeContainerRef = useRef(null)

    // Fallback static data
    const fallbackData = {
        title: 'الهيكل التنظيمي',
        subtitle: 'هيكل تنظيمي متكامل يضمن التميز في الإدارة والتعليم والبحث العلمي',
        displaySettings: {
            theme: 'blue-purple',
            layout: 'network',
            enableAnimations: true
        },
        rootNode: {
            title: 'مجلس الكلية',
            nodeType: 'executive',
            level: 0,
            expandedByDefault: true,
            children: [
                {
                    title: 'عميد الكلية',
                    nodeType: 'executive',
                    level: 1,
                    expandedByDefault: true,
                    children: [
                        {
                            title: 'مدير الكلية',
                            nodeType: 'executive',
                            level: 2,
                            expandedByDefault: true,
                            children: [
                                { title: 'قسم الشئون الإدارية', nodeType: 'administrative', level: 3 },
                                { title: 'قسم الشئون المالية', nodeType: 'administrative', level: 3 },
                                {
                                    title: 'رؤساء مجالس الأقسام',
                                    nodeType: 'academic',
                                    level: 3,
                                    expandedByDefault: true,
                                    children: [
                                        { title: 'العلوم الأساسية', nodeType: 'academic', level: 4 },
                                        { title: 'العلوم الإكلينيكية', nodeType: 'academic', level: 4 }
                                    ]
                                },
                                { title: 'أعضاء هيئة التدريس', nodeType: 'academic', level: 3 },
                                { title: 'الهيئة المعاونة', nodeType: 'academic', level: 3 },
                                { title: 'قسم الخدمات الفنية والإدارية', nodeType: 'support', level: 3 },
                                { title: 'إدارة البرنامج التكاملي', nodeType: 'academic', level: 3 },
                                { title: 'قسم شئون الطالبات', nodeType: 'administrative', level: 3 },
                                { title: 'قسم شئون الدراسة', nodeType: 'academic', level: 3 },
                                { title: 'قسم شئون الامتحانات', nodeType: 'academic', level: 3 },
                                { title: 'قسم رعاية الطالبات', nodeType: 'support', level: 3 },
                                { title: 'قسم شئون الخريجات', nodeType: 'administrative', level: 3 }
                            ]
                        },
                        {
                            title: 'وكيل الكلية لشئون التعليم والطلاب',
                            nodeType: 'executive',
                            level: 2,
                            expandedByDefault: true,
                            children: [
                                { title: 'وحدة القياس والتقويم الموحدة', nodeType: 'academic', level: 3 },
                                { title: 'وحدة التعليم الطبي', nodeType: 'academic', level: 3 },
                                { title: 'وحدة ضمان الجودة', nodeType: 'administrative', level: 3 }
                            ]
                        },
                        {
                            title: 'وكيل الكلية للدراسات العليا والبحوث',
                            nodeType: 'executive',
                            level: 2,
                            expandedByDefault: true,
                            children: [
                                { title: 'قسم الدراسات العليا والبحوث', nodeType: 'academic', level: 3 },
                                { title: 'قسم العلاقات العلمية والثقافية', nodeType: 'administrative', level: 3 },
                                { title: 'المكتبة', nodeType: 'support', level: 3 }
                            ]
                        },
                        { title: 'قسم العلاقات العامة وخدمة المجتمع', nodeType: 'administrative', level: 2 },
                        { title: 'وحدة الأزمات والكوارث', nodeType: 'support', level: 2 },
                        { title: 'وحدة دعم الإنتاج العلمي', nodeType: 'academic', level: 2 },
                        { title: 'سكرتارية الكلية', nodeType: 'administrative', level: 2 },
                        { title: 'قسم شئون مجلس الكلية', nodeType: 'administrative', level: 2 },
                        { title: 'مركز تطوير التعليم وتكنولوجيا المعلومات', nodeType: 'support', level: 2 }
                    ]
                }
            ]
        }
    }

    const displayData = data || fallbackData

    // Check if we're on the client side
    useEffect(() => {
        setIsClient(true)
    }, [])

    // Center the tree view ONLY on first load and scale changes (not on expand/collapse)
    useEffect(() => {
        if (isClient && treeContainerRef.current) {
            const container = treeContainerRef.current

            const centerScrollPosition = () => {
                // Force horizontal centering
                const containerWidth = container.clientWidth
                const scrollWidth = container.scrollWidth
                const centerX = Math.max(0, (scrollWidth - containerWidth) / 2)
                container.scrollLeft = centerX

                // Vertical positioning closer to top
                const containerHeight = container.clientHeight
                const scrollHeight = container.scrollHeight
                const topPosition = Math.max(0, (scrollHeight - containerHeight) / 6)
                container.scrollTop = topPosition

                console.log('Centering scroll:', {
                    containerWidth,
                    scrollWidth,
                    centerX,
                    containerHeight,
                    scrollHeight,
                    topPosition
                })
            }

            // Multiple attempts to ensure centering works
            const attemptCenter = () => {
                centerScrollPosition()

                // Try again after a short delay in case content is still loading
                setTimeout(centerScrollPosition, 200)
                setTimeout(centerScrollPosition, 500)
                setTimeout(centerScrollPosition, 1000)
            }

            // Initial centering
            setTimeout(attemptCenter, 100)
        }
    }, [isClient, treeScale]) // Removed expandedNodes from dependency array

    // Initialize expanded nodes
    useEffect(() => {
        if (!isClient) return

        const currentData = data || fallbackData
        if (currentData?.rootNode) {
            const getExpandedNodes = (node, expanded = new Set()) => {
                if (node.expandedByDefault) {
                    expanded.add(node.title)
                }
                if (node.children) {
                    node.children.forEach(child => getExpandedNodes(child, expanded))
                }
                return expanded
            }
            setExpandedNodes(getExpandedNodes(currentData.rootNode))
        }
    }, [data, isClient])

    const toggleNode = (nodeId) => {
        const newExpanded = new Set(expandedNodes)
        if (newExpanded.has(nodeId)) {
            newExpanded.delete(nodeId)
        } else {
            newExpanded.add(nodeId)
        }
        setExpandedNodes(newExpanded)
    }



      const getNodeStyles = (nodeType, level) => {
    const styles = {
      executive: {
        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.25) 0%, rgba(220, 38, 38, 0.15) 100%)',
        color: '#b91c1c',
        borderColor: 'rgba(239, 68, 68, 0.6)',
        shadowColor: 'rgba(239, 68, 68, 0.3)'
      },
      administrative: {
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(37, 99, 235, 0.15) 100%)',
        color: '#1d4ed8',
        borderColor: 'rgba(59, 130, 246, 0.6)',
        shadowColor: 'rgba(59, 130, 246, 0.3)'
      },
      academic: {
        background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.25) 0%, rgba(21, 128, 61, 0.15) 100%)',
        color: '#15803d',
        borderColor: 'rgba(34, 197, 94, 0.6)',
        shadowColor: 'rgba(34, 197, 94, 0.3)'
      },
      support: {
        background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.25) 0%, rgba(124, 58, 237, 0.15) 100%)',
        color: '#7c3aed',
        borderColor: 'rgba(147, 51, 234, 0.6)',
        shadowColor: 'rgba(147, 51, 234, 0.3)'
      },
      unit: {
        background: 'linear-gradient(135deg, rgba(107, 114, 128, 0.25) 0%, rgba(75, 85, 99, 0.15) 100%)',
        color: '#4b5563',
        borderColor: 'rgba(107, 114, 128, 0.6)',
        shadowColor: 'rgba(107, 114, 128, 0.3)'
      }
    }
    return styles[nodeType] || styles.administrative
  }

    const renderTreeNode = (node, level = 0) => {
        if (!node) return null

        const hasChildren = node.children && node.children.length > 0
        const expanded = expandedNodes.has(node.title)
        const nodeStyles = getNodeStyles(node.nodeType, level)

        const nodeElement = (
            <div
                style={getNodeStyle(nodeStyles, hasChildren, expanded, level === 0, treeScale)}
                onClick={() => hasChildren && toggleNode(node.title)}
                onMouseEnter={hasChildren ? (e) => {
                    // Always target the main container, not child elements
                    const container = e.currentTarget
                    const hoverTransform = level === 0 ? 'scale(1.08) translateY(-2px)' : 'translateY(-2px)'
                    container.style.transform = hoverTransform
                    const hoverShadow = level === 0
                        ? `0 ${12 * treeScale}px ${40 * treeScale}px ${nodeStyles.shadowColor || 'rgba(0, 0, 0, 0.2)'}, 0 ${6 * treeScale}px ${20 * treeScale}px rgba(255, 255, 255, 0.15) inset`
                        : `0 ${8 * treeScale}px ${28 * treeScale}px ${nodeStyles.shadowColor || 'rgba(0, 0, 0, 0.15)'}, 0 ${4 * treeScale}px ${12 * treeScale}px rgba(255, 255, 255, 0.15) inset`
                    container.style.boxShadow = hoverShadow
                } : undefined}
                onMouseLeave={hasChildren ? (e) => {
                    // Always target the main container, not child elements
                    const container = e.currentTarget
                    const normalTransform = level === 0 ? 'scale(1.05)' : 'none'
                    container.style.transform = normalTransform
                    const normalShadow = level === 0
                        ? `0 ${8 * treeScale}px ${32 * treeScale}px ${nodeStyles.shadowColor || 'rgba(0, 0, 0, 0.15)'}, 0 ${4 * treeScale}px ${16 * treeScale}px rgba(255, 255, 255, 0.1) inset`
                        : `0 ${4 * treeScale}px ${20 * treeScale}px ${nodeStyles.shadowColor || 'rgba(0, 0, 0, 0.1)'}, 0 ${2 * treeScale}px ${8 * treeScale}px rgba(255, 255, 255, 0.1) inset`
                    container.style.boxShadow = normalShadow
                } : undefined}
            >
                <div style={nodeContentStyle}>
                    <div style={nodeTitleStyle}>
                        {node.title}
                    </div>
                    {hasChildren && (
                        <div style={getExpandIndicatorStyle(expanded)}>
                            <LucideIcons.ChevronDown size={Math.max(8, 12 * treeScale)} />
                        </div>
                    )}
                </div>
            </div>
        )

        if (hasChildren && expanded) {
            return (
                <TreeNode label={nodeElement}>
                    {node.children.map((child, index) => (
                        <React.Fragment key={child.title || index}>
                            {renderTreeNode(child, level + 1)}
                        </React.Fragment>
                    ))}
                </TreeNode>
            )
        }

        return <TreeNode label={nodeElement} />
    }

    // Show loading state during SSR and initial hydration
    if (!isClient) {
        return (
            <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
                <div className="section-container relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            <span className="gradient-text">{displayData.title || 'الهيكل التنظيمي'}</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            {displayData.subtitle || 'هيكل تنظيمي متكامل يضمن التميز في الإدارة والتعليم والبحث العلمي'}
                        </p>
                    </div>
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                <div className="absolute top-10 right-10 w-72 h-72 bg-purple-300/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-indigo-300/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="section-container relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        <span className="gradient-text">{displayData.title || 'الهيكل التنظيمي'}</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                        {displayData.subtitle || 'هيكل تنظيمي متكامل يضمن التميز في الإدارة والتعليم والبحث العلمي'}
                    </p>

                    {/* Modern Control Panel */}
                    <div className="flex justify-center mb-8">
                        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-white/20">
                            <div className="flex items-center gap-3">
                                {/* Zoom Out */}
                                <button
                                    onClick={() => setTreeScale(Math.max(0.5, treeScale - 0.1))}
                                    disabled={treeScale <= 0.5}
                                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
                                    title="تصغير"
                                >
                                    <LucideIcons.Minus size={18} className="text-slate-600" />
                                </button>

                                {/* Scale Display */}
                                <div className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl min-w-[80px] text-center">
                                    <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        {Math.round(treeScale * 100)}%
                                    </span>
                                </div>

                                {/* Zoom In */}
                                <button
                                    onClick={() => setTreeScale(Math.min(2, treeScale + 0.1))}
                                    disabled={treeScale >= 2}
                                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
                                    title="تكبير"
                                >
                                    <LucideIcons.Plus size={18} className="text-slate-600" />
                                </button>

                                <div className="w-px h-8 bg-gradient-to-b from-transparent via-slate-300 to-transparent mx-2"></div>

                                {/* Reset */}
                                <button
                                    onClick={() => setTreeScale(1)}
                                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
                                    title="إعادة تعيين الحجم"
                                >
                                    <LucideIcons.RotateCcw size={16} className="text-blue-600" />
                                </button>

                                {/* Center View */}
                                <button
                                    onClick={() => {
                                        if (treeContainerRef.current) {
                                            const container = treeContainerRef.current
                                            const containerWidth = container.clientWidth
                                            const scrollWidth = container.scrollWidth
                                            const centerX = Math.max(0, (scrollWidth - containerWidth) / 2)
                                            container.scrollTo({
                                                left: centerX,
                                                top: container.scrollTop,
                                                behavior: 'smooth'
                                            })
                                        }
                                    }}
                                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
                                    title="توسيط العرض"
                                >
                                    <LucideIcons.Navigation size={16} className="text-purple-600" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {displayData.rootNode && (
                    <div ref={treeContainerRef} style={treeContainerStyle} className="tree-container">
                        <style jsx>{`
                        .css-1vs3jbz {
                        margin: 0 100px!important;
                        }
              .tree-container::-webkit-scrollbar {
                width: 8px;
                height: 8px;
              }
              .tree-container::-webkit-scrollbar-track {
                background: rgba(59, 130, 246, 0.1);
                border-radius: 4px;
              }
              .tree-container::-webkit-scrollbar-thumb {
                background: rgba(59, 130, 246, 0.3);
                border-radius: 4px;
              }
              .tree-container::-webkit-scrollbar-thumb:hover {
                background: rgba(59, 130, 246, 0.5);
              }
            `}</style>
                        <Tree
                            lineWidth={`${Math.max(1, 2 * treeScale)}px`}
                            lineColor="#3b82f6"
                            lineBorderRadius={`${Math.max(1, 3 * treeScale)}px`}
                            label={<div />}
                        >
                            {renderTreeNode(displayData.rootNode)}
                        </Tree>
                    </div>
                )}
            </div>
        </section>
    )
}

export default OrganizationalStructure 