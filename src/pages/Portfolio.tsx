import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Star,
  // MapPin,
  // Users,
  // Trophy,
  Target,
  Zap,
  Filter,
  X,
  TrendingUp,
  Award,
  // Eye,
} from "lucide-react";
// import Footer from "../components/layout/Footer";
import PageSEO from "../components/SEO/PageSEO";
import FeaturedSlide from "../components/FeaturedSlide";
import ele from "../assets/Images/ele.webp";
import ba from "../assets/Images/ba.webp";
import sw from "../assets/Images/sw.webp";
import { useNavigate } from "react-router-dom";

interface CaseStudy {
  overview: string;
  challenge: string;
  solution: string;
  results: Array<{
    // metric: string;
    value: string;
    icon: React.ComponentType<any>;
  }>;
  highlights: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  caseStudy: CaseStudy;
}

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const heroSlides = [
    {
      id: "portfolio-slide-1",
      title: "Our Portfolio",
      description:
        "Showcasing world-class sporting events and unforgettable experiences across Africa's vibrant sports landscape.",
      image: ele,
      ctaText: "Explore Our Services",
      ctaAction: () => navigate("/about"),
    },
    {
      id: "portfolio-slide-2",
      title: "Championship Success",
      description:
        "From Lagos to Cairo, we've delivered sporting experiences that captivate audiences and create lasting memories.",
      image: ba,
      ctaText: "Contact Us",
      ctaAction: () => navigate("/contact"),
    },
    {
      id: "portfolio-slide-3",
      title: "Brand Partnership Excellence",
      description:
        "Connecting brands with passionate sports communities through strategic partnerships and innovative activations.",
      image: sw,
      ctaText: "Partner With Us",
      ctaAction: () => navigate("/contact"),
    },
  ];

  const categories = [
    "All",
    "Sports Events",
    "Brand Campaigns",
    "Media Productions",
    "Partnerships",
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "Lagos Sports Championship 2024",
      description:
        "A three-day multi-sport tournament featuring over 500 athletes from 12 African countries",
      category: "Sports Events",
      image: "/api/placeholder/400/300",
      caseStudy: {
        overview:
          "The Lagos Sports Championship 2024 was a groundbreaking multi-sport tournament that brought together elite athletes from across Africa for three days of intense competition and celebration of African sporting excellence.",
        challenge:
          "Create a world-class sporting event that could compete on the international stage while celebrating African culture and talent, all within a tight 6-month planning timeline.",
        solution:
          "Legacy54 developed a comprehensive event strategy combining state-of-the-art facilities, innovative fan engagement, and strategic media partnerships to create an unforgettable experience.",
        results: [
          // { metric: "Athletes Participated", value: "500+", icon: Users },
          // { metric: "Countries Represented", value: "12", icon: MapPin },
          // { metric: "Total Attendance", value: "25,000", icon: Eye },
          // { metric: "Media Reach", value: "2.5M", icon: TrendingUp },
        ],
        highlights: [
          "First-ever pan-African multi-sport tournament in Lagos",
          "Partnerships with 15 major African brands",
          "Live broadcast across 20 African countries",
          "Youth development workshops for 200+ aspiring athletes",
        ],
        testimonial: {
          quote:
            "Legacy54 exceeded every expectation. The championship was a masterpiece of organization and African sporting pride.",
          author: "Dr. Amina Hassan",
          role: "Director, Lagos Sports Commission",
        },
      },
    },
    {
      id: 2,
      title: "MTN Sports Partnership Campaign",
      description:
        "Strategic brand integration across major sporting events with measurable ROI impact",
      category: "Brand Campaigns",
      image: "/api/placeholder/400/300",
      caseStudy: {
        overview:
          "A comprehensive 12-month partnership campaign that integrated MTN's brand across multiple sporting events, creating authentic connections with sports fans across Africa.",
        challenge:
          "Develop a brand partnership strategy that would resonate with diverse African audiences while delivering measurable business impact for MTN's sports marketing objectives.",
        solution:
          "Created an integrated campaign spanning digital, on-ground activations, and athlete partnerships, all anchored by compelling storytelling that celebrated African sports culture.",
        results: [
          // { metric: "Brand Awareness Lift", value: "45%", icon: TrendingUp },
          // { metric: "Social Engagement", value: "1.2M", icon: Star },
          // { metric: "Events Activated", value: "8", icon: Trophy },
          // { metric: "ROI Achieved", value: "312%", icon: Award },
        ],
        highlights: [
          "Custom mobile app with 100k+ downloads",
          "Athlete ambassador program with 20 sports stars",
          "Interactive fan zones at 8 major events",
          "Content series featuring African sports stories",
        ],
        testimonial: {
          quote:
            "The campaign transformed how we connect with sports fans. Legacy54's strategic approach delivered exceptional results.",
          author: "Sarah Kimani",
          role: "Head of Sports Marketing, MTN",
        },
      },
    },
    {
      id: 3,
      title: "Rising Stars Documentary Series",
      description:
        "6-episode documentary showcasing emerging African talent in various sports disciplines",
      category: "Media Productions",
      image: "/api/placeholder/400/300",
      caseStudy: {
        overview:
          "A compelling 6-episode documentary series that tells the inspiring stories of emerging African athletes, showcasing their journey, struggles, and triumphs in various sports disciplines.",
        challenge:
          "Create authentic, emotionally engaging content that would resonate with both African and international audiences while highlighting the untold stories of rising sports stars.",
        solution:
          "Developed a cinematic storytelling approach combining intimate athlete interviews, behind-the-scenes footage, and stunning visuals of African landscapes and sporting venues.",
        results: [
          // { metric: "Episode Views", value: "3.2M", icon: Eye },
          // { metric: "Platform Distribution", value: "12", icon: TrendingUp },
          // { metric: "Awards Won", value: "5", icon: Award },
          // { metric: "Countries Aired", value: "25", icon: MapPin },
        ],
        highlights: [
          "Featured athletes from 15 different sports",
          "Filmed across 8 African countries",
          "Premiered at Cannes Film Festival",
          "Sparked 3 major sponsorship deals for featured athletes",
        ],
        testimonial: {
          quote:
            "The series beautifully captured the essence of African sports passion. Each episode was a masterpiece of storytelling.",
          author: "Kwame Asante",
          role: "Sports Journalist & Film Critic",
        },
      },
    },
    {
      id: 4,
      title: "CAF Youth Development Program",
      description:
        "Comprehensive talent development initiative across 15 African nations",
      category: "Partnerships",
      image: "/api/placeholder/400/300",
      caseStudy: {
        overview:
          "A continental youth development program designed to identify, nurture, and develop the next generation of African football talent through structured training and mentorship.",
        challenge:
          "Create a scalable youth development framework that could operate effectively across 15 diverse African countries while maintaining consistent quality standards.",
        solution:
          "Established regional training centers, developed standardized coaching curricula, and created a digital platform for talent tracking and development monitoring.",
        results: [
          // { metric: "Youth Participants", value: "2,500", icon: Users },
          // { metric: "Countries Covered", value: "15", icon: MapPin },
          // { metric: "Coaches Trained", value: "150", icon: Trophy },
          // { metric: "Scholarships Awarded", value: "75", icon: Award },
        ],
        highlights: [
          "Partnership with 20+ local academies",
          "Mobile coaching clinics reaching remote areas",
          "Digital talent database and tracking system",
          "15 participants selected for professional trials",
        ],
        testimonial: {
          quote:
            "This program is revolutionizing youth football development in Africa. The impact on young players has been transformational.",
          author: "Patrice Motsepe",
          role: "CAF President",
        },
      },
    },
    {
      id: 5,
      title: "Pan-African Basketball League",
      description:
        "Continental basketball competition featuring 20 teams from across Africa",
      category: "Sports Events",
      image: "/api/placeholder/400/300",
      caseStudy: {
        overview:
          "The inaugural Pan-African Basketball League bringing together the continent's best teams in a season-long competition that celebrates African basketball excellence.",
        challenge:
          "Launch a new continental league that could compete with established competitions while creating sustainable revenue streams for participating teams.",
        solution:
          "Developed a hybrid competition format combining regional qualifiers with a central tournament, supported by innovative broadcasting and fan engagement strategies.",
        results: [
          // { metric: "Teams Participating", value: "20", icon: Trophy },
          // { metric: "Games Broadcast", value: "120", icon: Eye },
          // { metric: "Fan Attendance", value: "180K", icon: Users },
          // { metric: "Prize Pool", value: "$2M", icon: Award },
        ],
        highlights: [
          "First-ever continental professional basketball league",
          "Partnership with NBA Africa for technical support",
          "Revolutionary fan engagement app with AR features",
          "Youth clinic program in all host cities",
        ],
        testimonial: {
          quote:
            "Legacy54 has created something truly special. This league is elevating African basketball to new heights.",
          author: "Amadou Gallo Fall",
          role: "NBA Africa President",
        },
      },
    },
    {
      id: 6,
      title: "Access Bank Sports Activation",
      description:
        "Multi-platform brand activation reaching over 2 million sports fans",
      category: "Brand Campaigns",
      image: "/api/placeholder/400/300",
      caseStudy: {
        overview:
          "A comprehensive sports marketing activation that connected Access Bank with passionate sports fans through innovative digital and physical touchpoints across multiple sports properties.",
        challenge:
          "Create meaningful brand connections in the competitive banking sector while authentically engaging with sports communities across different demographics.",
        solution:
          "Developed an integrated activation strategy combining grassroots sports support, digital fan experiences, and premium hospitality programs across key sporting events.",
        results: [
          // { metric: "Fan Reach", value: "2.1M", icon: Eye },
          // { metric: "Digital Engagements", value: "850K", icon: Star },
          // { metric: "New Accounts", value: "12,500", icon: TrendingUp },
          // { metric: "Brand Lift", value: "38%", icon: Award },
        ],
        highlights: [
          "Community sports facility upgrades in 10 cities",
          "VIP fan experience program for 500+ customers",
          "Interactive digital game with cash prizes",
          "Scholarship program for 50 student-athletes",
        ],
        testimonial: {
          quote:
            "The activation perfectly aligned with our brand values while creating genuine value for sports communities.",
          author: "Bolaji Agbede",
          role: "Head of Marketing, Access Bank",
        },
      },
    },
  ];

  // const testimonials = [
  //   {
  //     quote:
  //       "Legacy54 delivered an exceptional tournament experience that exceeded all expectations",
  //     client: "Nigerian Football Federation",
  //     logo: "NFF",
  //   },
  //   {
  //     quote:
  //       "Their strategic approach to brand partnerships created authentic connections with our audience",
  //     client: "MTN Sports",
  //     logo: "MTN",
  //   },
  //   {
  //     quote:
  //       "The media production quality was world-class, telling our athletes' stories beautifully",
  //     client: "CAF",
  //     logo: "CAF",
  //   },
  // ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <PageSEO page="portfolio" />

      {/* Hero Section - Featured Slide */}
      <FeaturedSlide
        slides={heroSlides}
        autoPlay={true}
        autoPlayInterval={5000}
        showControls={true}
        showIndicators={true}
      />

      {/* Project Categories Filter */}
      <section className="py-8 lg:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 lg:px-6 lg:py-3 rounded-full font-medium text-sm lg:text-base transition-all duration-300 ${
                  selectedCategory === category
                    ? "text-white shadow-lg"
                    : "text-gray-700 bg-white border border-gray-300 hover:border-[#445C8A]"
                }`}
                style={
                  selectedCategory === category
                    ? {
                        background: `linear-gradient(135deg, #01215E, #445C8A)`,
                      }
                    : {}
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Each project represents our commitment to excellence and
              innovation in African sports
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div
                    className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 text-white"
                    style={{
                      background: `linear-gradient(135deg, #445C8A, #3A5584)`,
                    }}
                  >
                    {project.category}
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "#01215E" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <button
                    onClick={() => openModal(project)}
                    className="text-[#01215E] font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all duration-300"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div
                className="relative px-6 py-8 text-white"
                style={{
                  background: `linear-gradient(135deg, #01215E 0%, #445C8A 50%, #001F58 100%)`,
                }}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                >
                  <X className="w-5 h-5 text-white" />
                </button>

                <div className="pr-12">
                  <div className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 bg-white/20 backdrop-blur-sm">
                    {selectedProject.category}
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                    {selectedProject.title}
                  </h2>
                  <p className="text-lg opacity-90">
                    {selectedProject.caseStudy.overview}
                  </p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-200px)]">
                <div className="p-6 lg:p-8 space-y-8">
                  {/* Challenge & Solution */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3
                        className="text-xl font-bold mb-4 flex items-center"
                        style={{ color: "#01215E" }}
                      >
                        <Target className="w-5 h-5 mr-2" />
                        Challenge
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {selectedProject.caseStudy.challenge}
                      </p>
                    </div>
                    <div>
                      <h3
                        className="text-xl font-bold mb-4 flex items-center"
                        style={{ color: "#01215E" }}
                      >
                        <Zap className="w-5 h-5 mr-2" />
                        Solution
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {selectedProject.caseStudy.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results Metrics */}
                  <div>
                    <h3
                      className="text-xl font-bold mb-6 flex items-center"
                      style={{ color: "#01215E" }}
                    >
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Results & Impact
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {selectedProject.caseStudy.results.map(
                        (result: any, index: number) => (
                          <motion.div
                            key={result.metric}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-4 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                          >
                            <div
                              className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
                              style={{
                                background: `linear-gradient(135deg, #445C8A, #3A5584)`,
                              }}
                            >
                              <result.icon className="w-6 h-6 text-white" />
                            </div>
                            <div
                              className="text-2xl font-bold mb-1"
                              style={{ color: "#01215E" }}
                            >
                              {result.value}
                            </div>
                            <div className="text-sm text-gray-600">
                              {result.metric}
                            </div>
                          </motion.div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div>
                    <h3
                      className="text-xl font-bold mb-6 flex items-center"
                      style={{ color: "#01215E" }}
                    >
                      <Star className="w-5 h-5 mr-2" />
                      Key Highlights
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {selectedProject.caseStudy.highlights.map(
                        (highlight: string, index: number) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start space-x-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300"
                          >
                            <div
                              className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                              style={{ backgroundColor: "#445C8A" }}
                            />
                            <p className="text-gray-700 leading-relaxed">
                              {highlight}
                            </p>
                          </motion.div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div
                    className="rounded-2xl p-6 lg:p-8 relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)`,
                    }}
                  >
                    <div className="relative z-10">
                      <h3
                        className="text-xl font-bold mb-4 flex items-center"
                        style={{ color: "#01215E" }}
                      >
                        <Award className="w-5 h-5 mr-2" />
                        Client Testimonial
                      </h3>
                      <blockquote className="text-lg italic text-gray-700 mb-4 leading-relaxed">
                        "{selectedProject.caseStudy.testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center space-x-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                          style={{
                            background: `linear-gradient(135deg, #01215E, #445C8A)`,
                          }}
                        >
                          {selectedProject.caseStudy.testimonial.author.charAt(
                            0
                          )}
                        </div>
                        <div>
                          <div
                            className="font-semibold"
                            style={{ color: "#01215E" }}
                          >
                            {selectedProject.caseStudy.testimonial.author}
                          </div>
                          <div className="text-sm text-gray-600">
                            {selectedProject.caseStudy.testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="text-center pt-4">
                    <motion.button
                      className="px-8 py-4 text-white rounded-full font-semibold text-lg flex items-center space-x-2 mx-auto"
                      style={{
                        background: `linear-gradient(135deg, #01215E, #445C8A)`,
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        closeModal();
                        navigate("/contact");
                      }}
                    >
                      <span>Start Your Project</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Testimonials Section */}
      {/* <section className="py-16 lg:py-24 bg-gray-50">
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
              Client Testimonials
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Hear from our partners about the impact we've created together
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.client}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg"
              >
                <div className="mb-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4"
                    style={{
                      background: `linear-gradient(135deg, #01215E, #445C8A)`,
                    }}
                  >
                    {testimonial.logo}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <p className="font-semibold" style={{ color: "#01215E" }}>
                    {testimonial.client}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, #01215E 0%, #445C8A 50%, #001F58 100%)`,
          }}
        />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Crafting Your Next Experience.
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Ready to join our portfolio of success stories? Connect with us
              and let's design something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-white text-[#01215E] rounded-full font-semibold text-lg flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-[#01215E] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
              >
                View All Projects
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default Portfolio;
