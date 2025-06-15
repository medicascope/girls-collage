import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import VisionMission from '../components/VisionMission'
import LatestNews from '../components/LatestNews'
import QuickStats from '../components/QuickStats'
import FeaturedGallery from '../components/FeaturedGallery'
import DeanMessage from '../components/DeanMessage'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <VisionMission />
      <QuickStats />
      <DeanMessage />
      <LatestNews />
      <FeaturedGallery />
      <Footer />
    </main>
  )
}
