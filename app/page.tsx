'use client';

import HeroSection from './components/home/Herosection';
import Features from './components/home/Features';
import Content from './components/home/content';
import CtaSection from './components/home/ctasection';
import Blog from './components/home/blog'
import TestimonialSection from './components/home/testimonials';
import Pricing from './components/home/pricing';
import Counter from './components/home/counter'

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <HeroSection />
      <Counter/>
      <Content/>
      <Features />
    
      <CtaSection/>
      <TestimonialSection/>

      <Blog/>
      <Pricing/>
      

      
    </main>
  );
}
