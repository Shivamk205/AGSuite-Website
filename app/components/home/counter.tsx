'use client';

import Image from 'next/image';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import bg3 from '@/public/bg3.webp';

const MetricsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      className="relative py-24 space-y-10 mt-10 bg-gray-900 mx-10 rounded-4xl overflow-hidden"
      style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Background Image */}
      <Image
        src={bg3}
        alt="Background"
        fill
        className="object-cover object-center opacity-40 z-0"
        priority
      />
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col md:flex-row md:items-center gap-12">
        {/* Left Side: Headline and Text */}
        <div className="w-full md:w-1/2 space-y-10">
          <h1 className="text-4xl font-bold text-white capitalize ml-10">
            Empowering Enterprises Globally with Proven Expertise
          </h1>
          <p className="text-white ml-10 text-lg">
            Trusted by 180+ businesses worldwide, AGSuite delivers scalable NetSuite solutions with unmatched precision and global reach.
          </p>
          <a
            href="#"
            className="ml-10 px-4 py-2 font-bold sm:px-6 sm:py-3 w-full max-w-xs text-base sm:text-lg bg-gradient-to-r from-red-500 to-red-500 text-white rounded-2xl shadow-lg hover:opacity-90 transition flex items-center justify-center"
          >
            Know More About Us <span className="ml-3 text-xl">&gt;</span>
          </a>
        </div>

        {/* Right Side: Metrics */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div
            ref={ref}
            className="grid sm:grid-cols-2 gap-4 text-center children:space-y-3 children:bg-gray-800 children:p-4 children:rounded-lg"
          >
            <div className="mx-12">
              <span className="font-semibold text-2xl md:text-6xl text-white">
                {inView ? <CountUp end={180} duration={2} suffix="+" /> : '0+'}
              </span>
              <h2 className="text-white font-medium my-2 mx-1">Enterprises Served</h2>
            </div>
            <div>
              <span className="font-semibold text-2xl md:text-6xl text-white">
                {inView ? <CountUp end={30} duration={2} suffix="+" /> : '0+'}
              </span>
              <h2 className="text-white font-medium my-2 mr-4">NetSuite Experts</h2>
            </div>
            <div>
              <span className="font-semibold text-2xl md:text-6xl text-white">
                {inView ? <CountUp end={50} duration={2} suffix="+" /> : '0+'}
              </span>
              <h2 className="text-white font-medium my-2 mx-1">Global Roll-outs</h2>
            </div>
            <div>
              <span className="font-semibold text-2xl md:text-6xl text-white">
                {inView ? <CountUp end={15} duration={2} suffix="+" /> : '0+'}
              </span>
              <h2 className="text-white font-medium my-2 ml-3">Years Experience</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
