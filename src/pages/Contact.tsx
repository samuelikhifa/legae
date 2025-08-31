import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Instagram, Linkedin, Youtube } from "lucide-react";
// import Footer from "../components/layout/Footer";
import PageSEO from "../components/SEO/PageSEO";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const services = [
    "Sports Event Management",
    "Athlete Representation",
    "Brand Strategy & Sponsorships",
    "Sports Programs & Projects",
    "General Inquiry",
  ];

  const socialPlatforms = [
    // { icon: Facebook, name: "Facebook", gradient: "from-[#01215E] to-[#445C8A]" },
    // { icon: Twitter, name: "Twitter", gradient: "from-[#445C8A] to-[#3A5584]" },
    {
      icon: Instagram,
      name: "Instagram",
      gradient: "from-[#3A5584] to-[#3C5786]",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      gradient: "from-[#3C5786] to-[#001F58]",
    },
    { icon: Youtube, name: "YouTube", gradient: "from-[#001F58] to-[#01215E]" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <PageSEO page="contact" />

      {/* Hero Section - Reduced height and left-aligned text */}
      <section className="relative h-[75vh] flex items-center justify-start overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            background: `linear-gradient(135deg, #01215E 0%, #445C8A 35%, #3A5584 65%, #001F58 100%)`,
          }}
        />

        <div className="absolute inset-0 bg-black/20 z-10" />

        <div className="absolute inset-0 z-5 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <pattern
                id="sports-pattern"
                patternUnits="userSpaceOnUse"
                width="25"
                height="25"
              >
                <circle
                  cx="12.5"
                  cy="12.5"
                  r="8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
                <rect
                  x="0"
                  y="0"
                  width="25"
                  height="25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.3"
                />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#sports-pattern)"
              className="text-white"
            />
          </svg>
        </div>

        <div className="relative z-20 text-left px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full mt-16 sm:mt-20 lg:mt-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Get In Touch
            {/* <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mt-4 text-white/90">
              Let's Create Together
            </span> */}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed"
          >
            Ready to elevate your sports vision? Let's create unforgettable
            moments across Africa.
          </motion.p>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: "#01215E" }}
            >
              Start Your Journey With Us
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Share your vision with us and let's bring it to life
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 lg:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#445C8A] focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#445C8A] focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#445C8A] focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#445C8A] focus:border-transparent outline-none transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#445C8A] focus:border-transparent outline-none transition-all duration-300 resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 text-white rounded-full font-semibold text-lg flex items-center justify-center space-x-2"
                style={{
                  background: `linear-gradient(135deg, #01215E, #445C8A)`,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ color: "#01215E" }}
            >
              Connect With Us
            </h2>
            <p className="text-lg text-gray-700">
              Follow our journey across social media platforms
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {socialPlatforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group cursor-pointer"
              >
                <div
                  className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br ${platform.gradient} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                >
                  <platform.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <p className="text-center mt-3 text-gray-700 font-medium text-sm lg:text-base">
                  {platform.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default Contact;
