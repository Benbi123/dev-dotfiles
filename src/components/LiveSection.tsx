import { Play } from "lucide-react";

export const LiveSection = () => {
  return (
    <section className="bg-gradient-to-r from-tv-blue to-blue-800 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* EN DIRECT Banner */}
        <div className="bg-tv-yellow text-tv-blue px-6 py-3 rounded-lg inline-block mb-6">
          <h2 className="text-xl md:text-2xl font-montserrat font-bold">
            EN DIRECT
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Video Player */}
          <div className="relative">
            <div className="bg-black rounded-lg overflow-hidden aspect-video">
              {/* YouTube Embed Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                <button className="bg-tv-yellow hover:bg-yellow-400 text-tv-blue font-montserrat font-semibold px-8 py-4 rounded-lg flex items-center gap-3 transition-all duration-300 transform hover:scale-105">
                  <Play className="h-6 w-6" />
                  Regarder le direct
                </button>
              </div>
            </div>
          </div>

          {/* Live Info */}
          <div className="text-tv-white">
            <h3 className="text-2xl md:text-3xl font-montserrat font-bold mb-4">
              Diffusion en cours
            </h3>
            <p className="text-lg md:text-xl font-opensans mb-6 text-gray-200">
              Cérémonie d'inauguration à 18h00
            </p>
            <div className="bg-red-600 text-white px-4 py-2 rounded-full inline-flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span className="font-opensans font-medium">LIVE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
