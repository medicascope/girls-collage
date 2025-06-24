'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../lib/sanity'

const LatestNews = ({ newsData }) => {
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
  // Fallback news data if Sanity data is not available
  const fallbackNews = [
    {
      id: 1,
      title: 'كلية البنات الطبية تحتفل بتخريج الدفعة الجديدة',
      excerpt: 'احتفلت كلية البنات الطبية بتخريج 150 طالبة من مختلف التخصصات الطبية في حفل مهيب حضره عدد من المسؤولين والأكاديميين...',
      image: '/images/news/graduation.jpg',
      date: '2024-01-15',
      category: 'أخبار الكلية'
    },
    {
      id: 2,
      title: 'إطلاق برنامج التعليم الطبي التكاملي الجديد',
      excerpt: 'أطلقت كلية البنات الطبية برنامجاً جديداً للتعليم الطبي التكاملي يهدف إلى تطوير مهارات الطالبات العملية والنظرية...',
      image: '/images/news/integrated-learning.jpg',
      date: '2024-01-10',
      category: 'البرامج التعليمية'
    },
    {
      id: 3,
      title: 'توقيع اتفاقية تعاون مع مستشفى الملك فهد',
      excerpt: 'وقعت كلية البنات الطبية اتفاقية تعاون استراتيجي مع مستشفى الملك فهد لتدريب الطالبات وتطوير البحث العلمي...',
      image: '/images/news/partnership.jpg',
      date: '2024-01-05',
      category: 'الشراكات'
    },
    {
      id: 4,
      title: 'فوز أبحاث الكلية بجائزة التميز العلمي',
      excerpt: 'حصلت ثلاثة أبحاث من كلية البنات الطبية على جائزة التميز العلمي على مستوى الجامعات السعودية لهذا العام...',
      image: '/images/news/research-award.jpg',
      date: '2023-12-20',
      category: 'البحث العلمي'
    },
    {
      id: 5,
      title: 'ورشة عمل حول الذكاء الاصطناعي في الطب',
      excerpt: 'نظمت وحدة التعليم الإلكتروني ورشة عمل متخصصة حول استخدام الذكاء الاصطناعي في التشخيص الطبي والعلاج...',
      image: '/images/news/ai-workshop.jpg',
      date: '2023-12-15',
      category: 'الفعاليات'
    },
    {
      id: 6,
      title: 'افتتاح معمل المحاكاة الطبية المتطور',
      excerpt: 'افتتحت الكلية معمل المحاكاة الطبية الجديد المزود بأحدث التقنيات لتدريب الطالبات على المهارات السريرية...',
      image: '/images/news/simulation-lab.jpg',
      date: '2023-12-10',
      category: 'التطوير'
    }
  ]

  // Use Sanity data if available, otherwise fallback
  const newsItems = newsData || fallbackNews

  const formatDate = (dateString) => {
    // Use simple date format to avoid hydration mismatch
    const date = new Date(dateString)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  return (
    <section 
      ref={sectionRef}
      className={`py-20 bg-gradient-to-br from-gray-50 to-white transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="section-container">
        <div className={`text-center mb-16 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">آخر الأخبار</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            تابع آخر أخبار وفعاليات كلية البنات الطبية وإنجازاتها العلمية والأكاديمية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <article 
              key={news._id || news.id || index} 
              className={`bg-white rounded-xl card-shadow overflow-hidden group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'
              }`}
              style={{ transitionDelay: `${400 + (index * 150)}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={news.featuredImage?.asset ? urlFor(news.featuredImage).width(400).height(300).url() : news.image || "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' font-size='16' text-anchor='middle' dy='.3em' fill='%236b7280'%3Eصورة الخبر%3C/text%3E%3C/svg%3E"}
                  alt={news.featuredImage?.alt || news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' font-size='16' text-anchor='middle' dy='.3em' fill='%236b7280'%3Eصورة الخبر%3C/text%3E%3C/svg%3E"
                  }}
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {news.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formatDate(news.publishedAt || news.date)}
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {news.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {news.excerpt}
                </p>

                <Link
                  href={`/news/${news.slug?.current || news.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
                >
                  اقرأ المزيد
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <Link href="/news" className="btn-primary">
            عرض جميع الأخبار
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LatestNews 