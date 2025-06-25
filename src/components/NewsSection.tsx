import { Calendar, Play } from "lucide-react";

export const NewsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-tv-blue mb-8 text-center">
          Dernier journal vidéo
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Video Thumbnail */}
          <div className="relative group cursor-pointer">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden aspect-video">
              {/* Presenter Image Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-tv-blue to-blue-700 flex items-center justify-center relative">
                <div className="w-32 h-32 bg-tv-yellow rounded-full flex items-center justify-center">
                  <div className="w-24 h-24 bg-tv-blue rounded-full flex items-center justify-center">
                    <span className="text-tv-white font-montserrat font-bold text-lg">
                      TV AGP
                    </span>
                  </div>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-tv-yellow rounded-full p-4">
                    <Play className="h-8 w-8 text-tv-blue" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* News Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-tv-yellow" />
              <span className="text-tv-blue font-opensans font-medium">
                25 Juin 2023
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-tv-blue mb-4">
              Les principales actualités du jour
            </h3>

            <p className="text-gray-600 font-opensans text-lg mb-6 leading-relaxed">
              Retrouvez toute l'actualité guinéenne avec nos présentateurs. Au
              programme : politique, économie, société et culture.
            </p>

            <button className="bg-tv-blue hover:bg-blue-800 text-tv-white font-montserrat font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300">
              <Play className="h-5 w-5" />
              Voir le journal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
