const services = [
  {
    title: "INSTAGRAM MARKETING",
    description:
      "Elevate your Instagram presence with stunning visuals, strategic hashtags, and engaging stories that convert followers into customers.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=2574",
  },
  {
    title: "FACEBOOK ADVERTISING",
    description:
      "Reach your target audience with precision-targeted Facebook ads that deliver measurable results and exceptional ROI for your business.",
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=2574",
  },
  {
    title: "LINKEDIN STRATEGY",
    description:
      "Build your professional brand with LinkedIn strategies that establish thought leadership and generate quality B2B leads.",
    image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=2574",
  },
];

export const ServicesGrid = () => {
  return (
    <section className="py-20 bg-secondary/20 relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670')",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-card/50 backdrop-blur-sm group hover:bg-card transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  <span className="text-primary">{service.title.split(" ")[0]}</span>{" "}
                  <span className="text-foreground">{service.title.split(" ").slice(1).join(" ")}</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
