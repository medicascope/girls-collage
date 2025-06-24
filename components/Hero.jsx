'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade, Parallax } from 'swiper/modules'
import { urlFor } from '../lib/sanity'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/parallax'

const Hero = ({ heroData }) => {
  const swiperRef = useRef(null)
  
  // Create multiple slides from the data
  const slides = heroData?.slides || [
    {
      id: 1,
      title: 'كلية البنات الطبية',
      subtitle: 'تميز في التعليم الطبي والبحث العلمي لإعداد جيل من الطبيبات المتميزات',
      subtitleEn: 'Girls Medical College - Excellence in Medical Education and Scientific Research',
      backgroundImage: 'https://egyptcranes.com/wp-content/uploads/2018/03/faculty-of-medicin.jpg',
      statistics: [
        { number: '15+', label: 'أقسام طبية', color: 'blue' },
        { number: '500+', label: 'طالبة', color: 'purple' },
        { number: '50+', label: 'عضو هيئة تدريس', color: 'pink' }
      ],
      primaryButton: { text: 'اكتشف المزيد عن الكلية', url: '/about' },
      secondaryButton: { text: 'البرامج الدراسية', url: '/programs' }
    },
    {
      id: 2,
      title: 'التميز الأكاديمي',
      subtitle: 'برامج دراسية متطورة ومناهج حديثة تواكب التطورات العالمية في التعليم الطبي',
      subtitleEn: 'Academic Excellence - Advanced curricula that keep pace with global developments',
      backgroundImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      statistics: [
        { number: '95%', label: 'نسبة النجاح', color: 'green' },
        { number: '85%', label: 'معدل التوظيف', color: 'blue' },
        { number: '20+', label: 'سنة خبرة', color: 'purple' }
      ],
      primaryButton: { text: 'البرامج الأكاديمية', url: '/programs' },
      secondaryButton: { text: 'القبول والتسجيل', url: '/admission' }
    },
    {
      id: 3,
      title: 'البحث العلمي',
      subtitle: 'مراكز بحثية متقدمة ومختبرات حديثة لدعم البحث العلمي والابتكار في المجال الطبي',
      subtitleEn: 'Scientific Research - Advanced research centers and modern laboratories',
      backgroundImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      statistics: [
        { number: '100+', label: 'بحث علمي', color: 'cyan' },
        { number: '25+', label: 'مختبر متطور', color: 'indigo' },
        { number: '10+', label: 'براءة اختراع', color: 'pink' }
      ],
      primaryButton: { text: 'مراكز البحث', url: '/research' },
      secondaryButton: { text: 'المنشورات العلمية', url: '/publications' }
    }
  ]

  return (
    <section className="relative h-screen overflow-hidden">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay, EffectFade, Parallax]}
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
            return `<span class="${className} !w-12 !h-1 !rounded-full !bg-white/30 !opacity-100 [&.swiper-pagination-bullet-active]:!bg-white"></span>`
          }
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        parallax={true}
        speed={800}
        className="h-full w-full"
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative h-full">
            {/* Background Image with Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${slide.backgroundImage})`,
                transform: 'translate3d(0px, 0px, 0px)'
              }}
              data-swiper-parallax="-20%"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="section-container">
                <div className="max-w-4xl">
                  {/* Title */}
                  <h1 
                    className="text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight"
                    data-swiper-parallax="-300"
                  >
                    <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                      {slide.title}
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <div className="space-y-4 mb-8" data-swiper-parallax="-200">
                    <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl">
                      {slide.subtitle}
                    </p>
                    <p className="text-lg lg:text-xl text-white/70 max-w-3xl">
                      {slide.subtitleEn}
                    </p>
                  </div>

                  {/* Statistics */}
                  <div 
                    className="grid grid-cols-3 gap-6 mb-10 max-w-2xl"
                    data-swiper-parallax="-100"
                  >
                    {slide.statistics?.map((stat, statIndex) => (
                      <div key={statIndex} className="group relative">
                        <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/20">
                          {/* Background glow effect */}
                          <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-500/20 to-${stat.color}-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                          
                          <div className="relative z-10 text-center">
                            <div className="text-4xl lg:text-5xl font-bold mb-2 text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                              {stat.number}
                            </div>
                            <div className="text-white/90 text-sm lg:text-base font-medium">
                              {stat.label}
                            </div>
                          </div>
                          
                          {/* Decorative corner accent */}
                          <div className={`absolute top-3 right-3 w-2 h-2 bg-gradient-to-br from-${stat.color}-400 to-${stat.color}-600 rounded-full group-hover:scale-150 transition-transform duration-300`}></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div 
                    className="flex flex-col sm:flex-row gap-6"
                    data-swiper-parallax="-50"
                  >
                    {slide.primaryButton && (
                      <Link 
                        href={slide.primaryButton.url || '/about'} 
                        className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105"
                      >
                        <span className="relative z-10">{slide.primaryButton.text}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </Link>
                    )}
                    {slide.secondaryButton && (
                      <Link 
                        href={slide.secondaryButton.url || '/programs'} 
                        className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/60 transition-all duration-300 hover:scale-105"
                      >
                        {slide.secondaryButton.text}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 right-10 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-gradient-to-br from-pink-400/20 to-red-600/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation */}
        <div className="swiper-button-prev-custom absolute left-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300 group">
          <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        
        <div className="swiper-button-next-custom absolute right-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300 group">
          <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Custom Pagination */}
        <div className="swiper-pagination-custom absolute bottom-8 left-1/2 transform ml-20 mb-5 -translate-x-1/2 z-20 flex space-x-3"></div>

        {/* Slide Counter */}
        <div className="absolute bottom-8 right-8 z-20 text-white/80 font-medium">
          <span className="text-2xl font-bold">0{(slides.findIndex(s => s.id === slides[0]?.id) || 0) + 1}</span>
          <span className="text-sm"> / 0{slides.length}</span>
        </div>
      </Swiper>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8 z-20 flex flex-col items-center text-white/60">
        <div className="text-xs mb-2 rotate-90 origin-bottom transform">SCROLL</div>
        <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent"></div>
      </div>
    </section>
  )
}

export default Hero