import NewsListing from '../../components/NewsListing'
import Navigation from '../../components/Navigation'

export const metadata = {
  title: 'الأخبار - كلية البنات الطبية',
  description: 'آخر أخبار وفعاليات كلية البنات الطبية وإنجازاتها العلمية والأكاديمية'
}

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navigation />
      <main className="pt-20">
        <NewsListing />
      </main>
    </div>
  )
} 