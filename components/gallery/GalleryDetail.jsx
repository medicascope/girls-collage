'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { urlFor } from '../../lib/sanity'
import { getCategoryDisplay, formatGalleryDate } from '../../lib/galleryUtils'

const GalleryDetail = ({ galleryData, relatedGalleries }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const sectionRef = useRef(null)

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

  // Handle lightbox
  const openLightbox = (index) => {
    setSelectedImageIndex(index)
    setIsLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
    setSelectedImageIndex(null)
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => {
    if (selectedImageIndex < galleryData.images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1)
    }
  }

  const prevImage = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1)
    }
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isLightboxOpen) return
      
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') prevImage()
      if (e.key === 'ArrowLeft') nextImage()
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [isLightboxOpen, selectedImageIndex])



  if (!galleryData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📸</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">المعرض غير موجود</h2>
          <Link href="/gallery" className="btn-primary">
            العودة إلى المعرض
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div ref={sectionRef} className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 mt-[90px]">
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
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Breadcrumb */}
            <nav className="mb-8">
              <div className="flex items-center space-x-reverse space-x-2 text-sm text-gray-600">
                <Link href="/" className="hover:text-gray-900 transition-colors">الرئيسية</Link>
                <span>/</span>
                <Link href="/gallery" className="hover:text-gray-900 transition-colors">معرض الصور</Link>
                <span>/</span>
                <span className="text-gray-900">{galleryData.title}</span>
              </div>
            </nav>

            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {getCategoryDisplay(galleryData.category)}
                </span>
                {galleryData.featured && (
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    معرض مميز
                  </span>
                )}
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                {galleryData.title}
              </h1>

              {galleryData.description && (
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
                  {galleryData.description}
                </p>
              )}

              <div className="flex items-center gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{formatGalleryDate(galleryData.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{galleryData.images?.length || 0} صورة</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Images */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {galleryData.images && galleryData.images.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryData.images.map((image, index) => (
                  <div
                    key={index}
                    className={`group cursor-pointer transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-90'
                    }`}
                    style={{ transitionDelay: `${500 + (index * 100)}ms` }}
                    onClick={() => openLightbox(index)}
                  >
                    <div className="relative overflow-hidden rounded-2xl card-shadow group-hover:shadow-2xl transition-all duration-300">
                      <img
                        src={
                          image.asset 
                            ? urlFor(image).width(400).height(300).url()
                            : "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' font-size='16' text-anchor='middle' dy='.3em' fill='%236b7280'%3Eصورة رقم ${index + 1}%3C/text%3E%3C/svg%3E"
                        }
                        alt={image.alt || `صورة ${index + 1}`}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">📷</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">لا توجد صور في هذا المعرض</h3>
                <p className="text-gray-600">سيتم إضافة الصور قريباً</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Tags Section */}
      {galleryData.tags && galleryData.tags.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="section-container">
            <div className={`transition-all duration-700 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">العلامات</h3>
              <div className="flex flex-wrap gap-3">
                {galleryData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm border"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Galleries */}
      {relatedGalleries && relatedGalleries.length > 0 && (
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className={`transition-all duration-700 delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h3 className="text-3xl font-bold text-gray-800 mb-12 text-center">معارض ذات صلة</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedGalleries.map((gallery, index) => (
                  <Link
                    key={gallery._id}
                    href={`/gallery/${gallery.slug?.current}`}
                    className="group"
                  >
                    <div className="bg-gray-50 rounded-2xl overflow-hidden card-shadow group-hover:shadow-xl transition-all duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={
                            gallery.images?.[0]?.asset 
                              ? urlFor(gallery.images[0]).width(300).height(200).url()
                              : "data:image/svg+xml,%3Csvg width='300' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' font-size='14' text-anchor='middle' dy='.3em' fill='%236b7280'%3E${encodeURIComponent(gallery.title)}%3C/text%3E%3C/svg%3E"
                          }
                          alt={gallery.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {gallery.title}
                        </h4>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {gallery.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Back to Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="section-container text-center">
          <Link href="/gallery" className="btn-primary">
            العودة إلى جميع المعارض
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {isLightboxOpen && selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-2 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Buttons */}
            {selectedImageIndex > 0 && (
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-3 transition-all"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {selectedImageIndex < galleryData.images.length - 1 && (
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-3 transition-all"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Image */}
            <img
              src={
                galleryData.images[selectedImageIndex]?.asset
                  ? urlFor(galleryData.images[selectedImageIndex]).width(1200).height(800).url()
                  : "data:image/svg+xml,%3Csvg width='800' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' font-size='20' text-anchor='middle' dy='.3em' fill='%236b7280'%3Eصورة عالية الجودة%3C/text%3E%3C/svg%3E"
              }
              alt={galleryData.images[selectedImageIndex]?.alt || `صورة ${selectedImageIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              {selectedImageIndex + 1} / {galleryData.images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GalleryDetail 