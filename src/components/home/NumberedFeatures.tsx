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
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleItems((prev) => [...new Set([...prev, index])]);
              }, index * 150); // Stagger animation
            }
          });
        },
        { threshold: 0.2 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

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
          {features.map((feature, index) => (
            <div
              key={feature.number}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`flex gap-6 group hover:transform hover:scale-105 transition-all duration-500 ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary flex items-center justify-center transition-all duration-300 group-hover:bg-gold-hover">
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
