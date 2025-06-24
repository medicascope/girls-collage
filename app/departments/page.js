import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import DepartmentCard from '../../components/departments/DepartmentCard'
import DepartmentStats from '../../components/departments/DepartmentStats'
import { sanityFetch, queries } from '../../lib/sanity'

export const metadata = {
  title: 'أقسام الكلية | كلية البنات الطبية',
  description: 'تعرف على جميع أقسام كلية البنات الطبية وهيكلها التنظيمي ورؤية ورسالة كل قسم وأعضاء هيئة التدريس',
}

const fallbackDepartments = [
  {
    id: 1,
    name: 'قسم الطب الباطني',
    description: 'يهتم بتشخيص وعلاج الأمراض الباطنية المختلفة',
    vision: 'أن نكون قسماً رائداً في التعليم والبحث في مجال الطب الباطني',
    mission: 'تقديم تعليم طبي متميز وبحوث علمية في الطب الباطني لخدمة المجتمع',
    headOfDepartment: 'أ.د. فاطمة أحمد السالم',
    facultyCount: 12,
    studentsCount: 85,
    specializations: ['أمراض القلب', 'أمراض الجهاز الهضمي', 'أمراض الغدد الصماء', 'أمراض الكلى'],
    image: '/images/departments/internal-medicine.jpg',
    color: 'from-blue-600 to-blue-800'
  },
  {
    id: 2,
    name: 'قسم الجراحة',
    description: 'متخصص في الجراحة العامة والتخصصية',
    vision: 'التميز في التعليم الجراحي والبحث العلمي المتقدم',
    mission: 'إعداد جراحات متميزات وتطوير التقنيات الجراحية الحديثة',
    headOfDepartment: 'أ.د. سارة محمد العتيبي',
    facultyCount: 10,
    studentsCount: 60,
    specializations: ['الجراحة العامة', 'جراحة المناظير', 'جراحة الأورام', 'جراحة الأطفال'],
    image: '/images/departments/surgery.jpg',
    color: 'from-red-600 to-red-800'
  },
  {
    id: 3,
    name: 'قسم النساء والولادة',
    description: 'يغطي جميع جوانب صحة المرأة والولادة',
    vision: 'الريادة في رعاية صحة المرأة والطفل',
    mission: 'تقديم رعاية متكاملة لصحة المرأة مع التركيز على التعليم والبحث',
    headOfDepartment: 'أ.د. نورا عبدالله القحطاني',
    facultyCount: 15,
    studentsCount: 95,
    specializations: ['الولادة الطبيعية', 'العمليات النسائية', 'طب الأجنة', 'أطفال الأنابيب'],
    image: '/images/departments/obstetrics.jpg',
    color: 'from-pink-600 to-pink-800'
  },
  {
    id: 4,
    name: 'قسم طب الأطفال',
    description: 'رعاية شاملة لصحة الأطفال والرضع',
    vision: 'التميز في رعاية الأطفال وتطوير طب الأطفال',
    mission: 'تقديم أفضل رعاية طبية للأطفال مع التركيز على الوقاية والعلاج',
    headOfDepartment: 'أ.د. مريم خالد الشمري',
    facultyCount: 14,
    studentsCount: 78,
    specializations: ['حديثي الولادة', 'أمراض الأطفال', 'طوارئ الأطفال', 'تطور الطفل'],
    image: '/images/departments/pediatrics.jpg',
    color: 'from-green-600 to-green-800'
  },
  {
    id: 5,
    name: 'قسم الأشعة التشخيصية',
    description: 'التشخيص بالصور الطبية والأشعة',
    vision: 'الريادة في التشخيص بالصور الطبية المتقدمة',
    mission: 'تطوير تقنيات التشخيص الإشعاعي وتدريب الكوادر المتخصصة',
    headOfDepartment: 'أ.د. هند سعد المطيري',
    facultyCount: 8,
    studentsCount: 45,
    specializations: ['الأشعة المقطعية', 'الرنين المغناطيسي', 'الموجات فوق الصوتية', 'الأشعة التداخلية'],
    image: '/images/departments/radiology.jpg',
    color: 'from-purple-600 to-purple-800'
  },
  {
    id: 6,
    name: 'قسم المختبرات الطبية',
    description: 'التشخيص المختبري والتحاليل الطبية',
    vision: 'التميز في التشخيص المختبري والبحث العلمي',
    mission: 'تقديم خدمات تشخيصية دقيقة وتطوير أساليب التحليل الطبي',
    headOfDepartment: 'أ.د. رانيا أحمد الدوسري',
    facultyCount: 9,
    studentsCount: 52,
    specializations: ['علم الأمراض', 'الكيمياء الحيوية', 'علم الأحياء الدقيقة', 'أمراض الدم'],
    image: '/images/departments/laboratory.jpg',
    color: 'from-indigo-600 to-indigo-800'
  }
]

export default async function DepartmentsPage() {
  // Fetch data from Sanity
  const [departmentsData, siteSettings] = await Promise.all([
    sanityFetch({ query: queries.allDepartments }),
    sanityFetch({ query: queries.siteSettings })
  ])
  
  // Use Sanity data if available, otherwise fallback
  const departments = departmentsData || fallbackDepartments
  return (
    <main>
      <Navigation siteSettings={siteSettings} />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="section-container">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">أقسام الكلية</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              تضم كلية البنات الطبية مجموعة من الأقسام الطبية المتخصصة التي تغطي جميع التخصصات الطبية الرئيسية، 
              ويقود كل قسم نخبة من أفضل الأطباء والأكاديميين المتخصصين.
            </p>
          </div>
        </div>
      </section>

      <DepartmentStats departments={departments} />
      
      {/* Departments Grid */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {departments.map((department, index) => (
              <DepartmentCard key={department._id || department.id || index} department={department} />
            ))}
          </div>
        </div>
      </section>

      {/* Academic Excellence */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-4xl font-bold mb-8">التميز الأكاديمي</h2>
          <p className="text-xl mb-12 max-w-4xl mx-auto opacity-90">
            تتميز جميع أقسام الكلية بالتزامها بأعلى معايير الجودة في التعليم والبحث العلمي والممارسة السريرية
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{departments?.length || 15}</div>
              <div className="opacity-90">قسم طبي متخصص</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">85+</div>
              <div className="opacity-90">عضو هيئة تدريس</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1200+</div>
              <div className="opacity-90">طالبة في جميع الأقسام</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="opacity-90">تخصص طبي دقيق</div>
            </div>
          </div>
        </div>
      </section>

      <Footer siteSettings={siteSettings} />
    </main>
  )
} 