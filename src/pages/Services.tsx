import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  Calendar,
  Play,
  Trophy,
  Users,
  Star,
  Globe,
  Target,
  CheckCircle,
  Film,
  BarChart3,
  UserCheck,
  Handshake,
} from "lucide-react";
import Footer from "../components/layout/Footer";
import FeaturedSlide from "../components/FeaturedSlide";
import PageSEO from "../components/SEO/PageSEO";
import leg2 from "../assets/Images/leg2.webp";
import leg1 from "../assets/Images/leg1.webp";
import sa from "../assets/Images/sa.webp";

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);
  const heroRef = useRef(null);
  // const isHeroInView = useInView(heroRef);
  const navigate = useNavigate();

  const heroSlides = [
    {
      id: "services-slide-1",
      title: "Our Services",
      description:
        "Comprehensive sports management elevating African sports — from athlete development to brand partnerships",
      image: sa,
      ctaText: "Learn More",
      ctaAction: () => navigate("/about"),
    },
    {
      id: "services-slide-2",
      title: "Event Management",
      description:
        "From grassroots to continental championships, we deliver sporting events that captivate and create lasting memories..",
      image: leg1,
      ctaText: "View Our Events",
      ctaAction: () => navigate("/portfolio"),
    },
    {
      id: "services-slide-3",
      title: "Athlete Development",
      description:
        "Comprehensive programs that nurture and elevate African talent from grassroots to elite levels.",
      image: leg2,
      ctaText: "Contact Us",
      ctaAction: () => navigate("/contact"),
    },
  ];

  const services = [
    {
      id: "event-management",
      title: "Sports Event Management",
      subtitle: "World-Class Sporting Experiences",
      description:
        "From grassroots tournaments to continental championships, we design and execute sporting events that captivate audiences and create lasting memories.",
      icon: Trophy,
      gradient: "from-[#01215E] to-[#445C8A]",
      color: "#01215E",
      features: [
        "Event Conceptualization & Strategy",
        "Venue Selection & Management",
        "Athlete & Team Coordination",
        "Broadcast & Media Production",
        "Sponsorship Integration",
        "Fan Experience Design",
        "Technology Integration",
        "Safety & Security Management",
      ],
      process: [
        { step: "Discovery", desc: "Understanding your vision and objectives" },
        { step: "Strategy", desc: "Comprehensive event planning and design" },
        {
          step: "Execution",
          desc: "Flawless delivery with real-time management",
        },
        { step: "Legacy", desc: "Post-event analysis and impact measurement" },
      ],
      stats: [
        { number: "200+", label: "Events Managed" },
        { number: "1M+", label: "Attendees Served" },
        { number: "50+", label: "Venues Activated" },
        { number: "98%", label: "Client Satisfaction" },
      ],
      caseStudy: {
        title: "Lagos International Basketball Championship",
        desc: "Transformed a regional tournament into a continental spectacle with 15,000+ attendees and live broadcast across 12 African countries.",
        impact:
          "300% increase in viewership, 25 new sponsor partnerships, and $2M economic impact for Lagos.",
      },
    },
    {
      id: "athlete-programs",
      title: "Sports Programs & Projects",
      subtitle: "Nurturing Tomorrow's Champions",
      description:
        "Comprehensive development programs that identify, nurture, and elevate African sporting talent from grassroots to elite levels.",
      icon: Target,
      gradient: "from-[#445C8A] to-[#3A5584]",
      color: "#445C8A",
      features: [
        "Talent Identification Programs",
        "Youth Development Academies",
        "Coaching Education & Certification",
        "Sports Science Integration",
        "Scholarship & Funding Programs",
        "Community Outreach Initiatives",
        "Performance Analytics",
        "Pathway to Professional Sports",
      ],
      process: [
        { step: "Assess", desc: "Talent identification and skill evaluation" },
        {
          step: "Develop",
          desc: "Structured training and mentorship programs",
        },
        {
          step: "Compete",
          desc: "Tournament exposure and experience building",
        },
        { step: "Advance", desc: "Professional pathway and career transition" },
      ],
      stats: [
        { number: "5,000+", label: "Athletes Developed" },
        { number: "150+", label: "Scholarships Awarded" },
        { number: "30", label: "Professional Contracts" },
        { number: "54", label: "Countries Reached" },
      ],
      caseStudy: {
        title: "Future Stars Academy Program",
        desc: "Pan-African talent development initiative that has produced 15 professional athletes and 50+ university scholarship recipients.",
        impact:
          "85% of participants advanced to higher competition levels, with 12 representing their countries internationally.",
      },
    },
    {
      id: "athlete-representation",
      title: "Athlete Representation",
      subtitle: "Protecting & Empowering Champions",
      description:
        "Comprehensive athlete management services that protect interests, maximize opportunities, and build sustainable careers for African sports talent.",
      icon: Users,
      gradient: "from-[#3A5584] to-[#3C5786]",
      color: "#3A5584",
      features: [
        "Contract Negotiation & Management",
        "Career Planning & Strategy",
        "Brand Development & Marketing",
        "Financial Planning & Management",
        "Media Relations & PR",
        "Endorsement Deal Sourcing",
        "Legal Protection Services",
        "Post-Career Transition Support",
      ],
      process: [
        {
          step: "Onboard",
          desc: "Comprehensive athlete assessment and goal setting",
        },
        { step: "Strategize", desc: "Career roadmap and brand positioning" },
        {
          step: "Execute",
          desc: "Active representation and opportunity maximization",
        },
        { step: "Sustain", desc: "Long-term career and legacy management" },
      ],
      stats: [
        { number: "100+", label: "Athletes Represented" },
        { number: "$5M+", label: "Contracts Negotiated" },
        { number: "200+", label: "Brand Partnerships" },
        { number: "95%", label: "Contract Success Rate" },
      ],
      caseStudy: {
        title: "Rising Star Football Campaign",
        desc: "Transformed a local Nigerian footballer into an international brand, securing a European contract and multiple endorsement deals.",
        impact:
          "400% increase in earning potential, 3 major brand partnerships, and successful European club transition.",
      },
    },
    {
      id: "brand-strategy",
      title: "Brand Strategy & Sponsorships",
      subtitle: "Authentic Sports Partnerships",
      description:
        "Strategic brand consulting that creates meaningful connections between brands and African sports, driving authentic engagement and measurable results.",
      icon: Globe,
      gradient: "from-[#3C5786] to-[#001F58]",
      color: "#3C5786",
      features: [
        "Brand Sports Strategy Development",
        "Sponsorship Package Creation",
        "Partnership Activation & Management",
        "Content Strategy & Creation",
        "Digital Marketing Campaigns",
        "Event Sponsorship Integration",
        "Influencer Partnerships",
        "ROI Measurement & Analytics",
      ],
      process: [
        {
          step: "Analyze",
          desc: "Brand positioning and market opportunity assessment",
        },
        {
          step: "Connect",
          desc: "Strategic partnership matching and development",
        },
        {
          step: "Activate",
          desc: "Campaign execution and experience delivery",
        },
        {
          step: "Optimize",
          desc: "Performance tracking and strategy refinement",
        },
      ],
      stats: [
        { number: "50+", label: "Brand Partnerships" },
        { number: "80%", label: "Partnership Renewals" },
        { number: "25M+", label: "Reach Generated" },
        { number: "300%", label: "Average ROI Increase" },
      ],
      caseStudy: {
        title: "Pan-African Brand Activation",
        desc: "Connected a major telecommunications brand with football across 8 African markets, generating massive engagement and brand loyalty.",
        impact:
          "15M+ social impressions, 40% brand recall increase, and 200% sponsorship value enhancement.",
      },
    },
  ];

  const additionalServices = [
    {
      icon: Film,
      title: "Media Production",
      desc: "Professional sports content creation and broadcast services",
    },
    {
      icon: BarChart3,
      title: "Sports Analytics",
      desc: "Data-driven insights for performance optimization and strategy",
    },
    {
      icon: UserCheck,
      title: "Talent Scouting",
      desc: "Continental network for identifying emerging sports talent",
    },
    {
      icon: Handshake,
      title: "Partnership Development",
      desc: "Strategic alliance building across the African sports ecosystem",
    },
  ];

  const testimonials = [
    {
      name: "David Okafor",
      title: "Professional Footballer",
      image: "/api/placeholder/100/100",
      quote:
        "Legacy54 transformed my career. Their representation opened doors I never knew existed and helped me secure my dream contract in Europe.",
      rating: 5,
    },
    {
      name: "Sarah Mensah",
      title: "MTN Sports Director",
      image: "/api/placeholder/100/100",
      quote:
        "Working with Legacy54 on our Pan-African campaign delivered exceptional results. Their understanding of African sports culture is unmatched.",
      rating: 5,
    },
    {
      name: "Coach Emmanuel",
      title: "Basketball Academy",
      image: "/api/placeholder/100/100",
      quote:
        "The youth development program transformed our academy. We've seen a 300% increase in scholarship placements for our athletes.",
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <PageSEO page="services" />

      {/* Hero Section - Featured Slide */}
      <section ref={heroRef}>
        <FeaturedSlide
          slides={heroSlides}
          autoPlay={true}
          autoPlayInterval={5000}
          showControls={true}
          showIndicators={true}
        />
      </section>

      {/* Core Services Deep Dive */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: "#01215E" }}
            >
              Our Core Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Four pillars of excellence that define our comprehensive approach
              to African sports development
            </p>
          </motion.div>

          {/* Service Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`px-4 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeService === index
                    ? "text-white shadow-lg"
                    : "text-gray-700 bg-gray-100 hover:bg-gray-200"
                }`}
                style={{
                  background:
                    activeService === index
                      ? `linear-gradient(135deg, ${service.color}, #445C8A)`
                      : undefined,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <service.icon className="w-5 h-5 inline mr-2" />
                {service.title}
              </motion.button>
            ))}
          </div>

          {/* Active Service Detail */}
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-3xl p-8 lg:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${services[activeService].gradient} flex items-center justify-center mb-6`}
                >
                  {(() => {
                    const IconComponent = services[activeService].icon;
                    return <IconComponent className="w-8 h-8 text-white" />;
                  })()}
                </div>

                <h3
                  className="text-3xl font-bold mb-4"
                  style={{ color: services[activeService].color }}
                >
                  {services[activeService].title}
                </h3>
                <h4 className="text-xl text-gray-600 mb-6">
                  {services[activeService].subtitle}
                </h4>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {services[activeService].description}
                </p>

                {/* Process Steps */}
                <div className="mb-8">
                  <h5
                    className="text-lg font-semibold mb-4"
                    style={{ color: services[activeService].color }}
                  >
                    Our Process
                  </h5>
                  <div className="space-y-3">
                    {services[activeService].process.map((step, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold"
                          style={{
                            backgroundColor: services[activeService].color,
                          }}
                        >
                          {index + 1}
                        </div>
                        <div>
                          <span className="font-semibold">{step.step}:</span>
                          <span className="text-gray-600 ml-2">
                            {step.desc}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                {/* Key Features */}
                <div>
                  <h5
                    className="text-lg font-semibold mb-4"
                    style={{ color: services[activeService].color }}
                  >
                    What We Deliver
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services[activeService].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle
                          className="w-5 h-5"
                          style={{ color: services[activeService].color }}
                        />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div>
                  <h5
                    className="text-lg font-semibold mb-4"
                    style={{ color: services[activeService].color }}
                  >
                    Impact Metrics
                  </h5>
                  <div className="grid grid-cols-2 gap-4">
                    {services[activeService].stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div
                          className="text-2xl font-bold"
                          style={{ color: services[activeService].color }}
                        >
                          {stat.number}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Case Study */}
                <div
                  className="p-6 rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${services[activeService].color}10, #445C8A10)`,
                  }}
                >
                  <h5
                    className="text-lg font-semibold mb-3"
                    style={{ color: services[activeService].color }}
                  >
                    Success Story
                  </h5>
                  <h6 className="font-semibold mb-2">
                    {services[activeService].caseStudy.title}
                  </h6>
                  <p className="text-gray-700 text-sm mb-3">
                    {services[activeService].caseStudy.desc}
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: services[activeService].color }}
                  >
                    {services[activeService].caseStudy.impact}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: "#01215E" }}
            >
              Additional Services
            </h2>
            <p className="text-lg text-gray-700">
              Comprehensive solutions for every aspect of African sports
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#01215E] to-[#445C8A] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "#01215E" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: "#01215E" }}
            >
              Client Success Stories
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-left">
              Hear from the athletes, brands, and organizations who have
              experienced the Legacy54 difference
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={selectedTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-3xl p-8 lg:p-12 text-left"
            >
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[selectedTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                    />
                  )
                )}
              </div>

              <blockquote className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
                "{testimonials[selectedTestimonial].quote}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#01215E] to-[#445C8A] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[selectedTestimonial].name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="text-left">
                  <div className="font-semibold" style={{ color: "#01215E" }}>
                    {testimonials[selectedTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[selectedTestimonial].title}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === selectedTestimonial
                      ? "bg-[#01215E]"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, #01215E 0%, #445C8A 50%, #001F58 100%)`,
          }}
        />
        <div className="absolute inset-0 bg-black/10" />

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <circle
                cx="75"
                cy="25"
                r="15"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.3"
              />
              <circle
                cx="25"
                cy="75"
                r="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.4"
              />
              <circle
                cx="75"
                cy="75"
                r="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.3"
              />
            </svg>
          </motion.div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-left px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Elevate Your Game.
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Whether you're an athlete, a brand, or an organization planning
              your next big event, Legacy54 is your gateway to excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-left">
              <motion.button
                className="px-5 py-4 bg-white text-[#01215E] rounded-full font-semibold text-lg flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Consultation</span>
              </motion.button>
              <motion.button
                className="px-5 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-[#01215E] transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/portfolio")}
              >
                <Play className="w-4 h-4" />
                <span>View Portfolio</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
