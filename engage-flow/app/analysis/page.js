import { SocialMediaDashboard } from '@/components/social-media-dashboard'
import SocialMediaAnalysis from '@/components/social-media-analysis'
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <SocialMediaDashboard />
      <SocialMediaAnalysis />
    </main>
  )
}
