import { useState } from "react";
import { Menu, X } from "lucide-react";

export const TVAGPHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    "En direct",
    "Journal Vidéo",
    "Régions en Action",
    "Interviews & Débats",
    "Archives",
  ];

  return (
    <header className="bg-tv-blue shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-montserrat font-bold">
              <span className="bg-tv-yellow text-tv-blue px-2 py-1 rounded-sm">
                TV
              </span>
              <span className="text-tv-white ml-1">AGP</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-tv-white hover:text-tv-yellow transition-colors duration-200 font-opensans font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-tv-white hover:text-tv-yellow transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-tv-blue">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block px-3 py-2 text-tv-white hover:text-tv-yellow transition-colors duration-200 font-opensans font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
