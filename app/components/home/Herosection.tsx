'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import './HeroVideo.css';
import Image from 'next/image';

const videos = [
  {
    src: '/herovid.mp4',
    heading: 'Start Your Digital Journey',
    title: 'Simplify Your Business'
  },
  {
    src: '/herovid1.mp4',
    heading: 'Empower Your Team',
    title: 'Collaboration Meets Innovation.'
  },
  {
    src: '/herovid2.mp4',
    heading: 'Transform with Technology',
    title: 'Future-Proof Your Business.'
  }
];

export default function HeroSection() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && !isNaN(video.duration)) {
      setProgress((video.currentTime / video.duration) * 100);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Optional: only reload if src changes
      video.load();
      video.play().catch(() => {});
      setProgress(0);
    }
  }, [currentVideo]);

  const { title, src } = videos[currentVideo];

  return (
    <section className="bg-gray-100 overflow-hidden h-[100dvh] min-h-max flex items-center relative">
      {/* Background Video */}
      {/* Top-right Corner Decoration - ensure above video */}
      <div className="absolute top-0 z-1 pointer-events-none ">
        <Image
          src="/contentimage3.png"
          alt="Corner Decoration"
          width={500}
          height={150}
          className="opacity-15 -scale-x-100"
        />
      </div>
      <div className="absolute inset-0 w-full h-full z-0">
        <div
          className="hero-video-fallback"
          style={{ backgroundImage: `url('/hero-bg.jpg')` }}
        />
        {/* Black overlay for first video */}
        {currentVideo === 0 && (
          <div className="absolute inset-0 bg-black opacity-50 z-10 pointer-events-none" />
        )}
        <video
          ref={videoRef}
          autoPlay
          loop={false}
          muted
          playsInline
          preload="auto"
          className="hero-video"
          onEnded={handleVideoEnd}
          onTimeUpdate={handleTimeUpdate}
        >
          <source src={src} type="video/mp4" />
          <Image src="/hero-bg.jpg" alt="Background fallback" width={1920} height={1080} style={{ width: '100%', height: 'auto' }} />
        </video>
        <div className="hero-overlay" />

        {/* Horizontal Progress Bars */}
        <div className="absolute bottom-8 right-8 flex flex-row items-end z-10 space-x-2">
          {videos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentVideo(idx);
                setProgress(0);
              }}
              className="relative w-10 h-1 bg-white/30 overflow-hidden focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200"
              style={{ cursor: 'pointer', outline: 'none', border: 'none', padding: 0 }}
              aria-label={`Go to video ${idx + 1}`}
            >
              {currentVideo === idx && (
                <div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-orange-500 to-red-600 transition-all duration-200"
                  style={{ width: `${progress}%` }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="hero-content mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-2 pt-24 flex justify-start relative z-10">
        <div className="text-left flex flex-col items-start space-y-10 max-w-2xl ml-0 md:ml-12 lg:ml-24">
          {/* <span className="border border-white/20 px-3 py-0.5 rounded-full bg-white/10 backdrop-blur-sm text-white">
            {heading}
          </span> */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl/tight xl:text-7xl/tight font-bold max-w-4xl capitalize drop-shadow-lg bg-gradient-to-r from-orange-500 via-purple-500 to-red-600 bg-clip-text text-transparent">
            {title}
          </h1>
            {/* Get Started Button */}
            <div className="flex justify-start mt-4">
              <Link
                href="#"
                className="px-8 h-12 rounded-full flex items-center gap-x-3 bg-gradient-to-r from-pink-600 to-red-700 text-white hover:from-orange-600 hover:via-purple-600 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get&apos; Started
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>
            </div>
            {/* Technology Partner logos */}
            <div className="my-5 mb-10 flex flex-col items-start space-y-1 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-5">
              <span className="text-white/80 text-2xl font-bold tracking-wide">Technology Partner</span>
              <div className="flex flex-row items-center space-x-3 sm:mt-0">
                <Image src="/oracle logo.png" alt="Oracle Logo" width={120} height={40} className="h-19 w-auto object-contain" />
                <Image src="/zohologo.png" alt="Zoho Logo" width={120} height={40} className="h-19 w-auto object-contain" />
              </div>
            </div>
        </div>
      </div>
        {/* Right Side Sentence and Video Bars */}
        <div className="hidden lg:flex flex-col items-end absolute bottom-8 right-8 z-10 max-w-2xl">
          {/* <div className="text-white/90 text-base text-left drop-shadow-lg mb-3 ml-55">
            AGSuite is your trusted cloud solutions partner, specializing in Oracle NetSuite and Zoho platforms. We help businesses streamline operations, boost productivity, and grow smarter with powerful, scalable tools tailored to their needs.
          </div> */}
          <div className="flex flex-row items-center space-x-2">
            {videos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentVideo(idx);
                  setProgress(0);
                }}
                className="relative w-10 h-1 bg-white/30 overflow-hidden focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200"
                style={{ cursor: 'pointer', outline: 'none', border: 'none', padding: 0 }}
                aria-label={`Go to video ${idx + 1}`}
              >
                {currentVideo === idx && (
                  <div
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-orange-500 to-red-600 transition-all duration-200"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
    </section>
  );
}
