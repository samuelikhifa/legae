// Footer component
// import FastImage from "../Performance/FastImage";
import legacy from "../../assets/Images/legacy.png";

const Footer = () => {

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
              <p>Sports | Africa | Excellence</p>
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
            <ul className="space-y-2 text-white/80" aria-label="Services">
              <li>
                <a href="/services" className="hover:text-white transition-colors duration-200">
                  Event Management
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition-colors duration-200">
                  Athlete Representation
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition-colors duration-200">
                  Brand Strategy
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition-colors duration-200">
                  Media Production
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-white/80" aria-label="Company">
              <li>
                <a href="/" className="hover:text-white transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors duration-200">About Us</a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition-colors duration-200">Our Services</a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-white transition-colors duration-200">Our Work</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors duration-200">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>
            &copy; 2025 Legacy54. All rights reserved. Elevating African Sport with global standards of excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;