import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection'
import SystemsSection from './components/SystemsSection'
import MaterialsSection from './components/MaterialsSection'
import ProcessSection from './components/ProcessSection'
import CTASection from './components/CTASection'

export default function App() {
  return (
    <div className="bg-hero-bg min-h-screen font-sora">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <SystemsSection />
      <MaterialsSection />
      <ProcessSection />
      <CTASection />
    </div>
  )
}
