import { notFound } from 'next/navigation'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import GalleryDetail from '../../../components/gallery/GalleryDetail'
import { sanityFetch, queries } from '../../../lib/sanity'

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { id } = await params
  const gallery = await sanityFetch({
    query: `*[_type == "gallery" && slug.current == $slug][0]{
      title,
      description
    }`,
    params: { slug: id }
  })

  if (!gallery) {
    return {
      title: 'معرض غير موجود - كلية البنات الطبية'
    }
  }

  return {
    title: `${gallery.title} - معرض الصور - كلية البنات الطبية`,
    description: gallery.description || `استعرض صور ${gallery.title} في كلية البنات الطبية`
  }
}

export default async function GalleryDetailPage({ params }) {
  const { id } = await params
  // Fetch the specific gallery and related galleries
  const [galleryData, relatedGalleries, siteSettings] = await Promise.all([
    sanityFetch({
      query: queries.singleGallery,
      params: { slug: id }
    }),
    sanityFetch({
      query: queries.relatedGalleries,
      params: { slug: id }
    }),
    sanityFetch({ query: queries.siteSettings })
  ])

  // If gallery not found, return 404
  if (!galleryData) {
    notFound()
  }

  return (
    <main>
      <Navigation siteSettings={siteSettings} />
      <GalleryDetail 
        galleryData={galleryData} 
        relatedGalleries={relatedGalleries}
      />
      <Footer siteSettings={siteSettings} />
    </main>
  )
} 