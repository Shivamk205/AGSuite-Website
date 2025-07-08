'use client';

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import './HeroVideo.css'

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Try to play the video
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Video started playing successfully');
            video.classList.add('video-loaded');
          })
          .catch((error) => {
            console.log('Video autoplay failed:', error);
            video.classList.add('video-loaded');
          });
      }

      // Add event listeners for debugging
      video.addEventListener('loadeddata', () => {
        console.log('Video data loaded');
      });

      video.addEventListener('error', (e) => {
        console.error('Video error:', e);
        video.style.display = 'none';
      });

      video.addEventListener('canplay', () => {
        console.log('Video can play');
      });
    }
  }, []);

  return (
    <>
      <section className="bg-gray-100 overflow-hidden h-[100dvh] min-h-max flex items-center relative">
        {/* Background Video/Image */}
        <div className="absolute inset-0 w-full h-full">
          {/* Fallback Background Image */}
          <div 
            className="hero-video-fallback"
            style={{
              backgroundImage: `url('/hero-bg.jpg')`
            }}
          />
          
          {/* Video */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="hero-video video-loading"
            style={{ zIndex: 0 }}
          >
            <source src="/final bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Video Overlay */}
          <div className="hero-overlay" />
        </div>

        {/* Content */}
        <div className="hero-content mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 pt-24">
          <div className="text-center flex flex-col items-center space-y-10">
            <span className="border border-white/20 px-3 py-0.5 rounded-full bg-white/10 backdrop-blur-sm text-white">
            Start Your Digital Journey
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl/tight xl:text-7xl/tight font-bold max-w-4xl capitalize drop-shadow-lg bg-gradient-to-r from-orange-500 via-purple-500 to-red-600 bg-clip-text text-transparent">
            Seamless Business Operations Begin Here.
            </h1>
            <p className="text-base text-white/90 text-center max-w-xl drop-shadow-md">
            Powering digital transformation for modern businesses.
AGSuite delivers tailored Zoho & NetSuite services to help you scale faster and smarter.
Let&apos;s build your success together.
            </p>
            <div className="flex justify-center">
              <Link href="#" className="px-8 h-12 rounded-full flex items-center gap-x-3 bg-gradient-to-r from-pink-600 to-red-700 text-white hover:from-orange-600 hover:via-purple-600 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                Let&apos;s talk
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
