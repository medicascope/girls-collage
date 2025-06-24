export default function AdmissionRequirements() {
  const requirements = [
    {
      title: 'المتطلبات الأساسية',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      items: [
        'شهادة الثانوية العامة أو ما يعادلها',
        'اجتياز اختبار القدرات العامة',
        'اجتياز الاختبار التحصيلي للتخصصات العلمية',
        'إجادة اللغة الإنجليزية (IELTS أو TOEFL)',
        'عدم الحصول على شهادة جامعية مماثلة'
      ],
      color: 'from-blue-600 to-blue-700',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      title: 'المتطلبات الصحية',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      items: [
        'فحص طبي شامل معتمد',
        'خلو من الأمراض المعدية',
        'القدرة البدنية على ممارسة المهنة',
        'سلامة النظر والسمع',
        'التطعيمات المطلوبة كاملة'
      ],
      color: 'from-green-600 to-green-700',
      bgColor: 'from-green-50 to-green-100'
    },
    {
      title: 'المستندات المطلوبة',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      items: [
        'صورة من الهوية الوطنية أو الإقامة',
        'أصل شهادة الثانوية العامة + صورة',
        'كشف درجات الثانوية العامة',
        'شهادة اختبار القدرات العامة',
        'شهادة الاختبار التحصيلي',
        'شهادة إجادة اللغة الإنجليزية',
        'تقرير طبي معتمد',
        'صور شخصية حديثة'
      ],
      color: 'from-purple-600 to-purple-700',
      bgColor: 'from-purple-50 to-purple-100'
    },
    {
      title: 'إجراءات التقديم',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      items: [
        'التسجيل في البوابة الإلكترونية',
        'ملء نموذج التقديم بالكامل',
        'رفع المستندات المطلوبة',
        'دفع رسوم التقديم',
        'حضور المقابلة الشخصية',
        'متابعة نتيجة القبول'
      ],
      color: 'from-orange-600 to-orange-700',
      bgColor: 'from-orange-50 to-orange-100'
    }
  ]

  const timeline = [
    { phase: 'فتح التقديم', period: 'يناير - مارس', description: 'بداية استقبال طلبات التقديم' },
    { phase: 'المراجعة الأولية', period: 'أبريل', description: 'مراجعة الطلبات والمستندات' },
    { phase: 'المقابلات', period: 'مايو', description: 'إجراء المقابلات الشخصية' },
    { phase: 'إعلان النتائج', period: 'يونيو', description: 'إعلان نتائج القبول النهائي' },
    { phase: 'التسجيل', period: 'يوليو - أغسطس', description: 'تسجيل المقبولات وبداية الدراسة' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="gradient-text">متطلبات القبول العامة</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            تعرفي على المتطلبات والإجراءات اللازمة للالتحاق بالبرامج الأكاديمية في كلية البنات الطبية
          </p>
        </div>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {requirements.map((req, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${req.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex items-center space-x-4 space-x-reverse mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${req.color} rounded-full flex items-center justify-center ml-5 mr-0`}>
                  {req.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{req.title}</h3>
              </div>
              
              <div className="space-y-3">
                {req.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-3 space-x-reverse">
                    <div className={`w-5 h-5 bg-gradient-to-r ${req.color} rounded-full flex items-center justify-center mt-0.5 ml-2 mr-0`}>
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 flex-1">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Application Timeline */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl shadow-xl mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">الجدول الزمني للقبول</span>
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">{item.phase}</h4>
                      <p className="text-blue-600 font-medium mb-2">{item.period}</p>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Center Circle */}
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center z-10">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 p-6 rounded-xl">
            <h4 className="flex items-center space-x-2 space-x-reverse text-xl font-bold text-yellow-800 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <span>ملاحظات مهمة</span>
            </h4>
            <ul className="space-y-2 text-yellow-700">
              <li>• جميع الشهادات يجب أن تكون مصدقة من الجهات المختصة</li>
              <li>• المتطلبات قد تختلف حسب البرنامج المختار</li>
              <li>• رسوم التقديم غير قابلة للاسترداد</li>
              <li>• يتم إشعار المتقدمات بالنتيجة عبر البريد الإلكتروني</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 p-6 rounded-xl">
            <h4 className="flex items-center space-x-2 space-x-reverse text-xl font-bold text-green-800 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>معلومات الدعم</span>
            </h4>
            <div className="space-y-3 text-green-700">
              <p className="flex items-center space-x-2 space-x-reverse">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>خط المساعدة: +966 11 123 4580</span>
              </p>
              <p className="flex items-center space-x-2 space-x-reverse">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>admissions@girlsmedcollege.edu</span>
              </p>
              <p className="flex items-center space-x-2 space-x-reverse">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>الأحد - الخميس: 8:00 ص - 4:00 م</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 