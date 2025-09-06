// Footer component
// import FastImage from "../Performance/FastImage";
import legacy from "../../assets/Images/legacy.png";

const Footer = () => {
  // Handle navigation - you can customize this based on your routing setup
  const handleNavigation = (path: string) => {
    // For React Router, you would use:
    // navigate(path);

    // For now, using window.location (replace with your routing solution)
    window.location.href = path;
  };

  return (
    <footer className="bg-[#001F58] text-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={legacy}
                alt="Legacy54 Logo"
                className="w-25 h-25 sm:w-24 sm:h-24 rounded-full shadow-lg ring-2 ring-white/40 bg-white p-2 object-contain"
                // priority={false}
              />
              {/* <img 
                src={legacy}
                alt="LEGACY54" 
                className="h-2"
              /> */}
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Elevating African sports through excellence, innovation and
              unwavering commitment to developing talent across all 54 countries
              of Africa.
            </p>
            <div className="text-white/60 space-y-1">
              <p>Nigeria | Africa | Global</p>
              <p>
                <a 
                  href="mailto:legacy54sports@gmail.com"
                  className="hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  legacy54sports@gmail.com
                </a>
              </p>
              <p>
                <a 
                  href="https://www.legacy54.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  www.legacy54.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <button
                  onClick={() => handleNavigation("/services")}
                  className="hover:text-white transition-colors duration-200 text-left w-full cursor-pointer"
                >
                  Event Management
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/services")}
                  className="hover:text-white transition-colors duration-200 text-left w-full cursor-pointer"
                >
                  Athlete Representation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/services")}
                  className="hover:text-white transition-colors duration-200 text-left w-full cursor-pointer"
                >
                  Brand Strategy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/services")}
                  className="hover:text-white transition-colors duration-200 text-left w-full cursor-pointer"
                >
                  Media Production
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <button
                  onClick={() => handleNavigation("/")}
                  className="hover:text-white transition-colors duration-200 text-left w-full cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/about")}
                  className="hover:text-white transition-colors duration-200 text-left w-full cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/services")}
                  className="hover:text-white transition-colors duration-200 text-left w-full cursor-pointer"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/portfolio")}
                  className="hover:text-white transition-colors duration-200 text-left w-full cursor-pointer"
                >
                  Our Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="hover:text-white transition-colors duration-200 text-left w-full cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>
            &copy; 2025 Legacy54. All rights reserved. Building the future of
            African sports.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;