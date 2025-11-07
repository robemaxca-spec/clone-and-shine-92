import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { StatsSection } from "@/components/home/StatsSection";
import { NumberedFeatures } from "@/components/home/NumberedFeatures";
import { LargeImageTiles } from "@/components/home/LargeImageTiles";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { IconFeatures } from "@/components/home/IconFeatures";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Ltd",
      content: "Blessins Global Solutions transformed our social media presence remarkably! The results exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      content: "Outstanding service and incredible results. Our engagement rates have tripled since working with them.",
      rating: 5,
    },
    {
      name: "Emma Williams",
      role: "Founder, Creative Co",
      content: "Professional, responsive, and results-driven. Highly recommend their expertise in social media marketing!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426')",
            filter: `blur(${scrollY * 0.02}px) brightness(0.2)`,
            transform: `scale(${1 + scrollY * 0.0005})`,
            opacity: 0.8,
          }}
        />
        <div className="relative z-10 text-center px-4">
          <p className="text-primary text-sm md:text-base tracking-[0.3em] mb-4 uppercase">
            Expert Social Media Marketing
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-wider">
            EMPOWERING YOUR BRAND
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your trusted partner in social media marketing, delivering results with expertise.
          </p>
          <Link to="/packages">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
              View Packages
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Numbered Features */}
      <NumberedFeatures />

      {/* Large Image Tiles */}
      <LargeImageTiles />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Icon Features */}
      <IconFeatures />

      {/* CTA Banner */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to elevate your social media presence?
            </h2>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold"
              >
                GET QUOTATION
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative bg-secondary/20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670')",
            opacity: 0.08,
            filter: "blur(3px)",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm p-6 border border-border relative">
                <div className="absolute top-6 left-6 w-12 h-12 bg-primary flex items-center justify-center">
                  <span className="text-3xl text-primary-foreground font-bold">"</span>
                </div>
                <div className="mt-16">
                  <p className="text-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-primary">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
