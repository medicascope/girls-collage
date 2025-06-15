import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import HospitalCard from '../../components/hospitals/HospitalCard'
import HospitalStats from '../../components/hospitals/HospitalStats'

export const metadata = {
  title: 'مستشفيات الكلية | كلية البنات الطبية',
  description: 'تعرف على مستشفيات كلية البنات الطبية التعليمية وخدماتها الطبية المتخصصة وأرقام التواصل',
}

const hospitals = [
  {
    id: 1,
    name: 'مستشفى كلية البنات الطبية الرئيسي',
    description: 'المستشفى التعليمي الرئيسي للكلية يقدم خدمات طبية شاملة ومتقدمة',
    image: '/images/hospitals/main-hospital.jpg',
    totalBeds: 400,
    operatingRooms: 12,
    icuBeds: 45,
    emergencyBeds: 25,
    specialties: [
      'الطب الباطني',
      'الجراحة العامة', 
      'النساء والولادة',
      'طب الأطفال',
      'العناية المركزة',
      'الطوارئ'
    ],
    facilities: [
      'وحدة القسطرة القلبية',
      'وحدة العمليات المفتوحة',
      'مركز الولادة المتقدم',
      'وحدة حديثي الولادة',
      'مختبرات طبية شاملة',
      'قسم الأشعة المتطور'
    ],
    contactNumbers: [
      { type: 'الاستقبال الرئيسي', number: '+966 11 234 5678' },
      { type: 'الطوارئ', number: '+966 11 234 5679' },
      { type: 'المواعيد', number: '+966 11 234 5680' },
      { type: 'الإدارة', number: '+966 11 234 5681' }
    ],
    establishedYear: 2010,
    certifications: ['اعتماد وزارة الصحة', 'اعتماد المجلس الطبي السعودي', 'شهادة الجودة ISO 9001']
  },
  {
    id: 2,
    name: 'مستشفى النساء والولادة التخصصي',
    description: 'مستشفى متخصص في رعاية صحة المرأة والولادة مع أحدث التقنيات',
    image: '/images/hospitals/womens-hospital.jpg',
    totalBeds: 200,
    operatingRooms: 8,
    icuBeds: 20,
    emergencyBeds: 15,
    specialties: [
      'النساء والولادة',
      'طب الأجنة',
      'جراحة النساء',
      'أطفال الأنابيب',
      'الولادة الطبيعية',
      'العمليات القيصرية'
    ],
    facilities: [
      'وحدة الولادة الطبيعية',
      'غرف عمليات متخصصة',
      'وحدة العناية بالأجنة',
      'مركز أطفال الأنابيب',
      'عيادات ما قبل الولادة',
      'وحدة متابعة الحمل عالي الخطورة'
    ],
    contactNumbers: [
      { type: 'الاستقبال', number: '+966 11 345 6789' },
      { type: 'طوارئ النساء', number: '+966 11 345 6790' },
      { type: 'وحدة الولادة', number: '+966 11 345 6791' },
      { type: 'المواعيد', number: '+966 11 345 6792' }
    ],
    establishedYear: 2015,
    certifications: ['اعتماد وزارة الصحة', 'شهادة الجودة الطبية', 'اعتماد خدمات الأمومة']
  },
  {
    id: 3,
    name: 'مستشفى الأطفال التعليمي',
    description: 'مستشفى متخصص في رعاية الأطفال وحديثي الولادة مع كادر طبي متميز',
    image: '/images/hospitals/childrens-hospital.jpg',
    totalBeds: 150,
    operatingRooms: 6,
    icuBeds: 30,
    emergencyBeds: 20,
    specialties: [
      'طب الأطفال العام',
      'حديثي الولادة',
      'جراحة الأطفال',
      'أمراض القلب للأطفال',
      'طوارئ الأطفال',
      'العناية المركزة للأطفال'
    ],
    facilities: [
      'وحدة حديثي الولادة المتقدمة',
      'غرف عمليات الأطفال',
      'وحدة العناية المركزة للأطفال',
      'قسم طوارئ الأطفال',
      'مختبر أمراض الأطفال',
      'قسم أشعة الأطفال'
    ],
    contactNumbers: [
      { type: 'الاستقبال', number: '+966 11 456 7890' },
      { type: 'طوارئ الأطفال', number: '+966 11 456 7891' },
      { type: 'وحدة حديثي الولادة', number: '+966 11 456 7892' },
      { type: 'المواعيد', number: '+966 11 456 7893' }
    ],
    establishedYear: 2018,
    certifications: ['اعتماد وزارة الصحة', 'شهادة جودة رعاية الأطفال', 'اعتماد خدمات حديثي الولادة']
  }
]

export default function HospitalsPage() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="section-container">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">مستشفيات الكلية</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              تضم كلية البنات الطبية شبكة من المستشفيات التعليمية المتطورة التي تقدم خدمات طبية عالية الجودة 
              وتوفر بيئة تدريبية مثالية للطالبات في مختلف التخصصات الطبية.
            </p>
          </div>
        </div>
      </section>

      <HospitalStats hospitals={hospitals} />
      
      {/* Hospitals Grid */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="space-y-12">
            {hospitals.map((hospital) => (
              <HospitalCard key={hospital.id} hospital={hospital} />
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Numbers */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-4xl font-bold mb-8">أرقام الطوارئ</h2>
          <p className="text-xl mb-12 max-w-4xl mx-auto opacity-90">
            في حالات الطوارئ، يرجى الاتصال على الأرقام التالية للحصول على المساعدة الفورية
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-20 p-8 rounded-xl">
              <div className="w-16 h-16 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">طوارئ عامة</h3>
              <p className="text-3xl font-bold">997</p>
              <p className="opacity-80 mt-2">خدمة طوارئ مجانية على مدار الساعة</p>
            </div>

            <div className="bg-white bg-opacity-20 p-8 rounded-xl">
              <div className="w-16 h-16 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">طوارئ النساء والولادة</h3>
              <p className="text-3xl font-bold">+966 11 345 6790</p>
              <p className="opacity-80 mt-2">طوارئ متخصصة للنساء والحوامل</p>
            </div>

            <div className="bg-white bg-opacity-20 p-8 rounded-xl">
              <div className="w-16 h-16 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M15 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">طوارئ الأطفال</h3>
              <p className="text-3xl font-bold">+966 11 456 7891</p>
              <p className="opacity-80 mt-2">طوارئ متخصصة للأطفال وحديثي الولادة</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 