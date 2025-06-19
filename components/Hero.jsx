'use client'

import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../lib/sanity'

const Hero = ({ heroData }) => {
  // Fallback data if Sanity data is not available
  const data = heroData || {
    title: 'كلية البنات الطبية',
    subtitle: 'تميز في التعليم الطبي والبحث العلمي لإعداد جيل من الطبيبات المتميزات',
    subtitleEn: 'Girls Medical College - Excellence in Medical Education and Scientific Research',
    statistics: [
      { number: '15+', label: 'أقسام طبية', color: 'blue' },
      { number: '500+', label: 'طالبة', color: 'purple' },
      { number: '50+', label: 'عضو هيئة تدريس', color: 'pink' }
    ],
    primaryButton: { text: 'اكتشف المزيد عن الكلية', url: '/about' },
    secondaryButton: { text: 'البرامج الدراسية', url: '/programs' },
    heroImage: null,
    deanCard: {
      show: true,
      title: 'معالي العميدة',
      subtitle: 'كلمة ترحيب',
      message: 'أهلاً وسهلاً بكم في كلية البنات الطبية، حيث نسعى لتحقيق التميز في التعليم الطبي...',
      link: { text: 'اقرأ المزيد ←', url: '/dean-message' }
    }
  }
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-red-50">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(37, 99, 235, 0.25) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(90deg, rgba(220, 38, 38, 0.08) 1px, transparent 1px), linear-gradient(rgba(220, 38, 38, 0.08) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">{data.title}</span>
              </h1>
              <p className="text-xl text-gray-600">
                {data.subtitle}
              </p>
              <p className="text-lg text-gray-500">
                {data.subtitleEn}
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6">
              {data.statistics?.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl font-bold text-${stat.color}-600`}>
                    {stat.number}{stat.suffix || ''}
              </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {data.primaryButton && (
                <Link href={data.primaryButton.url || '/about'} className="btn-primary text-center">
                  {data.primaryButton.text}
              </Link>
              )}
              {data.secondaryButton && (
                <Link href={data.secondaryButton.url || '/programs'} className="btn-secondary text-center">
                  {data.secondaryButton.text}
              </Link>
              )}
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden card-shadow">
              <img
                src={data.heroImage?.asset ? urlFor(data.heroImage).width(600).height(500).url() : "https://egyptcranes.com/wp-content/uploads/2018/03/faculty-of-medicin.jpg"}
                alt={data.heroImage?.alt || "مبنى كلية البنات الطبية"}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg width='500' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' font-size='18' text-anchor='middle' dy='.3em' fill='%236b7280'%3Eمبنى الكلية%3C/text%3E%3C/svg%3E"
                }}
              />
            </div>
            
            {/* Floating Card - Dean's Welcome */}
            {data.deanCard?.show && (
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl card-shadow max-w-sm">
              <div className="flex items-center space-x-reverse space-x-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <img
                      src={data.deanCard.image?.asset ? urlFor(data.deanCard.image).width(64).height(64).url() : "https://yaledailynews.com/wp-content/uploads/2025/01/femaleurologist_kb_Courtesy-of-Leslie-Rickey.jpg"}
                      alt={data.deanCard.image?.alt || "معالي العميدة"}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23e2e8f0'/%3E%3Ctext x='50%25' y='50%25' font-size='12' text-anchor='middle' dy='.3em' fill='%236b7280'%3Eالعميدة%3C/text%3E%3C/svg%3E"
                    }}
                  />
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800">{data.deanCard.title}</h3>
                    <p className="text-sm text-gray-600">{data.deanCard.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mt-3">
                  {data.deanCard.message}
                </p>
                {data.deanCard.link && (
                  <Link href={data.deanCard.link.url || '/dean-message'} className="text-blue-600 text-sm font-medium hover:underline">
                    {data.deanCard.link.text}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero 