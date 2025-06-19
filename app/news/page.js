import NewsListing from '../../components/NewsListing'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { sanityFetch, queries } from '../../lib/sanity'

export const metadata = {
  title: 'الأخبار - كلية البنات الطبية',
  description: 'آخر أخبار وفعاليات كلية البنات الطبية وإنجازاتها العلمية والأكاديمية'
}

export default async function NewsPage() {
  const [newsData, siteSettings] = await Promise.all([
    sanityFetch({ query: queries.allNews }),
    sanityFetch({ query: queries.siteSettings })
  ])
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navigation siteSettings={siteSettings} />
      <main className="pt-20">
        <NewsListing newsData={newsData} />
      </main>
      <Footer siteSettings={siteSettings} />
    </div>
  )
} 