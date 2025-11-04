import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Packages() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const packages = [
    {
      name: "Starter",
      price: "£499",
      period: "per month",
      description: "Perfect for small businesses starting their social media journey",
      features: [
        "3 Social Media Platforms",
        "12 Posts per Month",
        "Basic Analytics Report",
        "Content Calendar",
        "Email Support",
        "1 Strategy Session",
      ],
      highlighted: false,
    },
    {
      name: "Professional",
      price: "£999",
      period: "per month",
      description: "Ideal for growing businesses looking to expand their reach",
      features: [
        "5 Social Media Platforms",
        "24 Posts per Month",
        "Advanced Analytics Dashboard",
        "Content Calendar",
        "Priority Email & Phone Support",
        "2 Strategy Sessions",
        "Monthly Performance Review",
        "Competitor Analysis",
        "Social Media Advertising (£200 ad spend)",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "£1,999",
      period: "per month",
      description: "Comprehensive solution for established brands",
      features: [
        "All Social Media Platforms",
        "40 Posts per Month",
        "Real-time Analytics Dashboard",
        "Dedicated Account Manager",
        "24/7 Priority Support",
        "Weekly Strategy Sessions",
        "Bi-weekly Performance Reviews",
        "In-depth Competitor Analysis",
        "Social Media Advertising (£500 ad spend)",
        "Influencer Outreach",
        "Crisis Management",
        "Custom Graphics & Video Content",
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670')",
            filter: `blur(${scrollY * 0.02}px) brightness(0.3)`,
          }}
        />
        <div className="relative z-10 text-center px-4">
          <p className="text-primary text-sm tracking-[0.3em] mb-4 uppercase">Choose Your Plan</p>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-wider">OUR PACKAGES</h1>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574')",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Tailored Marketing Packages
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the perfect package for your business needs. All prices are in GBP and include VAT.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative bg-card/30 backdrop-blur-sm p-8 border-2 transition-all duration-300 ${
                    pkg.highlighted
                      ? "border-primary scale-105 lg:scale-110"
                      : "border-border hover:border-primary"
                  }`}
                >
                  {pkg.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 text-sm font-bold uppercase tracking-wider">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2 uppercase tracking-wide">
                      {pkg.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-primary">{pkg.price}</span>
                      <span className="text-muted-foreground">/ {pkg.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact">
                    <Button
                      className={`w-full ${
                        pkg.highlighted
                          ? "bg-primary hover:bg-primary/90"
                          : "bg-secondary hover:bg-secondary/90"
                      }`}
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-muted-foreground mb-4">
                Need a custom package? Contact us for a tailored solution.
              </p>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Request Custom Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
