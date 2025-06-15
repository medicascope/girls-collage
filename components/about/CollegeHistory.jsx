import Image from 'next/image'

const CollegeHistory = () => {
  const milestones = [
    {
      year: '2005',
      title: 'تأسيس الكلية',
      description: 'تأسست كلية البنات الطبية كأول كلية طب نسائية متخصصة في المنطقة'
    },
    {
      year: '2008',
      title: 'أول دفعة خريجات',
      description: 'تخرجت أول دفعة من الطبيبات المتميزات وعددهن 45 طالبة'
    },
    {
      year: '2012',
      title: 'الاعتماد الأكاديمي',
      description: 'حصلت الكلية على الاعتماد الأكاديمي المحلي والدولي'
    },
    {
      year: '2015',
      title: 'افتتاح المستشفى التعليمي',
      description: 'افتتاح أول مستشفى تعليمي تابع للكلية بسعة 200 سرير'
    },
    {
      year: '2018',
      title: 'برامج الدراسات العليا',
      description: 'إطلاق برامج الماجستير والدكتوراه في التخصصات الطبية'
    },
    {
      year: '2020',
      title: 'التعليم الإلكتروني',
      description: 'تطوير منصة التعليم الإلكتروني والتعلم عن بُعد'
    },
    {
      year: '2023',
      title: 'التوسعة الجديدة',
      description: 'افتتاح المبنى الجديد ومعامل المحاكاة المتطورة'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Content Side */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              <span className="gradient-text">نشأة الكلية</span>
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                تأسست كلية البنات الطبية في عام 2005 انطلاقاً من رؤية طموحة لإعداد جيل من الطبيبات 
                المتميزات القادرات على تقديم أفضل مستويات الرعاية الصحية للمجتمع، وخاصة في مجال 
                الرعاية الصحية النسائية والأطفال.
              </p>
              
              <p>
                جاءت فكرة إنشاء الكلية استجابة لحاجة ملحة في المجتمع لوجود كوادر طبية نسائية مؤهلة 
                ومتخصصة، حيث كانت هناك فجوة واضحة في هذا المجال. وقد حرصت الكلية منذ البداية على 
                اتباع أعلى المعايير الأكاديمية والتعليمية.
              </p>
              
              <p>
                اليوم، وبعد أكثر من 18 عاماً من التميز والعطاء، تقف كلية البنات الطبية كصرح 
                أكاديمي مرموق، خرّجت أكثر من 2,500 طبيبة متخصصة، وأصبحت مرجعاً في التعليم 
                الطبي والبحث العلمي على مستوى المنطقة.
              </p>
            </div>

            {/* Founding Principles */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">المبادئ التأسيسية</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-reverse space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">التعليم المتميز</h4>
                    <p className="text-gray-600 text-sm">تقديم تعليم طبي عالي الجودة وفق أحدث المعايير الدولية</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-reverse space-x-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">البحث العلمي</h4>
                    <p className="text-gray-600 text-sm">تطوير البحث العلمي والابتكار في المجال الطبي</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-reverse space-x-3">
                  <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">خدمة المجتمع</h4>
                    <p className="text-gray-600 text-sm">المساهمة في تطوير الخدمات الصحية المجتمعية</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-reverse space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">القيم الأخلاقية</h4>
                    <p className="text-gray-600 text-sm">غرس القيم الأخلاقية والمهنية في نفوس الطالبات</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Side */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">المحطات المهمة</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute right-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
              
              {/* Timeline Items */}
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline Dot */}
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold z-10">
                      {index + 1}
                    </div>
                    
                    {/* Content */}
                    <div className="mr-6 bg-white p-6 rounded-lg card-shadow flex-1">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">{milestone.title}</h4>
                      <p className="text-gray-600 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CollegeHistory 