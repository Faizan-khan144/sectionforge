import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Workbench from './components/Workbench.jsx'
import Features from './components/Features.jsx'
import Pricing from './components/Pricing.jsx'
import Faq from './components/Faq.jsx'
import Cta from './components/Cta.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-paper antialiased">
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Workbench />
        <Features />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}