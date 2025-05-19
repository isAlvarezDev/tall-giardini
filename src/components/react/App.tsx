import gsap from "gsap"
import CallToAction from "./CTA"
import Footer from "./Footer"
import FunnelSection from "./FunnelSelection"
import Header from "./Header"
import Hero from "./Hero"
import InfiniteMarqueeComponent from "./InfiniteMarquee"
import InfiniteMarquee from "./InfiniteMarquee"
import ModelSection from "./ModelSection"
// import ModelSection from "./ModelSelection"
import Reviews from "./Reviews"
import Testimonial from "./Testimonial"
import TrafficInsights from "./TrafficInsights"
import TailoredSolutions from "./TailoredSolutions"
import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect, useRef } from "react"

export const App = () => {
  return (
    <ReactLenis root>
      <div className="bg-gradient-to-b from-[#0A0A0A] to-[#121212] text-white">
        <Header />
        <Hero />
        <div className="overflow-hidden">
        <InfiniteMarqueeComponent />
        </div>
        <TrafficInsights />
        <TailoredSolutions />
        <Reviews />
        <ModelSection />
        <Footer />
        {/* <FunnelSection /> */}
        {/* <Testimonial /> */}
        {/* <ModelSection /> */}
        {/* <CallToAction /> */}
      </div>
    </ReactLenis>
  )
}