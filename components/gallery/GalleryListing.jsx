'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import Link from 'next/link'
import { urlFor } from '../../lib/sanity'
import { getCategoryDisplay, transformGalleryData, FALLBACK_GALLERIES, formatGalleryDate } from '../../lib/galleryUtils'

const GalleryListing = ({ galleriesData }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [filteredGalleries, setFilteredGalleries] = useState([])
  const sectionRef = useRef(null)

  // Use Sanity data or fallback - memoize to prevent infinite re-renders
  const galleries = useMemo(() => {
    return galleriesData && galleriesData.length > 0 
      ? transformGalleryData(galleriesData) 
      : FALLBACK_GALLERIES
  }, [galleriesData])

  // Get unique categories - memoize to prevent recreation
  const categories = useMemo(() => [
    { value: 'all', label: 'جميع الفئات' },
    ...Array.from(new Set(galleries.map(g => g.category)))
      .map(cat => ({ value: cat, label: getCategoryDisplay(cat) }))
  ], [galleries])

  // Filter galleries based on selected category
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredGalleries(galleries)
    } else {
      setFilteredGalleries(galleries.filter(g => g.category === selectedCategory))
    }
  }, [selectedCategory, galleries])

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: '0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])



  return (
    <div ref={sectionRef} className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 mt-[90px]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(37, 99, 235, 0.25) 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }}
          />
        </div>

        <div className="section-container relative z-10">
          <div className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="gradient-text">معرض الصور</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              استعرض مجموعة شاملة من الصور عالية الجودة لأهم الأحداث والفعاليات والإنجازات في كلية البنات الطبية
            </p>
            
            {/* Stats */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{galleries.length}+</div>
                <div className="text-gray-600">معرض صور</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
                <div className="text-gray-600">صورة عالية الجودة</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-600 mb-2">{categories.length - 1}+</div>
                <div className="text-gray-600">فئة متنوعة</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className={`transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.value
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                  }`}
                  style={{ transitionDelay: `${600 + (index * 100)}ms` }}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 bg-gray-50">
        <div className="section-container">
          {filteredGalleries.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📸</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">لا توجد معارض في هذه الفئة</h3>
              <p className="text-gray-600">جرب اختيار فئة أخرى أو تصفح جميع المعارض</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGalleries.map((gallery, index) => (
                <Link
                  key={gallery._id}
                  href={`/gallery/${gallery.slug?.current || gallery._id}`}
                  className={`group cursor-pointer transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'
                  }`}
                  style={{ transitionDelay: `${800 + (index * 150)}ms` }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden card-shadow group-hover:shadow-2xl transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={
                          gallery.images?.[0]?.asset 
                            ? urlFor(gallery.images[0]).width(400).height(300).url()
                            : "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' font-size='16' text-anchor='middle' dy='.3em' fill='%236b7280'%3E${encodeURIComponent(gallery.title)}%3C/text%3E%3C/svg%3E"
                        }
                        alt={gallery.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' font-size='16' text-anchor='middle' dy='.3em' fill='%236b7280'%3E" + encodeURIComponent(gallery.title) + "%3C/text%3E%3C/svg%3E"
                        }}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                          {gallery.categoryDisplay || getCategoryDisplay(gallery.category)}
                        </span>
                      </div>

                      {/* View Icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                          <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                      </div>

                      {/* Featured Badge */}
                      {gallery.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            مميز
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {formatGalleryDate(gallery.date)}
                      </div>

                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                        {gallery.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                        {gallery.description}
                      </p>

                      {/* Tags */}
                      {gallery.tags && gallery.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {gallery.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center justify-between">
                        <span className="text-blue-600 font-medium text-sm">
                          استعرض المعرض
                        </span>
                        <svg className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default GalleryListing 