"use client";

import Hero from "../components/hero";
import MarqueeCard from "../components/marqueecard";
import Card from "../card/page";
import Testimonials from "../components/testimonials";
import  MarqueeDemo  from "../components/page";
import Faqs from "../components/faqs";
import FaqTutorialSection from "../components/faqtutorialsection";
import OrbitSection from "../components/orbitsection";
import HuboHeading from "../components/huboheading";

export default function Home() {
  return (
    <div className="mt-10">
      <Hero
        title="Empower Your Business with Innovative Web Solutions"
        description="We build high-performance websites and applications that engage your customers and grow your brand. From design to deployment — we've got you covered."
        imageSrc="/img/web-application-software.png"
      />
      
      <FaqTutorialSection/>
      <Card/>
      <MarqueeCard/>
      <HuboHeading text="Welcome to HuboWeb Technologies, where creativity meets code, and digital experiences come to life with innovation and precision." />
      <OrbitSection/>
      <Testimonials/>
      {/* <ImageMasonry/> */}
      {/* <FAQSection/> */}
      <MarqueeDemo/>
      {/* <HeroCard/> */}
      <Faqs imageSrc="/img/faq-removebg-preview.png"/>
      
    </div>
  );
}
