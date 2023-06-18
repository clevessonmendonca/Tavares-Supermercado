'use client'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Offers } from './components/Offers'

export default function Home() {
  return (
    <main>
      <div>
      <Navbar />
      <Hero />
      <Offers />
    </div>
    </main>
  )
}
