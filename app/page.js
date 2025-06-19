import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import VisionMission from '../components/VisionMission'
import LatestNews from '../components/LatestNews'
import QuickStats from '../components/QuickStats'
import FeaturedGallery from '../components/FeaturedGallery'
import DeanMessage from '../components/DeanMessage'
import { sanityFetch, queries } from '../lib/sanity'

export default async function Home() {
  // Fetch data from Sanity
  const [heroData, visionMissionData, newsData, deanMessageData, galleriesData] = await Promise.all([
    sanityFetch({ query: queries.hero }),
    sanityFetch({ query: queries.visionMission }),
    sanityFetch({ query: queries.latestNews }),
    sanityFetch({ query: queries.deanMessage }),
    sanityFetch({ query: queries.featuredGalleries })
  ])

  return (
    <main>
      <Navigation />
      <Hero heroData={heroData} />
      <VisionMission visionMissionData={visionMissionData} />
      <QuickStats />
      <DeanMessage deanMessageData={deanMessageData} />
      <LatestNews newsData={newsData} />
      <FeaturedGallery galleriesData={galleriesData} />
      <Footer />
    </main>
  )
}
