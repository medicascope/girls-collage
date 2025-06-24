import NewsDetail from '../../../components/NewsDetail'
import Navigation from '../../../components/Navigation'

export async function generateMetadata({ params }) {
  const { id } = await params
  
  // This would typically fetch from a database or API
  const newsData = {
    1: { title: 'كلية البنات الطبية تحتفل بتخريج الدفعة الجديدة', description: 'احتفلت كلية البنات الطبية بتخريج 150 طالبة من مختلف التخصصات الطبية' },
    2: { title: 'إطلاق برنامج التعليم الطبي التكاملي الجديد', description: 'أطلقت كلية البنات الطبية برنامجاً جديداً للتعليم الطبي التكاملي' }
  }
  
  const news = newsData[id] || { title: 'الأخبار', description: 'أخبار كلية البنات الطبية' }
  
  return {
    title: `${news.title} - كلية البنات الطبية`,
    description: news.description
  }
}

export default async function NewsDetailPage({ params }) {
  const { id } = await params
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navigation />
      <main className="pt-20">
        <NewsDetail slug={id} />
      </main>
    </div>
  )
} 