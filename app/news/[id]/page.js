import { notFound } from 'next/navigation'
import NewsDetail from '../../../components/NewsDetail'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import { sanityFetch, queries } from '../../../lib/sanity'

export async function generateMetadata({ params }) {
  const { id } = await params
  
  const news = await sanityFetch({
    query: `*[_type == "news" && slug.current == $slug][0]{
      title,
      excerpt
    }`,
    params: { slug: id }
  })
  
  if (!news) {
    return {
      title: 'خبر غير موجود - كلية البنات الطبية'
    }
  }
  
  return {
    title: `${news.title} - كلية البنات الطبية`,
    description: news.excerpt || `اقرأ خبر ${news.title} في كلية البنات الطبية`
  }
}

export default async function NewsDetailPage({ params }) {
  const { id } = await params
  
  // Fetch news data and related news from Sanity
  const [newsData, relatedNews, siteSettings] = await Promise.all([
    sanityFetch({
      query: queries.singleNews,
      params: { slug: id }
    }),
    sanityFetch({
      query: queries.relatedNews,
      params: { slug: id }
    }),
    sanityFetch({ query: queries.siteSettings })
  ])

  // If news not found, return 404
  if (!newsData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navigation siteSettings={siteSettings} />
      <main className="pt-20">
        <NewsDetail newsData={newsData} relatedNews={relatedNews} />
      </main>
      <Footer siteSettings={siteSettings} />
    </div>
  )
} 