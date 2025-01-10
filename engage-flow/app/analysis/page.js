import { SocialMediaDashboard } from '@/components/social-media-dashboard'
import SocialMediaAnalysis from '@/components/social-media-analysis'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default function Home() {
  return (
    <main className="min-h-screen bg-white  ">
      <Navbar />
      <SocialMediaDashboard />
      <SocialMediaAnalysis />
      <Footer />
    </main>
  )
}
