export default function LocationMap() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="gradient-text">موقع الكلية</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            تقع كلية البنات الطبية في موقع استراتيجي في قلب الرياض، مما يسهل الوصول إليها
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-blue-600 bg-opacity-10"></div>
              <div className="text-center z-10">
                <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">كلية البنات الطبية</h3>
                <p className="text-gray-600">طريق الملك عبدالعزيز، الرياض</p>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute top-8 right-8 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 left-8 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            
            <div className="p-6">
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all">
                فتح في خرائط جوجل
              </button>
            </div>
          </div>

          {/* Directions & Transport */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                <span className="gradient-text">كيفية الوصول</span>
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                يمكن الوصول إلى الكلية بسهولة عبر وسائل النقل المختلفة
              </p>
            </div>

            {/* Transportation Options */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-blue-500">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">بالسيارة الخاصة</h4>
                    <p className="text-gray-600">مواقف مجانية متاحة للطالبات والزوار</p>
                    <p className="text-sm text-gray-500 mt-1">مدة الرحلة من وسط الرياض: 15 دقيقة</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-green-500">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2v0a2 2 0 01-2-2v-4a2 2 0 00-2-2H8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">الحافلات العامة</h4>
                    <p className="text-gray-600">خطوط 15، 23، 41 تتوقف أمام الكلية</p>
                    <p className="text-sm text-gray-500 mt-1">محطة الحافلات على بُعد 50 متر</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-purple-500">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">خدمة التاكسي</h4>
                    <p className="text-gray-600">أوبر، كريم، والتاكسي التقليدي متاح</p>
                    <p className="text-sm text-gray-500 mt-1">نقطة التجمع في المدخل الرئيسي</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nearby Landmarks */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-gray-800 mb-4">معالم قريبة</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">🏥 مستشفى الملك فهد</p>
                  <p className="text-gray-500">5 دقائق سيراً</p>
                </div>
                <div>
                  <p className="text-gray-600">🛒 مركز الحياة مول</p>
                  <p className="text-gray-500">10 دقائق بالسيارة</p>
                </div>
                <div>
                  <p className="text-gray-600">🏛️ جامعة الملك سعود</p>
                  <p className="text-gray-500">15 دقيقة بالسيارة</p>
                </div>
                <div>
                  <p className="text-gray-600">⛽ محطة أرامكو</p>
                  <p className="text-gray-500">3 دقائق بالسيارة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 