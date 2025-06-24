'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../lib/sanity'
import { getCategoryDisplay, transformGalleryData, FALLBACK_GALLERIES } from '../lib/galleryUtils'

const FeaturedGallery = ({ galleriesData }) => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.2,
        rootMargin: '-50px'
      }
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
  // Fallback gallery data if Sanity data is not available
  const fallbackGallery = [
    {
      id: 1,
      title: 'معالي العميدة مع فضيلة الإمام ودكتور محمود صديق',
      description: 'لقاء مهم مع الضيوف المكرمين لمناقشة التطوير الأكاديمي',
      image: '/images/gallery/dean-imam-meeting.jpg',
      category: 'زيارات رسمية'
    },
    {
      id: 2,
      title: 'حفل تخريج الدفعة الثالثة عشرة',
      description: 'احتفال مهيب بتخريج 150 طالبة من مختلف التخصصات الطبية',
      image: '/images/gallery/graduation-ceremony.jpg',
      category: 'احتفالات'
    },
    {
      id: 3,
      title: 'افتتاح معمل المحاكاة الطبية المتقدم',
      description: 'تدشين أحدث معمل للمحاكاة الطبية مزود بأفضل التقنيات',
      image: '/images/gallery/simulation-lab-opening.jpg',
      category: 'تطوير المرافق'
    },
    {
      id: 4,
      title: 'مؤتمر التعليم الطبي الدولي',
      description: 'استضافة مؤتمر دولي حول أحدث طرق التعليم الطبي',
      image: '/images/gallery/medical-conference.jpg',
      category: 'مؤتمرات'
    },
    {
      id: 5,
      title: 'زيارة وفد جامعة هارفارد الطبية',
      description: 'استقبال وفد أكاديمي مرموق لبحث سبل التعاون العلمي',
      image: '/images/gallery/harvard-visit.jpg',
      category: 'زيارات دولية'
    },
    {
      id: 6,
      title: 'ورشة الجراحة الروبوتية',
      description: 'تدريب الطالبات على أحدث تقنيات الجراحة الروبوتية',
      image: '/images/gallery/robotic-surgery.jpg',
      category: 'التدريب المتقدم'
    }
  ]

  // Use Sanity data if available, otherwise fallback
  const galleryItems = galleriesData && galleriesData.length > 0
    ? transformGalleryData(galleriesData)
    : FALLBACK_GALLERIES.filter(item => item.featured) // Only show featured items on home

  return (
    <section
      ref={sectionRef}
      className={`py-20 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}
    >
      <div className="section-container">
        <div className={`text-center mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">معرض الصور</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            صور عالية الجودة لأهم الأحداث والزيارات والفعاليات التي شهدتها كلية البنات الطبية
          </p>
        </div>

        {/* Featured Image */}
        {galleryItems.length > 0 && (
          <div className={`mb-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
            }`}>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden card-shadow">
              <img
                src={galleryItems[0].images?.[0]?.asset ? urlFor(galleryItems[0].images[0]).width(800).height(500).url() : galleryItems[0].image || "data:image/svg+xml,%3Csvg width='800' height='500' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' font-size='20' text-anchor='middle' dy='.3em' fill='%236b7280'%3Eالصورة المميزة%3C/text%3E%3C/svg%3E"}
                alt={galleryItems[0].images?.[0]?.alt || galleryItems[0].title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg width='800' height='500' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' font-size='20' text-anchor='middle' dy='.3em' fill='%236b7280'%3Eالصورة المميزة%3C/text%3E%3C/svg%3E"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                    الصورة المميزة
                  </span>
                  <h3 className="text-3xl font-bold mb-2">
                    {galleryItems[0].title}
                  </h3>
                  <p className="text-lg opacity-90">
                    {galleryItems[0].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.slice(1).map((item, index) => (
            <Link
              key={item._id || item.id || index}
              href={`/gallery/${item.slug?.current || item.id}`}
              className={`group cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'
                }`}
              style={{ transitionDelay: `${600 + (index * 150)}ms` }}
            >
              <div className="relative h-64 rounded-xl overflow-hidden card-shadow mb-4">
                <img
                  src={item.images?.[0]?.asset ? urlFor(item.images[0]).width(400).height(300).url() : item.image || "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' font-size='14' text-anchor='middle' dy='.3em' fill='%236b7280'%3Eصورة الفعالية%3C/text%3E%3C/svg%3E"}
                  alt={item.images?.[0]?.alt || item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' font-size='14' text-anchor='middle' dy='.3em' fill='%236b7280'%3Eصورة الفعالية%3C/text%3E%3C/svg%3E"
                  }}
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {item.categoryDisplay || getCategoryDisplay(item.category)}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Statistics Bar */}
        <div className={`mt-[30px] bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
          }`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100">صورة عالية الجودة</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">فعالية موثقة</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-blue-100">زيارة رسمية</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-blue-100">مؤتمر علمي</div>
            </div>
          </div>
        </div>

        <div className={`text-center mt-12 transition-all duration-700 delay-1200 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}>
          <Link href="/gallery" className="btn-primary">
            عرض المعرض كاملاً
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedGallery 