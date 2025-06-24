import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { sanityFetch, queries } from '../../lib/sanity'
import ProgramCard from '../../components/programs/ProgramCard'
import AdmissionRequirements from '../../components/programs/AdmissionRequirements'
import ProgramStats from '../../components/programs/ProgramStats'

export const metadata = {
  title: 'البرامج الأكاديمية | كلية البنات الطبية',
  description: 'تعرف على البرامج الأكاديمية في كلية البنات الطبية ومتطلبات القبول والدرجات العلمية المتاحة',
}

const programs = [
  {
    id: 1,
    level: 'البكالوريوس',
    name: 'بكالوريوس الطب والجراحة',
    duration: '6 سنوات',
    degree: 'م.ب.ب.س (MBBS)',
    description: 'برنامج شامل لإعداد طبيبات مؤهلات للممارسة الطبية العامة',
    image: '/images/programs/medicine-bachelor.jpg',
    overview: 'يهدف برنامج بكالوريوس الطب والجراحة إلى إعداد طبيبات مؤهلات علمياً وعملياً للممارسة الطبية العامة، مع التركيز على التعلم المتكامل والتطبيق العملي في المستشفيات التعليمية.',
    objectives: [
      'إكساب المعرفة الطبية الأساسية والسريرية',
      'تطوير المهارات العملية والسريرية',
      'تنمية مهارات التفكير النقدي والتحليلي',
      'إعداد أطباء ملتزمين بأخلاقيات المهنة',
      'تطوير مهارات التواصل والعمل الجماعي'
    ],
    curriculum: {
      'السنة الأولى': ['الأحياء الطبية', 'الكيمياء الحيوية', 'علم التشريح', 'علم وظائف الأعضاء'],
      'السنة الثانية': ['علم الأنسجة', 'علم الأجنة', 'علم الأدوية', 'علم الأمراض'],
      'السنة الثالثة': ['الطب الباطني الأساسي', 'الجراحة الأساسية', 'طب الأطفال', 'النساء والولادة'],
      'السنة الرابعة': ['الطب الباطني المتقدم', 'الجراحة المتقدمة', 'طب الطوارئ', 'الطب النفسي'],
      'السنة الخامسة': ['التدريب السريري المكثف', 'طب المجتمع', 'طب الأسرة', 'البحث الطبي'],
      'السنة السادسة': ['سنة الامتياز', 'التدريب في التخصصات', 'المشروع البحثي', 'التقييم النهائي']
    },
    admissionRequirements: {
      academic: [
        'شهادة الثانوية العامة (القسم العلمي) بمعدل لا يقل عن 90%',
        'درجة لا تقل عن 70 في اختبار القدرات العامة',
        'درجة لا تقل عن 70 في الاختبار التحصيلي',
        'اجتياز اختبار اللغة الإنجليزية (IELTS 6.0 أو ما يعادله)'
      ],
      personal: [
        'اجتياز المقابلة الشخصية',
        'الفحص الطبي الشامل',
        'عدم وجود أمراض معدية',
        'القدرة على التحمل البدني والنفسي'
      ],
      documents: [
        'صورة من الهوية الوطنية',
        'صور شخصية حديثة',
        'شهادة الثانوية العامة مصدقة',
        'نتائج الاختبارات المطلوبة',
        'تقرير طبي شامل'
      ]
    },
    careerProspects: [
      'طبيبة عامة في المستشفيات الحكومية',
      'طبيبة في القطاع الخاص',
      'العمل في مراكز الرعاية الصحية الأولية',
      'متابعة الدراسات العليا في التخصصات الطبية',
      'العمل في البحث الطبي والأكاديمي'
    ],
    fees: {
      tuition: '25,000 ريال سنوياً',
      registration: '2,000 ريال',
      lab: '3,000 ريال سنوياً',
      total: '30,000 ريال سنوياً'
    },
    capacity: 120,
    currentStudents: 680
  },
  {
    id: 2,
    level: 'الماجستير',
    name: 'ماجستير الطب الباطني',
    duration: '4 سنوات',
    degree: 'ماجستير الطب الباطني',
    description: 'برنامج تخصصي متقدم في الطب الباطني والأمراض الداخلية',
    image: '/images/programs/internal-medicine-master.jpg',
    overview: 'برنامج ماجستير الطب الباطني يهدف إلى إعداد أخصائيات مؤهلات في مجال الطب الباطني والأمراض الداخلية، مع التركيز على التشخيص المتقدم والعلاج الشامل.',
    objectives: [
      'تطوير الخبرة في تشخيص الأمراض الباطنية المعقدة',
      'إتقان التقنيات التشخيصية المتقدمة',
      'تطوير مهارات البحث السريري',
      'القدرة على قيادة فرق طبية متخصصة',
      'المساهمة في تطوير البروتوكولات العلاجية'
    ],
    curriculum: {
      'السنة الأولى': ['أمراض القلب المتقدمة', 'أمراض الجهاز التنفسي', 'أمراض الجهاز الهضمي', 'منهجية البحث'],
      'السنة الثانية': ['أمراض الكلى والمسالك البولية', 'أمراض الغدد الصماء', 'أمراض الروماتيزم', 'الطب القائم على الأدلة'],
      'السنة الثالثة': ['أمراض الدم والأورام', 'الأمراض المعدية', 'طب الطوارئ المتقدم', 'مشروع البحث'],
      'السنة الرابعة': ['التدريب المتخصص', 'العناية المركزة', 'الرسالة العلمية', 'التقييم النهائي']
    },
    admissionRequirements: {
      academic: [
        'درجة البكالوريوس في الطب والجراحة بتقدير جيد جداً',
        'اجتياز سنة الامتياز بنجاح',
        'خبرة سريرية لا تقل عن سنتين',
        'اجتياز الاختبار التخصصي'
      ],
      personal: [
        'المقابلة الشخصية مع اللجنة المختصة',
        'تقييم الأداء السريري',
        'رسائل توصية من أطباء مختصين',
        'الالتزام بأخلاقيات المهنة'
      ],
      documents: [
        'شهادة البكالوريوس مصدقة',
        'شهادة إتمام سنة الامتياز',
        'شهادات الخبرة العملية',
        'رسائل التوصية',
        'نتيجة الاختبار التخصصي'
      ]
    },
    careerProspects: [
      'أخصائية طب باطني في المستشفيات المرجعية',
      'استشارية في العيادات المتخصصة',
      'عضو هيئة تدريس في كليات الطب',
      'باحثة في المراكز البحثية الطبية',
      'مديرة طبية في المؤسسات الصحية'
    ],
    fees: {
      tuition: '35,000 ريال سنوياً',
      registration: '3,000 ريال',
      research: '5,000 ريال سنوياً',
      total: '43,000 ريال سنوياً'
    },
    capacity: 25,
    currentStudents: 95
  },
  {
    id: 3,
    level: 'الدبلوم',
    name: 'دبلوم طب الأسرة',
    duration: '2 سنة',
    degree: 'دبلوم طب الأسرة',
    description: 'برنامج تدريبي متخصص في طب الأسرة والرعاية الصحية الأولية',
    image: '/images/programs/family-medicine-diploma.jpg',
    overview: 'يهدف دبلوم طب الأسرة إلى تأهيل الطبيبات للعمل في مجال طب الأسرة والرعاية الصحية الأولية، مع التركيز على الرعاية الشاملة للأسرة والمجتمع.',
    objectives: [
      'تطوير مهارات طب الأسرة الشامل',
      'فهم ديناميكيات الأسرة والمجتمع',
      'تطبيق مبادئ الوقاية والتعزيز الصحي',
      'تطوير مهارات التواصل مع المرضى',
      'إدارة الأمراض المزمنة في المجتمع'
    ],
    curriculum: {
      'السنة الأولى': ['أسس طب الأسرة', 'صحة الطفل والمراهق', 'صحة المرأة', 'الأمراض المزمنة الشائعة'],
      'السنة الثانية': ['طب المسنين', 'الصحة النفسية المجتمعية', 'طب الطوارئ الأولية', 'التدريب العملي المكثف']
    },
    admissionRequirements: {
      academic: [
        'درجة البكالوريوس في الطب والجراحة',
        'إتمام سنة الامتياز بنجاح',
        'خبرة عملية في الرعاية الصحية الأولية',
        'اجتياز اختبار القبول للبرنامج'
      ],
      personal: [
        'الميل للعمل في المجتمع',
        'مهارات التواصل الممتازة',
        'القدرة على العمل في فريق',
        'الالتزام بخدمة المجتمع'
      ],
      documents: [
        'شهادة البكالوريوس',
        'شهادة الامتياز',
        'شهادة الخبرة العملية',
        'رسالة دافع شخصية'
      ]
    },
    careerProspects: [
      'طبيبة أسرة في مراكز الرعاية الأولية',
      'مديرة مركز صحي',
      'مستشارة صحية للأسر',
      'متخصصة في برامج التوعية الصحية',
      'باحثة في طب المجتمع'
    ],
    fees: {
      tuition: '20,000 ريال سنوياً',
      registration: '1,500 ريال',
      practical: '2,500 ريال سنوياً',
      total: '24,000 ريال سنوياً'
    },
    capacity: 30,
    currentStudents: 55
  },
  {
    id: 4,
    level: 'الدكتوراه',
    name: 'دكتوراه الفلسفة في الطب',
    duration: '4-6 سنوات',
    degree: 'دكتوراه الفلسفة في الطب (PhD)',
    description: 'برنامج بحثي متقدم للحصول على درجة الدكتوراه في التخصصات الطبية',
    image: '/images/programs/phd-medicine.jpg',
    overview: 'برنامج دكتوراه الفلسفة في الطب يهدف إلى إعداد باحثات متميزات في المجال الطبي، مع التركيز على البحث العلمي المتقدم والابتكار في التشخيص والعلاج.',
    objectives: [
      'إجراء بحوث علمية متقدمة ومبتكرة',
      'تطوير نظريات ومفاهيم طبية جديدة',
      'المساهمة في تقدم المعرفة الطبية',
      'تطوير قدرات القيادة الأكاديمية',
      'إعداد الجيل القادم من الباحثين'
    ],
    curriculum: {
      'السنة الأولى': ['مناهج البحث المتقدمة', 'الإحصاء الحيوي', 'أخلاقيات البحث الطبي', 'مراجعة الأدبيات'],
      'السنة الثانية': ['تصميم التجارب السريرية', 'تقنيات البحث المتقدمة', 'الكتابة العلمية', 'عرض النتائج الأولية'],
      'السنة الثالثة': ['تنفيذ المشروع البحثي', 'جمع وتحليل البيانات', 'النشر العلمي', 'المشاركة في المؤتمرات'],
      'السنة الرابعة': ['إكمال البحث', 'كتابة الرسالة', 'مناقشة الرسالة', 'النشر في المجلات المحكمة']
    },
    admissionRequirements: {
      academic: [
        'درجة الماجستير في مجال طبي بتقدير ممتاز',
        'خبرة بحثية موثقة لا تقل عن 3 سنوات',
        'نشر أوراق علمية في مجلات محكمة',
        'اجتياز اختبار الكفاءة البحثية'
      ],
      personal: [
        'مقترح بحثي متميز ومبتكر',
        'المقابلة مع لجنة القبول',
        'موافقة مشرف متخصص',
        'التفرغ الكامل للبحث'
      ],
      documents: [
        'شهادة الماجستير مصدقة',
        'السيرة الذاتية العلمية',
        'قائمة المنشورات العلمية',
        'مقترح البحث المفصل',
        'رسائل توصية من أكاديميين'
      ]
    },
    careerProspects: [
      'أستاذة جامعية في كليات الطب',
      'باحثة رئيسية في المراكز البحثية',
      'مديرة معهد بحثي متخصص',
      'مستشارة علمية للمؤسسات الطبية',
      'رائدة في تطوير التقنيات الطبية'
    ],
    fees: {
      tuition: '45,000 ريال سنوياً',
      registration: '5,000 ريال',
      research: '10,000 ريال سنوياً',
      total: '60,000 ريال سنوياً'
    },
    capacity: 15,
    currentStudents: 45
  }
]

export default async function ProgramsPage() {
  const [programsData, siteSettings] = await Promise.all([
    sanityFetch({ query: queries.programs }),
    sanityFetch({ query: queries.siteSettings })
  ])

  // Use Sanity data if available, otherwise fallback to hardcoded programs
  const allPrograms = programsData?.length > 0 ? programsData : programs

  return (
    <main>
      <Navigation siteSettings={siteSettings} />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-50">
        <div className="section-container">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">البرامج الأكاديمية</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              تقدم كلية البنات الطبية مجموعة شاملة من البرامج الأكاديمية المتميزة في مختلف المستويات،
              من البكالوريوس إلى الدكتوراه، لإعداد كوادر طبية مؤهلة وقادرة على خدمة المجتمع.
            </p>
          </div>
        </div>
      </section>
{/* 
      <ProgramStats programs={allPrograms} />
       */}
      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {allPrograms.map((program, index) => (
              <ProgramCard key={program._id || program.id || index} program={program} />
            ))}
          </div>
        </div>
      </section>

      <AdmissionRequirements />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-4xl font-bold mb-8">ابدئي رحلتك الأكاديمية معنا</h2>
          <p className="text-xl mb-12 max-w-4xl mx-auto opacity-90">
            انضمي إلى كلية البنات الطبية واحصلي على تعليم طبي متميز يؤهلك لمستقبل مهني مشرق في خدمة المجتمع
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-20 p-8 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-black">التقديم الإلكتروني</h3>
              <p className="opacity-90 text-black">قدمي طلبك عبر البوابة الإلكترونية</p>
              <button className="mt-4 bg-white text-purple-600 px-6 py-2 rounded-lg font-bold hover:bg-opacity-90 transition-colors">
                ابدئي التقديم
              </button>
            </div>

            <div className="bg-white bg-opacity-20 p-8 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-black">الاستفسارات</h3>
              <p className="opacity-90 text-black">تواصلي معنا للحصول على معلومات إضافية</p>
              <button className="mt-4 bg-white text-purple-600 px-6 py-2 rounded-lg font-bold hover:bg-opacity-90 transition-colors">
                اتصلي بنا
              </button>
            </div>

            <div className="bg-white bg-opacity-20 p-8 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-black">زيارة الكلية</h3>
              <p className="opacity-90 text-black">احجزي موعداً لزيارة الكلية والتعرف عليها</p>
              <button className="mt-4 bg-white text-purple-600 px-6 py-2 rounded-lg font-bold hover:bg-opacity-90 transition-colors">
                احجزي زيارة
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer siteSettings={siteSettings} />
    </main>
  )
} 