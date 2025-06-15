'use client'

import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px), linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">كلية البنات الطبية</span>
              </h1>
              <p className="text-xl text-gray-600">
                تميز في التعليم الطبي والبحث العلمي لإعداد جيل من الطبيبات المتميزات
              </p>
              <p className="text-lg text-gray-500">
                Girls Medical College - Excellence in Medical Education and Scientific Research
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">أقسام طبية</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">500+</div>
                <div className="text-sm text-gray-600">طالبة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">50+</div>
                <div className="text-sm text-gray-600">عضو هيئة تدريس</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about" className="btn-primary text-center">
                اكتشف المزيد عن الكلية
              </Link>
              <Link href="/programs" className="btn-secondary text-center">
                البرامج الدراسية
              </Link>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden card-shadow">
              <img
                src="https://egyptcranes.com/wp-content/uploads/2018/03/faculty-of-medicin.jpg"
                alt="مبنى كلية البنات الطبية"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg width='500' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' font-size='18' text-anchor='middle' dy='.3em' fill='%236b7280'%3Eمبنى الكلية%3C/text%3E%3C/svg%3E"
                }}
              />
            </div>
            
            {/* Floating Card - Dean's Welcome */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl card-shadow max-w-sm">
              <div className="flex items-center space-x-reverse space-x-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src="https://yaledailynews.com/wp-content/uploads/2025/01/femaleurologist_kb_Courtesy-of-Leslie-Rickey.jpg"
                    alt="معالي العميدة"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23e2e8f0'/%3E%3Ctext x='50%25' y='50%25' font-size='12' text-anchor='middle' dy='.3em' fill='%236b7280'%3Eالعميدة%3C/text%3E%3C/svg%3E"
                    }}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">معالي العميدة</h3>
                  <p className="text-sm text-gray-600">كلمة ترحيب</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-3">
                أهلاً وسهلاً بكم في كلية البنات الطبية، حيث نسعى لتحقيق التميز في التعليم الطبي...
              </p>
              <Link href="/dean-message" className="text-blue-600 text-sm font-medium hover:underline">
                اقرأ المزيد ←
              </Link>
            </div>
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