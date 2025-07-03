'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import { urlFor } from '../lib/sanity'
import PortableText from './PortableText'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const mockImages = [
  { url: '/assets/1.jpg', alt: 'معالي العميدة في مكتبها' },
  { url: '/assets/2.jpg', alt: 'معالي العميدة خلال مؤتمر طبي' },
  { url: '/assets/3.jpg', alt: 'معالي العميدة مع الطالبات' }
];

const DeanMessage = ({ deanMessageData }) => {
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
  // Fallback data if Sanity data is not available
  const data = deanMessageData || {
    title: 'كلمة معالي العميدة',
    deanName: 'د. فاطمة أحمد السالم',
    deanTitle: 'عميدة كلية البنات الطبية',
    deanImages: [],
    shortMessage: 'أهلاً وسهلاً بكم في كلية البنات الطبية، حيث نسعى لتحقيق التميز في التعليم الطبي والبحث العلمي.',
    fullMessage: null
  }

  const imagesToDisplay = (data.deanImages && data.deanImages.length > 0)
    ? data.deanImages.map(img => ({ url: urlFor(img).url(), alt: img.alt || data.deanName }))
    : mockImages;

  return (
    <section 
      ref={sectionRef}
      className={`py-20 bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className={`relative transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-12 scale-95'
          }`}>
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden card-shadow group">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{
                  el: '.swiper-pagination-custom',
                  clickable: true,
                  renderBullet: (index, className) => {
                    return `<span class="${className} !w-3 !h-3 !rounded-full !bg-white/50 !opacity-100 [&.swiper-pagination-bullet-active]:!bg-white"></span>`
                  }
                }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="h-full w-full"
                loop={imagesToDisplay.length > 1}
              >
                {imagesToDisplay.map((image, index) => (
                  <SwiperSlide key={image.url || index}>
                    <div className="relative w-full h-full">
                      {/* Blurred background image */}
                      <div 
                        className="absolute inset-0 w-full h-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${image.url})`,
                          filter: 'blur(20px)',
                          transform: 'scale(1.1)',
                        }}
                      />
                      {/* Main image */}
                      <img
                        src={image.url}
                        alt={image.alt || `${data.deanName} - صورة ${index + 1}`}
                        className="relative z-10 w-full h-full object-contain"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              {/* Custom Navigation */}
              {imagesToDisplay.length > 1 && (
                <>
                  <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/40">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </div>
                  <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/40">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div className="swiper-pagination-custom absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2"></div>
                </>
              )}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20"></div>
          </div>

          {/* Content Side */}
          <div className={`space-y-6 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-black">{data.title}</span>
              </h2>
              <div className="text-lg text-gray-600 mb-6">
                <p className="font-semibold">{data.deanName}</p>
                <p>{data.deanTitle}</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              {data.fullMessage ? (
                <PortableText value={data.fullMessage} />
              ) : (
                <>
                  <p className="text-lg">
                    بسم الله الرحمن الرحيم، والصلاة والسلام على أشرف المرسلين سيدنا محمد وعلى آله وصحبه أجمعين.
                  </p>
                  
                  <p>
                    يسعدني أن أرحب بكم في موقع كلية البنات الطبية، هذه المؤسسة التعليمية العريقة التي تسعى لتحقيق التميز في مجال التعليم الطبي والبحث العلمي.
                  </p>

                  <p>
                    إن كليتنا تؤمن بأهمية دور المرأة في المجال الطبي، ونحن نعمل جاهدين على إعداد جيل من الطبيبات المتميزات اللواتي يمتلكن العلم والمهارة والأخلاق الحميدة لخدمة مجتمعهن ووطنهن.
                  </p>

                  <p>
                    نحن نفتخر بما حققته كليتنا من إنجازات على مدى السنوات الماضية، ونسعى دائماً لمواكبة أحدث التطورات في مجال التعليم الطبي والتكنولوجيا الحديثة.
                  </p>
                </>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/dean-message" className="btn-primary text-center">
                اقرأ الكلمة كاملة
              </Link>
              <Link href="/about" className="btn-secondary text-center">
                تعرف على الكلية
              </Link>
            </div>

            {/* Signature */}
            <div className="pt-6 border-t border-gray-200">
              <p className="text-gray-600 italic">
                "نحن نؤمن بأن التعليم الطبي المتميز هو الطريق لبناء مستقبل صحي أفضل لمجتمعنا"
              </p>
              <div className="mt-3 text-gray-800 font-semibold">
                معالي العميدة
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeanMessage 