import { MapPin, ArrowRight } from "lucide-react";

export const RegionsSection = () => {
  const regionNews = [
    {
      id: 1,
      location: "Labé",
      title: "Travaux routiers dans la région",
      description:
        "Modernisation des infrastructures routières pour améliorer la connectivité régionale.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      location: "N'Zérékoré",
      title: "Visite présidentielle historique",
      description:
        "Le Président de la République visite les projets de développement en cours dans la région forestière.",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      location: "Kankan",
      title: "Initiatives locales de développement",
      description:
        "Les communautés locales s'organisent pour promouvoir l'agriculture et l'éducation.",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-tv-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-tv-blue mb-8 text-center">
          Régions en action
        </h2>

        <div className="space-y-6">
          {regionNews.map((news, index) => (
            <div
              key={news.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {/* Image */}
                <div className="md:col-span-1">
                  <div className="h-48 md:h-full relative overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-tv-yellow text-tv-blue px-3 py-1 rounded-full flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span className="font-opensans font-semibold text-sm">
                        {news.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-2 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-montserrat font-bold text-tv-blue mb-3">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 font-opensans leading-relaxed mb-4">
                      {news.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-opensans">
                      Reportage
                    </span>
                    <button className="text-tv-blue hover:text-tv-yellow font-opensans font-semibold flex items-center gap-1 transition-colors duration-200">
                      Lire la suite
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="bg-tv-yellow hover:bg-yellow-400 text-tv-blue font-montserrat font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
            Voir toutes les régions
          </button>
        </div>
      </div>
    </section>
  );
};
