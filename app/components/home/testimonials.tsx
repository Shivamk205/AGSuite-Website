'use client';

import { useState } from 'react';
import Image from 'next/image';
import bg5 from '@/public/bg3.webp';

const testimonials = [
  {
    logoUrl: '/logos/ngi-uk.png',
    text: `AGSuite solves all our problems regarding NetSuite Application. This has improved our overall business productivity and we are capable of assessing our NetSuite functions and problem-solving capacities.`,
    author: 'NGI UK, CEO',
  },
  {
    logoUrl: '/logos/agriapp.png',
    text: `I wish to express my profound satisfaction with AGSuite Technologies. I had the privilege of collaborating with them for the Zoho One implementation, and I am sincerely grateful for the exceptional support extended by their team.`,
    author: 'AgriApp Technologies Pvt Ltd, Business Analyst',
  },
  {
    logoUrl: '/logos/icam.png',
    text: `Great service and customisations as needed by the team for Zoho designing and implementation.`,
    author: 'iCan K‑Mint Wealth, Managing Partner – Wealth',
  },
  {
    logoUrl: '/logos/allwave.png',
    text: `Zoho has enhanced the way of mapping the progress, monitoring the company's growth and made our operations simplified. Special thanks to Rajat and his team for extremely great support pre and post execution.`,
    author: 'Allwave‑AV Systems, Vice President, Business Development',
  },
  {
    logoUrl: '/logos/pgpaper.png',
    text: `We had a drastic experience with our previous technology vendor. However, when we came in contact with AGSuite, they provided impeccable customer service and resolved queries 24x7.`,
    author: 'PG Paper, Vice President, Business Development',
  },
  {
    logoUrl: '/logos/coastal.png',
    text: `We went operational with Go Live on January 15. AGSuite helped streamline business operations and made our functioning more systematic.`,
    author: 'Coastal Group UK, Director',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const len = testimonials.length;

  return (
    <section
      className="relative py-20 text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg5.src})` }}
    >
      <h2 className="text-3xl font-bold text-white mb-12">What Our Clients Say</h2>

      {/* Left Arrow */}
      <button
        onClick={() => setCurrent((current - 1 + len) % len)}
        className="absolute left-2 ml-10 top-1/2 transform -translate-y-1/2 text-6xl text-white hover:scale-110"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => setCurrent((current + 1) % len)}
        className="absolute right-2 mr-10 top-1/2 transform -translate-y-1/2 text-6xl text-white hover:scale-110"
      >
        ›
      </button>

      {/* Testimonial Content */}
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-4 flex justify-center">
          <Image
            src={testimonials[current].logoUrl}
            alt="Client Logo"
            width={120}
            height={60}
            className="object-contain"
          />
        </div>
        <p className="text-lg text-white italic mb-4">&quot;{testimonials[current].text}&quot;</p>
        <p className="text-gray-200 font-semibold">{testimonials[current].author}</p>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 w-2 rounded-full transition duration-300 ${
                idx === current ? 'bg-white' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
