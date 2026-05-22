import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { ClientLogos } from '@/components/ClientLogos'
import { Solutions } from '@/components/Solutions'
import { Technology } from '@/components/Technology'
import { Pricing } from '@/components/Pricing'
import { Blog } from '@/components/Blog'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Chatbot } from '@/components/Chatbot'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ClientLogos />
      <Solutions />
      <Technology />
      <Pricing />
      <Blog />
      <About />
      <Contact />
      <Footer />
      <Chatbot />
    </main>
  )
}
