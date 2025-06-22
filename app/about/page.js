import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import CollegeHistory from '../../components/about/CollegeHistory'
import StrategicGoals from '../../components/about/StrategicGoals'
import OrganizationalStructure from '../../components/about/OrganizationalStructure'
import CollegeVideo from '../../components/about/CollegeVideo'
import { sanityFetch, queries } from '../../lib/sanity'

export const metadata = {
  title: 'نبذة عن الكلية | كلية البنات الطبية',
  description: 'تعرف على تاريخ كلية البنات الطبية ونشأتها والأهداف الاستراتيجية والرؤية المستقبلية للكلية',
}

export default async function AboutPage() {
  // Fetch site settings, about page data, and organizational structure
  const [siteSettings, aboutData, organizationData] = await Promise.all([
    sanityFetch({ query: queries.siteSettings }),
    sanityFetch({ query: queries.aboutPage }),
    sanityFetch({ query: queries.organizationalStructure })
  ])

  return (
    <main>
      <Navigation siteSettings={siteSettings} />
      
      {/* Hero Section */}
      <section className="py-20 pt-50 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="section-container">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">{aboutData?.pageTitle || 'نبذة عن الكلية'}</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {aboutData?.pageSubtitle || 'كلية البنات الطبية مؤسسة تعليمية رائدة تأسست لتكون منارة في التعليم الطبي والبحث العلمي، وتسعى لإعداد جيل من الطبيبات المتميزات لخدمة المجتمع ورفع مستوى الرعاية الصحية.'}
            </p>
          </div>
        </div>
      </section>

      <CollegeHistory aboutData={aboutData} />
      <OrganizationalStructure data={organizationData} />
      <StrategicGoals aboutData={aboutData} />
      <CollegeVideo aboutData={aboutData} />
      
      {/* Quick Facts */}
      {(aboutData?.quickFacts?.length > 0 || !aboutData) && (
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">حقائق سريعة عن الكلية</h2>
              <p className="text-xl opacity-90">أرقام تعكس مسيرة التميز والإنجاز</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(aboutData?.quickFacts || [
                { value: '2005', label: 'تأسست', description: 'منذ أكثر من 18 عاماً' },
                { value: '2,500+', label: 'خريجة', description: 'طبيبة متخصصة' },
                { value: 'دولي', label: 'اعتماد', description: 'من أفضل المؤسسات' },
                { value: 'الأولى', label: 'مرتبة', description: 'على مستوى المنطقة' }
              ]).map((fact, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold mb-2">{fact.label}</div>
                  <div className="text-2xl mb-2">{fact.value}{fact.suffix || ''}</div>
                  <div className="opacity-80">{fact.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer siteSettings={siteSettings} />
    </main>
  )
}
