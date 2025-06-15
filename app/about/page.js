import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import CollegeHistory from '../../components/about/CollegeHistory'
import StrategicGoals from '../../components/about/StrategicGoals'
import CollegeVideo from '../../components/about/CollegeVideo'

export const metadata = {
  title: 'نبذة عن الكلية | كلية البنات الطبية',
  description: 'تعرف على تاريخ كلية البنات الطبية ونشأتها والأهداف الاستراتيجية والرؤية المستقبلية للكلية',
}

export default function AboutPage() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="section-container">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">نبذة عن الكلية</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              كلية البنات الطبية مؤسسة تعليمية رائدة تأسست لتكون منارة في التعليم الطبي والبحث العلمي، 
              وتسعى لإعداد جيل من الطبيبات المتميزات لخدمة المجتمع ورفع مستوى الرعاية الصحية.
            </p>
          </div>
        </div>
      </section>

      <CollegeHistory />
      <StrategicGoals />
      <CollegeVideo />
      
      {/* Quick Facts */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">حقائق سريعة عن الكلية</h2>
            <p className="text-xl opacity-90">أرقام تعكس مسيرة التميز والإنجاز</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">تأسست</div>
              <div className="text-2xl mb-2">2005</div>
              <div className="opacity-80">منذ أكثر من 18 عاماً</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">خريجة</div>
              <div className="text-2xl mb-2">2,500+</div>
              <div className="opacity-80">طبيبة متخصصة</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">اعتماد</div>
              <div className="text-2xl mb-2">دولي</div>
              <div className="opacity-80">من أفضل المؤسسات</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">مرتبة</div>
              <div className="text-2xl mb-2">الأولى</div>
              <div className="opacity-80">على مستوى المنطقة</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
