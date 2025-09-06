// import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageSEO from "../components/SEO/PageSEO";
import FeaturedSlide from "../components/FeaturedSlide";
import ele from "../assets/Images/ele.webp";
import ba from "../assets/Images/ba.webp";
import sw from "../assets/Images/sw.webp";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  const heroSlides = [
    {
      id: "portfolio-slide-1",
      title: "Coming Soon",
      description:
        "Our first projects are in development. Great things are about to happen in African sports.",
      image: ele,
      ctaText: "Be Our First Client",
      ctaAction: () => navigate("/contact"),
    },
    {
      id: "portfolio-slide-2",
      title: "Showcase Here",
      description:
        "Looking for a fresh perspective? Partner with us to create something remarkable.",
      image: ba,
      ctaText: "Start Something New",
      ctaAction: () => navigate("/contact"),
    },
    {
      id: "portfolio-slide-3",
      title: "Write History With Us",
      description:
        "Be part of our journey from day one. Let's build the future of African sports together.",
      image: sw,
      ctaText: "Get In Touch",
      ctaAction: () => navigate("/contact"),
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <PageSEO page="portfolio" />

      {/* Hero Section */}
      <FeaturedSlide
        slides={heroSlides}
        autoPlay={true}
        autoPlayInterval={5000}
        showControls={true}
        showIndicators={true}
      />

      {/* Coming Soon Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-5xl font-bold mb-7"
              style={{ color: "#01215E" }}
            >
              Our Story Begins Now
            </h2>
            <p className="text-2xl text-gray-700 mb-10 leading-relaxed ">
              Every great company starts with its first project. We're ready, experienced, and excited to make that first project extraordinary.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Will you be part of our inaugural success story?
            </p>
            <motion.button
              className="px-8 py-4 text-white rounded-full font-semibold text-xl flex items-center space-x-3 mx-auto"
              style={{
                background: `linear-gradient(135deg, #01215E, #445C8A)`,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
            >
              <span>Let’s Create Magic</span>
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, #01215E 0%, #445C8A 50%, #001F58 100%)`,
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Be First?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Connect with us today and let's discuss your vision.
            </p>
            <motion.button
              className="px-8 py-4 bg-white text-[#01215E] rounded-full font-semibold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
            >
              Start the Conversation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;