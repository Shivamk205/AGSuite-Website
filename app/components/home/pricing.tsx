'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import gradientDarkBg from '@/public/bg3.webp';

const plans = [
  {
    name: 'Starter Plan',
    users: 'Up to 10 Users',
    description: [
      'Ideal for small businesses starting with Netsuite',
      'Includes core ERP & CRM modules',
    ],
  },
  {
    name: 'Growth Plan',
    users: 'Up to 50 Users',
    description: [
      'For growing businesses with expanding teams',
      'Advanced modules and integrations included',
    ],
  },
  {
    name: 'Enterprise Plan',
    users: 'Unlimited Users',
    description: [
      'Best for large organizations',
      'Full suite access and premium support',
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={gradientDarkBg}
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-black opacity-50" /> {/* Optional overlay */}
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-100 mb-6">
          Choose Your{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-indigo-300 to-teal-400">
            Oracle Netsuite
          </span>{' '}
          Plan
        </h1>
        <p className="text-xl text-gray-100 mb-12 max-w-3xl mx-auto">
          Flexible user-based plans for every business size. Contact us for a personalized quote.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-md p-8 shadow-2xl rounded-xl text-center transform hover:scale-105 transition-all duration-300 flex flex-col h-full justify-between"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-800">
                {plan.name}
              </h3>
              <p className="text-3xl font-medium text-green-600 mb-6">{plan.users}</p>
              <ul className="space-y-3 text-left mb-8 px-4">
                {plan.description.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-green-500 text-lg mt-1">✓</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#form"
                className="mt-auto inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get a Quote
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white text-lg">
            * Contact us for a custom Oracle Netsuite solution tailored to your business needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
