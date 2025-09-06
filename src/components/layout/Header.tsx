import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
// import FastImage from "../Performance/FastImage";
import legacy from "../../assets/Images/legacy.png";

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (pageId: string) => void;
}

const Header = ({ currentPage = "home", onNavigate }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { name: "Home", path: "/", id: "home" },
    { name: "About", path: "/about", id: "about" },
    { name: "Services", path: "/services", id: "services" },
    { name: "Portfolio", path: "/portfolio", id: "portfolio" },
    // { name: 'News', path: '/news', id: 'news' },
    { name: "Contact", path: "/contact", id: "contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation
  const handleNavigation = (item: {
    id: string;
    path: string;
    name: string;
  }) => {
    if (onNavigate) {
      onNavigate(item.id);
    } else {
      // Fallback to regular navigation if no custom handler
      window.location.href = item.path;
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm"
          : "bg-white/95 backdrop-blur-sm border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          <img
            src={legacy}
            alt="Legacy54 Logo"
            className="w-30 h-28 sm:w-34 sm:h-26 md:w-28 md:h-24 lg:w-32 lg:h-28 transition-transform duration-200 hover:scale-105 object-contain"
            // priority={true}
            fetchPriority="high"
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item)}
                className={`relative px-3 py-2 rounded-lg font-medium transition-all duration-300  ${
                  currentPage === item.id
                    ? "text-[#01215E] "
                    : "text-gray-700 hover:text-[#01215E] hover:bg-gray-50"
                }`}
              >
                {item.name}
                {currentPage === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}

            {/* CTA Button */}
            <motion.button
              className="px-6 py-2 text-white rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-[#01215E] focus:ring-offset-2"
              style={{
                background: `linear-gradient(135deg, #01215E, #445C8A)`,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                handleNavigation({
                  id: "contact",
                  path: "/contact",
                  name: "Contact",
                })
              }
            >
              Partner With Us
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" style={{ color: "#01215E" }} />
              ) : (
                <Menu className="w-8 h-8"style={{ color: "#01215E" }} />
              )}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
      >
        <div className="px-4 py-4 space-y-2">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item)}
              className={`w-full text-left py-3 px-4  font-medium transition-all duration-200 ${
                currentPage === item.id
                  ? "text-[#01215E]   border-[#01215E]"
                  : "text-gray-700 hover:text-[#01215E] hover:bg-gray-50"
              }`}
            >
              {item.name}
            </button>
          ))}

          {/* Mobile CTA Button */}
          <button
            onClick={() =>
              handleNavigation({
                id: "contact",
                path: "/contact",
                name: "Contact",
              })
            }
            className="w-full mt-4 px-6 py-3 text-white rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-[#01215E] focus:ring-offset-2"
            style={{ background: `linear-gradient(135deg, #01215E, #445C8A)` }}
          >
            Partner With Us
          </button>
        </div>
      </motion.div>

      {/* Loading indicator (optional) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full h-1">
          <div className="h-full bg-gradient-to-r from-[#01215E] to-[#445C8A] opacity-20"></div>
        </div>
      )}
    </header>
  );
};

// Example usage component showing how to integrate with routing
const AppWithHeader = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigation = (pageId: string) => {
    setCurrentPage(pageId);

    // Here you would integrate with your routing solution
    // Examples for different routing approaches:

    // 1. React Router
    // navigate(`/${pageId === 'home' ? '' : pageId}`);

    // 2. Next.js Router
    // router.push(pageId === 'home' ? '/' : `/${pageId}`);

    // 3. Simple state-based routing (for demo)
    console.log(`Navigating to: ${pageId}`);

    // 4. Hash routing
    // window.location.hash = pageId;

    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <div className="pt-20 min-h-screen bg-gray-50 p-8">
            <h1 className="text-4xl font-bold text-center text-[#01215E]">
              Home Page
            </h1>
            <p className="text-center mt-4 text-gray-600">
              This is the home page content
            </p>
          </div>
        );
      case "about":
        return (
          <div className="pt-20 min-h-screen bg-blue-50 p-8">
            <h1 className="text-4xl font-bold text-center text-[#01215E]">
              About Us
            </h1>
           
          </div>
        );
      case "services":
        return (
          <div className="pt-20 min-h-screen bg-green-50 p-8">
            <h1 className="text-4xl font-bold text-center text-[#01215E]">
              Our Services
            </h1>
            <p className="text-center mt-4 text-gray-600">
              This is the services page content
            </p>
          </div>
        );
      case "contact":
        return (
          <div className="pt-20 min-h-screen bg-yellow-50 p-8">
            <h1 className="text-4xl font-bold text-center text-[#01215E]">
              Contact Us
            </h1>
            <p className="text-center mt-4 text-gray-600">
              This is the contact page content
            </p>
          </div>
        );
      default:
        return (
          <div className="pt-20 min-h-screen bg-red-50 p-8">
            <h1 className="text-4xl font-bold text-center text-red-600">
              Page Not Found
            </h1>
            <p className="text-center mt-4 text-gray-600">
              The page you're looking for doesn't exist
            </p>
          </div>
        );
    }
  };

  return (
    <div>
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      {renderPage()}
    </div>
  );
};

export default Header;
export { AppWithHeader };
