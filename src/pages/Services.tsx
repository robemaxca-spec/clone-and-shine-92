import { useEffect, useState } from "react";
import { Share2, BarChart3, PenTool, Megaphone, Camera, TrendingUp } from "lucide-react";

export default function Services() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: Share2,
      title: "Social Media Strategy",
      description: "Comprehensive social media strategies tailored to your brand's unique voice and objectives.",
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description: "Engaging content that resonates with your audience and drives meaningful interactions.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Data-driven insights to enhance your campaigns and maximize ROI across all platforms.",
    },
    {
      icon: Megaphone,
      title: "Social Media Advertising",
      description: "Targeted advertising campaigns that reach the right audience at the right time.",
    },
    {
      icon: Camera,
      title: "Visual Content Production",
      description: "Professional photography and video production for stunning visual storytelling.",
    },
    {
      icon: TrendingUp,
      title: "Growth Management",
      description: "Proven strategies to grow your follower base and increase engagement organically.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426')",
            filter: `blur(${scrollY * 0.02}px) brightness(0.3)`,
          }}
        />
        <div className="relative z-10 text-center px-4">
          <p className="text-primary text-sm tracking-[0.3em] mb-4 uppercase">What We Offer</p>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-wider">OUR SERVICES</h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574')",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Expert Social Media Marketing Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              From strategy to execution, we provide comprehensive social media marketing services 
              that drive results and grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-card/30 backdrop-blur-sm p-8 border-2 border-border hover:border-primary transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/30 relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670')",
            filter: "blur(2px)",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Why Choose Blessins Global Solutions?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 bg-primary mt-2"></div>
                <p className="text-lg text-muted-foreground">
                  <span className="text-primary font-semibold">Expert Team:</span> Our experienced 
                  professionals stay ahead of the latest social media trends and best practices.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 bg-primary mt-2"></div>
                <p className="text-lg text-muted-foreground">
                  <span className="text-primary font-semibold">Tailored Strategies:</span> We create 
                  customized solutions that align with your specific business goals.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 bg-primary mt-2"></div>
                <p className="text-lg text-muted-foreground">
                  <span className="text-primary font-semibold">Proven Results:</span> Track record of 
                  150+ successful projects and satisfied clients across various industries.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 bg-primary mt-2"></div>
                <p className="text-lg text-muted-foreground">
                  <span className="text-primary font-semibold">Transparent Reporting:</span> Regular 
                  updates and detailed analytics to track your campaign performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
