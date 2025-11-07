const tiles = [
  {
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574",
    title: "SOCIAL MEDIA STRATEGY",
  },
  {
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2574",
    title: "CONTENT CREATION",
  },
  {
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2670",
    title: "BRAND MANAGEMENT",
  },
  {
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2531",
    title: "ANALYTICS & INSIGHTS",
  },
];

export const LargeImageTiles = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {tiles.map((tile, index) => (
            <div
              key={index}
              className="relative h-96 overflow-hidden group cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110 group-hover:blur-sm"
                style={{ backgroundImage: `url('${tile.image}')` }}
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-700" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <h3 className="text-4xl font-black text-foreground tracking-widest text-center px-8">
                  {tile.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
