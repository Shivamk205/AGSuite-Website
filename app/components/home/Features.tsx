import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Define the Feature type
interface Feature {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

const features: Feature[] = [
  {
    id: "netsuite",
    title: "Netsuite Integration",
    description: "Connect your business operations seamlessly with Netsuite.",
    benefits: [
      "Unified business management platform",
      "Real-time financial reporting",
      "Advanced inventory management",
      "Multi-location support",
      "Custom workflow automation"
    ],
    image: "/netsuitedash.png",
  },
  {
    id: "zoho",
    title: "Zoho CRM",
    description: "Manage leads and clients effectively using Zoho tools.",
    benefits: [
      "360-degree customer view",
      "Sales pipeline management",
      "Marketing automation",
      "Customer support integration",
      "Advanced analytics and reporting"
    ],
    image: "/zohodash.png",
  },
  {
    id: "salesforce",
    title: "Salesforce Solutions",
    description: "Transform your sales and customer service with Salesforce.",
    benefits: [
      "Cloud-based CRM platform",
      "Lead and opportunity management",
      "Customer service automation",
      "Advanced reporting and analytics",
      "Mobile app integration"
    ],
    image: "/zohodash.png", // Using Zoho image temporarily
  },
];

const Features = () => {
  const [activeFeature, setActiveFeature] = useState<Feature>(features[0]);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  const handleMouseEnter = (feature: Feature) => {
    setHoveredFeature(feature.id);
    setActiveFeature(feature);
  };

  const handleMouseLeave = () => {
    setHoveredFeature(null);
  };

  return (
    <section className="py-20 bg-cover bg-center bg-gradient-to-br from-pink-100 via-orange-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        {/* Title and image side-by-side */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          <div className="space-y-4 max-w-xl">
            <h1 className="text-3xl font-semibold text-blue-950 md:text-4xl xl:text-5xl leading-tight">
              Let&apos;s us help you grow your business
            </h1>
            <p className="text-gray-700">Discover powerful integrations that scale with you.</p>
          </div>

          {/* Image beside heading */}
          <div className="w-full max-w-900 h-64 md:h-50 relative mr-13">
            <Image 
              src="/banner2.png"
              alt="Heading side"
              fill
              className="object-contain rounded-md"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 flex flex-col md:flex-row gap-8 xl:gap-10">
          {/* Left hover items */}
          <div className="md:w-96 lg:w-[26rem] space-y-5 flex flex-col mt-15 mx-5">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                onMouseEnter={() => handleMouseEnter(feature)}
                onMouseLeave={handleMouseLeave}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                animate={{
                  backgroundColor: hoveredFeature === feature.id ? "rgba(255, 255, 255, 1)" : "rgba(249, 250, 251, 1)",
                  boxShadow: hoveredFeature === feature.id ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" : "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="cursor-pointer p-4 space-y-3 rounded-lg"
              >
                <motion.h2 
                  className="text-xl font-semibold text-gray-900"
                  animate={{ color: hoveredFeature === feature.id ? "#111827" : "#111827" }}
                >
                  {feature.title}
                </motion.h2>
                <motion.p 
                  className="text-gray-700 text-sm"
                  animate={{ color: hoveredFeature === feature.id ? "#374151" : "#374151" }}
                >
                  {feature.description}
                </motion.p>
                
                {/* Extended information that appears on hover */}
                <AnimatePresence>
                  {hoveredFeature === feature.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 border-t border-gray-200">
                        <div className="space-y-2">
                          <motion.h4 
                            className="font-semibold text-gray-800 text-sm"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                          >
                            Key Benefits:
                          </motion.h4>
                          <ul className="space-y-1">
                            {feature.benefits.slice(0, 3).map((benefit, index) => (
                              <motion.li 
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ 
                                  delay: 0.2 + (index * 0.1), 
                                  duration: 0.4,
                                  ease: "easeOut"
                                }}
                                className="flex items-start gap-2 text-sm text-gray-600"
                              >
                                <motion.svg 
                                  className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" 
                                  fill="currentColor" 
                                  viewBox="0 0 20 20"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: 0.3 + (index * 0.1), duration: 0.3 }}
                                >
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </motion.svg>
                                <span>{benefit}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        
                        <motion.div 
                          className="mt-3 pt-2 border-t border-gray-200"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5, duration: 0.3 }}
                        >
                          <motion.button 
                            className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-2 group"
                            whileHover={{ gap: 12 }}
                            transition={{ duration: 0.3 }}
                          >
                            Learn More
                            <motion.svg 
                              className="w-4 h-4" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                              whileHover={{ x: 8, scale: 1.1 }}
                              transition={{ duration: 0.3 }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </motion.svg>
                          </motion.button>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right image & description */}
          <motion.div 
            className="flex-1 flex flex-col items-center justify-center relative rounded-lg overflow-hidden p-6"
            layout
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.div 
              className="relative w-full h-80 md:h-[400px]"
              layout
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.div
                key={activeFeature.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full h-full"
              >
                <Image
                  src={activeFeature.image}
                  alt={activeFeature.title}
                  fill
                  className="object-contain rounded-lg"
                />
              </motion.div>
            </motion.div>
            <motion.div 
              className="mt-5 text-center"
              layout
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.h3 
                key={`title-${activeFeature.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-xl font-bold text-gray-800"
              >
                {activeFeature.title}
              </motion.h3>
              <motion.p 
                key={`desc-${activeFeature.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                className="text-gray-600 text-sm"
              >
                {activeFeature.description}
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
