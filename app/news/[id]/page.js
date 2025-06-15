import NewsDetail from '../../../components/NewsDetail'
import Navigation from '../../../components/Navigation'

export async function generateMetadata({ params }) {
  // This would typically fetch from a database or API
  const newsData = {
    1: { title: 'كلية البنات الطبية تحتفل بتخريج الدفعة الجديدة', description: 'احتفلت كلية البنات الطبية بتخريج 150 طالبة من مختلف التخصصات الطبية' },
    2: { title: 'إطلاق برنامج التعليم الطبي التكاملي الجديد', description: 'أطلقت كلية البنات الطبية برنامجاً جديداً للتعليم الطبي التكاملي' }
  }
  
  const news = newsData[params.id] || { title: 'الأخبار', description: 'أخبار كلية البنات الطبية' }
  
  return {
    title: `${news.title} - كلية البنات الطبية`,
    description: news.description
  }
}

export default function NewsDetailPage({ params }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navigation />
      <main className="pt-20">
        <NewsDetail id={params.id} />
      </main>
    </div>
  )
} 