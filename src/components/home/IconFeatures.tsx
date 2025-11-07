import { DollarSign, MessageCircle, PenTool, Clock } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "BUDGET ESTIMATION",
    description:
      "Transparent pricing and detailed budget breakdowns to help you plan your social media marketing investment effectively.",
  },
  {
    icon: MessageCircle,
    title: "FREE CONSULTATION",
    description:
      "Expert consultation to understand your needs and create a customized strategy that aligns with your business goals.",
  },
  {
    icon: PenTool,
    title: "CUSTOM STRATEGY",
    description:
      "Tailored social media strategies designed specifically for your brand, audience, and business objectives.",
  },
  {
    icon: Clock,
    title: "QUICK DELIVERY",
    description:
      "Fast turnaround times without compromising quality, ensuring your campaigns launch on schedule every time.",
  },
];

export const IconFeatures = () => {
  return (
    <section className="py-20 bg-background relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670')",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 border-2 border-primary rounded-full group-hover:bg-primary transition-all duration-300">
                  <feature.icon className="h-12 w-12 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 tracking-wide">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
