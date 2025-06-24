import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import GalleryListing from '../../components/gallery/GalleryListing'
import { sanityFetch, queries } from '../../lib/sanity'

export const metadata = {
  title: 'معرض الصور - كلية البنات الطبية',
  description: 'استعرض مجموعة شاملة من الصور عالية الجودة لأهم الأحداث والفعاليات والإنجازات في كلية البنات الطبية'
}

export default async function GalleryPage() {
  // Fetch all galleries 
  const [galleriesData, siteSettings] = await Promise.all([
    sanityFetch({ query: queries.allGalleries }),
    sanityFetch({ query: queries.siteSettings })
  ])

  return (
    <main>
      <Navigation siteSettings={siteSettings} />
      <GalleryListing galleriesData={galleriesData} />
      <Footer siteSettings={siteSettings} />
    </main>
  )
} 