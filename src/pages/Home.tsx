import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Add this import
import { ArrowRight, Star, Users, Trophy, Globe } from "lucide-react";
// import FastSlide from "../components/FastSlide";
import PageSEO from "../components/SEO/PageSEO";

import img2 from "../assets/Images/img2.webp";
import le4 from "../assets/Images/le4.webp";
import le7 from "../assets/Images/le7.webp";
import le from "../assets/Images/le.webp";
import FeaturedSlide from "../components/FeaturedSlide";

const Home = () => {
  const navigate = useNavigate(); // Add this hook

  const heroSlides = [
    {
      id: "slide-1",
      title: "Elevating African Sports",
      description:
        "We design, manage and deliver sporting moments that matter — from grassroots to elite competitions across Africa",
      image: img2,
      ctaText: "Discover Our Vision",
      ctaAction: () => navigate("/about"), // Fix: actual navigation
    },
    {
      id: "slide-2",
      title: "Championship Excellence",
      description:
        "Legacy54 delivered an unforgettable tournament experience for over 10,000 fans across multiple African markets.",
      image: le7,
      ctaText: "View Our Work",
      ctaAction: () => navigate("/portfolio"), // Fix: actual navigation
    },
    {
      id: "slide-3",
      title: "Rising Star Athletes",
      description:
        "Comprehensive development programs that identify, nurture, and elevate African sporting talent from grassroots to elite levels.",
      image: le4,
      ctaText: "Join Our Programs",
      ctaAction: () => navigate("/services"), // Fix: actual navigation
    },
  ];

  const services = [
    {
      title: "Sports Event Management",
      description:
        "From ideation to execution, we design and manage high-impact sporting events with precision and flair",
      icon: Trophy,
      gradient: "from-[#01215E] to-[#445C8A]",
    },
    {
      title: "Sports Programs & Projects",
      description:
        "Providing platforms and tournaments for African sports talents to showcase their abilities",
      icon: Star,
      gradient: "from-[#445C8A] to-[#3A5584]",
    },
    {
      title: "Athlete Representation",
      description:
        "Helping athletes tell their stories, protect their interests and reach their highest potential",
      icon: Users,
      gradient: "from-[#3A5584] to-[#3C5786]",
    },
    {
      title: "Brand Strategy & Sponsorships",
      description:
        "Connecting brands and sports properties to create partnerships that add real value",
      icon: Globe,
      gradient: "from-[#3C5786] to-[#001F58]",
    },
  ];

  // const partners = [
  //   "University of Lagos",
  //   "MTN Sports",
  //   "CAF",
  //   "Nigerian Football Federation",
  //   "Dangote Group",
  //   "Access Bank",
  //   "Bet9ja",
  //   "StarTimes",
  // ];

  return (
    <div className="w-full min-h-screen bg-white">
      <PageSEO page="home" />

      {/* Hero Section - Featured Slide */}
      <section className="w-full">
        <FeaturedSlide
          slides={heroSlides}
          autoPlay={true}
          autoPlayInterval={6000}
          showControls={true}
          showIndicators={true}
        />
      </section>

      {/* About Snapshot */}
      <section className="w-full py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6"
                style={{ color: "#01215E" }}
              >
                Legacy54 — Built on Excellence.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                Rooted in excellence, inspired by legacy, and propelled by
                innovation. We exist to design, manage and deliver unforgettable
                sporting moments that matter across Africa's 54 countries.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                At the heart of Legacy54 is a belief: that sports is more than
                competition. It's community, culture and character.
              </p>
              <motion.button
                className="w-full sm:w-auto px-6 py-3 text-white rounded-full font-semibold flex items-center justify-center space-x-2"
                style={{
                  background: `linear-gradient(135deg, #01215E, #445C8A)`,
                }}
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate("/about")} // Add navigation here too
              >
                <span>Learn Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full relative"
            >
              <div className="relative h-64 sm:h-80 lg:h-96 xl:h-[500px] rounded-2xl overflow-hidden">
                <img
                  src={le}
                  alt="Legacy54 Logo"
                  className="absolute inset-0 w-full h-full object-cover"
                 
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                  <p className="text-white text-xs sm:text-sm">
                    Representing all 54 African countries in our mission to
                    elevate sports across the continent
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="w-full py-12 sm:py-16 lg:py-24 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6"
              style={{ color: "#01215E" }}
            >
              Our Core Services
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-4 text-left">
              Full-spectrum sports management services designed to elevate every
              aspect of the African sports ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden w-full"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                <div className="p-4 sm:p-6 lg:p-8 relative z-10">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 sm:mb-6`}
                  >
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3
                    className="text-lg sm:text-xl font-bold mb-3 sm:mb-4"
                    style={{ color: "#01215E" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                    {service.description}
                  </p>
                  <button
                    className="text-[#01215E] font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all duration-300 text-sm sm:text-base"
                    onClick={() => navigate("/services")}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      {/* <section className="w-full py-12 sm:py-16 lg:py-24 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6"
              style={{ color: "#01215E" }}
            >
              Trusted Partners
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-4 text-left">
              Working with leading organizations to transform African sports
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-3 sm:p-4 lg:p-6 rounded-xl border border-gray-200 hover:border-[#445C8A] hover:shadow-lg transition-all duration-300 w-full min-h-[80px]"
              >
                <span className="text-gray-600 font-medium text-center text-xs sm:text-sm lg:text-base">
                  {partner}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="w-full py-12 sm:py-16 lg:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, #01215E 0%, #445C8A 50%, #001F58 100%)`,
          }}
        />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to Elevate Your Vision{" "}
            </h2>
            <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed text-left">
              Join us in shaping the future of African sports. Whether athlete,
              brand, or organization—we’ll create something extraordinary
              together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#01215E] rounded-full font-semibold text-base sm:text-lg flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
              <motion.button
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-[#01215E] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
              >
                Contact Us Today
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
