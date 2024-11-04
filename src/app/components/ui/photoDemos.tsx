"use client";

import { motion } from "framer-motion";
import { Building2, Search, MessageSquare, TrendingUp } from "lucide-react";

const PhotoDemos = () => {
  const features = [
    {
      title: "Property Listings",
      description:
        "Browse detailed property listings with comprehensive investment metrics and ROI calculations.",
      icon: Building2,
      image: "/images/propertysearch.png",
      alt: "Property listing interface",
    },
    {
      title: "Deal Search",
      description:
        "Find exactly what you're looking for with our advanced search filters and deal comparison tools.",
      icon: Search,
      image: "/images/propertymodalstart.png",
      alt: "Deal search interface",
    },
    {
      title: "Direct Messaging",
      description:
        "Connect directly with property sourcers and investors through our secure messaging system.",
      icon: MessageSquare,
      image: "/images/modalcontacts.png",
      alt: "Messaging interface",
    },
    {
      title: "Investment Breakdown",
      description:
        "Get a clear breakdown of the deal to enable investors to visualise their investment journey.",
      icon: TrendingUp,
      image: "/images/modalinvestmentbreakdown.png",
      alt: "Deal Breakdown",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Platform Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how our platform streamlines property investment and deal
            sourcing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-video relative bg-gray-100 dark:bg-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src={feature.image} alt="image" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground">
            * Interface previews are subject to change as we continue to improve
            the platform
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PhotoDemos;
