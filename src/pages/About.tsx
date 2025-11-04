import { useEffect, useState } from "react";
import { Users, Award, Target, Lightbulb } from "lucide-react";

export default function About() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const values = [
    {
      icon: Target,
      number: "1",
      title: "Strategic Excellence",
      description: "We craft data-driven strategies tailored to your unique business goals and target audience.",
    },
    {
      icon: Award,
      number: "2",
      title: "Proven Track Record",
      description: "15+ years of delivering exceptional results for clients across diverse industries.",
    },
    {
      icon: Lightbulb,
      number: "3",
      title: "Innovation First",
      description: "Staying ahead with the latest trends and technologies in social media marketing.",
    },
    {
      icon: Users,
      number: "4",
      title: "Client Partnership",
      description: "Building lasting relationships through transparent communication and dedicated support.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670')",
            filter: `blur(${scrollY * 0.02}px) brightness(0.3)`,
          }}
        />
        <div className="relative z-10 text-center px-4">
          <p className="text-primary text-sm tracking-[0.3em] mb-4 uppercase">Who We Are</p>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-wider">ABOUT US</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670')",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Blessins Global Solutions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We are a dedicated social media marketing agency in the UK, committed to delivering effective 
              marketing solutions through our experienced team and diverse packages.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your trusted partner in social media marketing, delivering results with expertise. We transform 
              brands through strategic campaigns, engaging content, and data-driven insights that drive real business growth.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-card/30 backdrop-blur-sm p-8 border-2 border-border hover:border-primary transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-primary flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary-foreground">{value.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2 uppercase tracking-wide flex items-center gap-2">
                      <value.icon className="h-5 w-5" />
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-secondary/30 relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670')",
            filter: "blur(2px)",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Location</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We are located in the heart of the UK, ready to serve your marketing needs.
            </p>
            <div className="bg-card/50 backdrop-blur-sm p-8 border-2 border-primary/30">
              <p className="text-foreground text-lg">
                28, ST Thomas Gardens<br />
                Ilford, IG1 2PQ<br />
                London, United Kingdom
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
