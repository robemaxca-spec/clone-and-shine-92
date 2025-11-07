import { useEffect, useRef, useState } from "react";

const features = [
  {
    number: "1",
    title: "TARGETED CAMPAIGNS",
    description: "Strategic social media campaigns designed to reach your ideal audience and maximize engagement across all platforms.",
  },
  {
    number: "2",
    title: "CONTENT EXCELLENCE",
    description: "Premium content creation that resonates with your audience and builds lasting brand recognition.",
  },
  {
    number: "3",
    title: "DATA INSIGHTS",
    description: "Comprehensive analytics and reporting to track performance and optimize your social media strategy.",
  },
  {
    number: "4",
    title: "BRAND GROWTH",
    description: "Proven strategies to increase your brand visibility and grow your social media presence organically.",
  },
  {
    number: "5",
    title: "ENGAGEMENT BOOST",
    description: "Authentic community management that drives meaningful interactions and builds loyal followers.",
  },
  {
    number: "6",
    title: "24/7 SUPPORT",
    description: "Round-the-clock support and monitoring to ensure your brand maintains excellence at all times.",
  },
];

export const NumberedFeatures = () => {
  return (
    <section className="py-20 relative bg-background">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574')",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="flex gap-6 group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary flex items-center justify-center">
                  <span className="text-5xl font-bold text-primary-foreground">{feature.number}</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary mb-3 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
