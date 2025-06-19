import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import UnitCard from '../../components/units/UnitCard'
import UnitsOverview from '../../components/units/UnitsOverview'
import { sanityFetch, queries } from '../../lib/sanity'

export const metadata = {
  title: 'وحدات الكلية | كلية البنات الطبية',
  description: 'تعرف على وحدات كلية البنات الطبية المتخصصة ودورها في تطوير التعليم الطبي وضمان الجودة',
}

const units = [
  {
    id: 1,
    name: 'وحدة ضمان الجودة والاعتماد الأكاديمي',
    description: 'تهدف إلى ضمان جودة التعليم الطبي والحصول على الاعتماد الأكاديمي',
    icon: '🏆',
    headName: 'د. سارة أحمد المالكي',
    headTitle: 'رئيسة وحدة ضمان الجودة',
    vision: 'تحقيق التميز في جودة التعليم الطبي والحصول على الاعتماد الأكاديمي المحلي والدولي',
    mission: 'تطبيق معايير الجودة الشاملة في جميع أنشطة الكلية التعليمية والبحثية والخدمية',
    objectives: [
      'تطوير ومراجعة معايير الجودة',
      'متابعة تطبيق نظم الجودة',
      'إعداد الكلية للاعتماد الأكاديمي',
      'التقييم المستمر للبرامج الأكاديمية',
      'تدريب الكادر على معايير الجودة'
    ],
    activities: [
      'إجراء دراسات التقييم الذاتي',
      'تنظيم ورش عمل للجودة',
      'متابعة مؤشرات الأداء',
      'إعداد التقارير السنوية',
      'التنسيق مع الهيئات المختصة'
    ],
    committees: [
      'لجنة المراجعة الداخلية',
      'لجنة التطوير والتحسين',
      'لجنة التوثيق والأرشفة',
      'لجنة متابعة المؤشرات'
    ],
    publications: [
      'دليل ضمان الجودة',
      'تقرير التقييم الذاتي السنوي',
      'مؤشرات الأداء الرئيسية',
      'خطة التحسين المستمر'
    ],
    members: 12,
    establishedYear: 2015,
    contact: {
      phone: '+966 11 123 4560',
      email: 'quality@girlsmedcollege.edu',
      office: 'الدور الثاني - مبنى الإدارة'
    }
  },
  {
    id: 2,
    name: 'وحدة القياس والتقويم',
    description: 'تختص بتطوير أساليب القياس والتقويم لضمان فعالية التعليم الطبي',
    icon: '📊',
    headName: 'د. نورا عبدالله السالم',
    headTitle: 'رئيسة وحدة القياس والتقويم',
    vision: 'تطوير أدوات قياس وتقويم متطورة لضمان تحقيق مخرجات التعلم المستهدفة',
    mission: 'تصميم وتطوير آليات القياس والتقويم الشاملة للطالبات والبرامج الأكاديمية',
    objectives: [
      'تطوير أدوات التقويم المناسبة',
      'تحليل نتائج الطالبات',
      'تحسين طرق القياس',
      'تدريب أعضاء هيئة التدريس',
      'ضمان عدالة التقييم'
    ],
    activities: [
      'إعداد الاختبارات المعيارية',
      'تحليل البيانات الإحصائية',
      'تقييم فعالية المناهج',
      'مراجعة أساليب التقويم',
      'إعداد التقارير التحليلية'
    ],
    committees: [
      'لجنة تطوير الاختبارات',
      'لجنة التحليل الإحصائي',
      'لجنة مراجعة المناهج',
      'لجنة التدريب'
    ],
    publications: [
      'دليل القياس والتقويم',
      'تقارير تحليل الأداء',
      'نماذج الاختبارات المعيارية',
      'إحصائيات الأداء الأكاديمي'
    ],
    members: 8,
    establishedYear: 2016,
    contact: {
      phone: '+966 11 123 4561',
      email: 'assessment@girlsmedcollege.edu',
      office: 'الدور الأول - مبنى الأكاديمي'
    }
  },
  {
    id: 3,
    name: 'وحدة التعليم الطبي المتكامل',
    description: 'تطوير وتطبيق مناهج التعليم الطبي المتكامل والحديث',
    icon: '🧠',
    headName: 'د. رنا محمد الخالدي',
    headTitle: 'رئيسة وحدة التعليم الطبي المتكامل',
    vision: 'تطبيق أحدث طرق التعليم الطبي المتكامل لإعداد طبيبات متميزات',
    mission: 'تصميم وتنفيذ برامج تعليمية متكاملة تربط النظرية بالتطبيق العملي',
    objectives: [
      'تطوير المناهج المتكاملة',
      'تطبيق التعلم القائم على المشاكل',
      'تحسين التعلم السريري',
      'تطوير مهارات التفكير النقدي',
      'ربط العلوم الأساسية بالتطبيق'
    ],
    activities: [
      'تصميم الحالات التعليمية',
      'تطوير السيناريوهات الطبية',
      'تنظيم الورش التدريبية',
      'متابعة التطبيق العملي',
      'تقييم فعالية المناهج'
    ],
    committees: [
      'لجنة تطوير المناهج',
      'لجنة التعلم السريري',
      'لجنة التقييم والمتابعة',
      'لجنة التطوير المهني'
    ],
    publications: [
      'دليل التعليم المتكامل',
      'مجموعة الحالات التعليمية',
      'نماذج التعلم السريري',
      'أدلة التدريس'
    ],
    members: 15,
    establishedYear: 2017,
    contact: {
      phone: '+966 11 123 4562',
      email: 'integrated@girlsmedcollege.edu',
      office: 'الدور الثالث - مبنى الأكاديمي'
    }
  },
  {
    id: 4,
    name: 'وحدة التعلم الإلكتروني',
    description: 'تطوير وإدارة منصات التعلم الإلكتروني والتقنيات التعليمية الحديثة',
    icon: '💻',
    headName: 'د. هند علي الزهراني',
    headTitle: 'رئيسة وحدة التعلم الإلكتروني',
    vision: 'تحقيق التميز في استخدام التقنيات الحديثة في التعليم الطبي',
    mission: 'توفير بيئة تعلم إلكتروني متطورة تدعم العملية التعليمية وتطور مهارات الطالبات',
    objectives: [
      'تطوير المحتوى الإلكتروني',
      'تدريب الكادر التعليمي',
      'إدارة المنصات التعليمية',
      'تطوير التقييم الإلكتروني',
      'دعم التعلم عن بُعد'
    ],
    activities: [
      'إنتاج المحاضرات المرئية',
      'تصميم التفاعلات التعليمية',
      'إدارة نظم إدارة التعلم',
      'تطوير التطبيقات التعليمية',
      'الدعم التقني للمستخدمين'
    ],
    committees: [
      'لجنة تطوير المحتوى',
      'لجنة الدعم التقني',
      'لجنة التدريب',
      'لجنة التقييم الإلكتروني'
    ],
    publications: [
      'دليل استخدام المنصات',
      'مكتبة المحاضرات المرئية',
      'أدوات التقييم الإلكتروني',
      'تطبيقات تعليمية متخصصة'
    ],
    members: 10,
    establishedYear: 2018,
    contact: {
      phone: '+966 11 123 4563',
      email: 'elearning@girlsmedcollege.edu',
      office: 'الدور الأول - مبنى التقنيات'
    }
  },
  {
    id: 5,
    name: 'مختبر المهارات الطبية',
    description: 'توفير بيئة تدريب متطورة لتعلم المهارات الطبية والسريرية',
    icon: '🔬',
    headName: 'د. فاطمة سعد القحطاني',
    headTitle: 'مديرة مختبر المهارات الطبية',
    vision: 'إعداد طبيبات متمكنات من المهارات الطبية العملية والسريرية',
    mission: 'توفير تدريب عملي متدرج ومحاكاة حقيقية للممارسة الطبية في بيئة آمنة',
    objectives: [
      'تطوير المهارات العملية',
      'تطبيق التعلم التفاعلي',
      'توفير المحاكاة الطبية',
      'تقييم الأداء العملي',
      'تطوير المناهج العملية'
    ],
    activities: [
      'تدريب المهارات الأساسية',
      'محاكاة الحالات المرضية',
      'تقييم المهارات العملية',
      'ورش العمل التطبيقية',
      'صيانة وتطوير الأجهزة'
    ],
    committees: [
      'لجنة المناهج العملية',
      'لجنة الأجهزة والمعدات',
      'لجنة التقييم العملي',
      'لجنة التطوير والصيانة'
    ],
    publications: [
      'دليل المهارات الطبية',
      'بروتوكولات المحاكاة',
      'نماذج التقييم العملي',
      'فيديوهات تعليمية للمهارات'
    ],
    members: 18,
    establishedYear: 2014,
    contact: {
      phone: '+966 11 123 4564',
      email: 'skillslab@girlsmedcollege.edu',
      office: 'مبنى مختبر المهارات'
    }
  },
  {
    id: 6,
    name: 'وحدة البحث العلمي',
    description: 'تطوير وتعزيز البحث العلمي والابتكار في المجال الطبي',
    icon: '🔍',
    headName: 'د. منى عبدالرحمن الشمري',
    headTitle: 'رئيسة وحدة البحث العلمي',
    vision: 'تحقيق الريادة في البحث العلمي الطبي وخدمة المجتمع',
    mission: 'تطوير قدرات البحث العلمي ودعم الباحثات لإنتاج بحوث متميزة تخدم المجال الطبي',
    objectives: [
      'تطوير البحوث الطبية',
      'دعم الباحثات الشابات',
      'نشر الثقافة البحثية',
      'التعاون مع المؤسسات البحثية',
      'تطبيق نتائج البحوث'
    ],
    activities: [
      'إجراء البحوث العلمية',
      'تنظيم المؤتمرات البحثية',
      'نشر الأوراق العلمية',
      'التدريب على مناهج البحث',
      'التعاون الدولي'
    ],
    committees: [
      'لجنة أخلاقيات البحث',
      'لجنة مراجعة المشاريع',
      'لجنة النشر العلمي',
      'لجنة التعاون الدولي'
    ],
    publications: [
      'مجلة الكلية العلمية',
      'دليل البحث العلمي',
      'قاعدة بيانات البحوث',
      'تقارير المشاريع البحثية'
    ],
    members: 25,
    establishedYear: 2013,
    contact: {
      phone: '+966 11 123 4565',
      email: 'research@girlsmedcollege.edu',
      office: 'الدور الثاني - مبنى البحوث'
    }
  },
  {
    id: 7,
    name: 'وحدة إدارة الأزمات والكوارث',
    description: 'التخطيط والاستعداد لإدارة الأزمات والكوارث الطبية والطبيعية',
    icon: '🚨',
    headName: 'د. نادية خالد العتيبي',
    headTitle: 'رئيسة وحدة إدارة الأزمات',
    vision: 'ضمان الاستعداد والاستجابة الفعالة للأزمات والكوارث',
    mission: 'تطوير خطط شاملة لإدارة الأزمات وتدريب المجتمع الجامعي على التعامل معها',
    objectives: [
      'وضع خطط الطوارئ',
      'تدريب فرق الاستجابة',
      'تطوير أنظمة الإنذار المبكر',
      'التنسيق مع الجهات المختصة',
      'التقييم والتحسين المستمر'
    ],
    activities: [
      'إعداد خطط الطوارئ',
      'تنفيذ التدريبات المحاكاة',
      'تطوير بروتوكولات الاستجابة',
      'التوعية والتثقيف',
      'تقييم المخاطر'
    ],
    committees: [
      'لجنة التخطيط للطوارئ',
      'لجنة التدريب والمحاكاة',
      'لجنة التنسيق الخارجي',
      'لجنة المتابعة والتقييم'
    ],
    publications: [
      'دليل إدارة الأزمات',
      'خطط الإخلاء والطوارئ',
      'بروتوكولات الاستجابة',
      'تقارير تقييم المخاطر'
    ],
    members: 14,
    establishedYear: 2019,
    contact: {
      phone: '+966 11 123 4566',
      email: 'crisis@girlsmedcollege.edu',
      office: 'الدور الأول - مبنى الأمن والسلامة'
    }
  }
]

export default async function UnitsPage() {
  const [unitsData, siteSettings] = await Promise.all([
    sanityFetch({ query: queries.units }),
    sanityFetch({ query: queries.siteSettings })
  ])
  
  // Use Sanity data if available, otherwise fallback to hardcoded units
  const allUnits = unitsData?.length > 0 ? unitsData : units

  return (
    <main>
      <Navigation siteSettings={siteSettings} />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="section-container">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">وحدات الكلية</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              تضم كلية البنات الطبية مجموعة من الوحدات المتخصصة التي تعمل على تطوير التعليم الطبي 
              وضمان الجودة والارتقاء بمستوى البحث العلمي والخدمات التعليمية.
            </p>
          </div>
        </div>
      </section>

      <UnitsOverview units={allUnits} />
      
      {/* Units Grid */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {allUnits.map((unit, index) => (
              <UnitCard key={unit._id || unit.id || index} unit={unit} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-4xl font-bold mb-8">تواصل مع الوحدات</h2>
          <p className="text-xl mb-12 max-w-4xl mx-auto opacity-90">
            للتواصل مع أي من وحدات الكلية أو الحصول على معلومات إضافية حول خدماتها
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-20 p-8 rounded-xl">
              <div className="w-16 h-16 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="#000" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-black">الهاتف</h3>
              <p className="text-xl text-black">+966 11 123 4560</p>
              <p className="opacity-80 mt-2 text-black">الرقم الموحد للوحدات</p>
            </div>

            <div className="bg-white bg-opacity-20 p-8 rounded-xl">
              <div className="w-16 h-16 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="#000" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-black">البريد الإلكتروني</h3>
              <p className="text-xl text-black">units@girlsmedcollege.edu</p>
              <p className="opacity-80 mt-2 text-black">للاستفسارات العامة</p>
            </div>

            <div className="bg-white bg-opacity-20 p-8 rounded-xl">
              <div className="w-16 h-16 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="#000" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-black">الموقع</h3>
              <p className="text-xl text-black">مجمع مباني الكلية</p>
              <p className="opacity-80 mt-2 text-black">الرياض - المملكة العربية السعودية</p>
            </div>
          </div>
        </div>
      </section>

      <Footer siteSettings={siteSettings} />
    </main>
  )
} 