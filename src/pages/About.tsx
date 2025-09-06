import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Target, Globe, Heart, Zap, Trophy } from "lucide-react";
import PageSEO from "../components/SEO/PageSEO";

import pe from "../assets/Images/pe.webp";
import le0 from "../assets/Images/le0.webp";
import pe3 from "../assets/Images/pe3.webp";
import er from "../assets/Images/er.webp";
import we5 from "../assets/Images/we5.webp";
import FeaturedSlide from "../components/FeaturedSlide";

const About = () => {
  const navigate = useNavigate();

  const heroSlides = [
    {
      id: "about-slide-1",
      title: "Our Story",
      // subtitle: "Rooted in Excellence",
      description:
        "Rooted in excellence, driven by legacy and powered by innovation, we create unforgettable sporting moments that matter.",
      image: we5,
      ctaText: "Explore Our Expertise",
      ctaAction: () => navigate("/services"),
      // ctaAction: () => navigate('/about')
    },
    {
      id: "about-slide-2",
      title: "Legacy54",
      // subtitle: "Where Sports Meets Excellence",
      description:
        "We are architects of dreams, builders of legacies and champions of excellence across Africa's 54 countries.",
      image: er,
      ctaText: "Join Our Programs",
      ctaAction: () => navigate("/services"),
    },
    {
      id: "about-slide-3",
      title: "Our Vision",
      // subtitle: "Pan-African Sports Excellence",
      description:
        "Connecting Africa's 54 nations through sports, fostering unity and celebrating our shared passion for excellence.",
      image: pe3,
      ctaText: "View Portfolio",
      ctaAction: () => navigate("/portfolio"),
    },
  ];


  // const milestones = [
  //   {
  //     year: "2020",
  //     title: "Foundation",
  //     description:
  //       "Legacy54 was born from a vision to transform African sports management and create lasting impact.",
  //   },
  //   {
  //     year: "2021",
  //     title: "First Major Event",
  //     description:
  //       "Successfully managed our first championship tournament in Lagos, attracting over 10,000 attendees.",
  //   },
  //   {
  //     year: "2022",
  //     title: "Pan-African Expansion",
  //     description:
  //       "Expanded operations to 8 African countries, establishing key partnerships and local offices.",
  //   },
  //   {
  //     year: "2023",
  //     title: "Global Recognition",
  //     description:
  //       "Received international awards for innovation in sports management and community development.",
  //   },
  //   {
  //     year: "2024",
  //     title: "Future Vision",
  //     description:
  //       "Launching comprehensive athlete development programs and expanding to all 54 African countries.",
  //   },
  // ];

  // const stats = [
  //   { number: "54", label: "African Countries", suffix: "" },
  //   { number: "500", label: "Athletes Represented", suffix: "+" },
  //   { number: "100", label: "Events Managed", suffix: "+" },
  //   { number: "1M", label: "Fans Engaged", suffix: "+" }
  // ];


  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <PageSEO page="about" />

      {/* Hero Section - Featured Slide */}
      <FeaturedSlide
        slides={heroSlides}
        autoPlay={true}
        autoPlayInterval={7000}
        showControls={true}
        showIndicators={true}
      />

      {/* Main Story Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <div className="relative">
                <div
                  className="text-8xl sm:text-9xl lg:text-[12rem] xl:text-[14rem] font-black opacity-5 absolute -top-16 sm:-top-20 lg:-top-24 -left-4 sm:-left-8 "
                  style={{ color: "#01215E" }}
                >
                  54
                </div>
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 relative z-10"
                  style={{ color: "#01215E" }}
                >
                  Legacy54 — Built on Excellence.
                </h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="prose prose-lg sm:prose-xl max-w-none">
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
                  Legacy54 is a bold, dynamic and values-driven sports brand
                  forged with a single vision: to elevate the experience of
                  sports in Africa and beyond. We are not just another sports
                  management company – we are architects of dreams, builders of
                  legacies, and champions of excellence.
                </p>

                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
                  The name "Legacy" speaks to our commitment to building
                  something that lasts. The number 54 is no accident either. It is a
                  nod to the 54 countries of Africa, a symbol of our pan-African
                  ambition and reach.
                </p>

                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
                  At the heart of Legacy54 is a belief: that sports is more than
                  competition. It's community, culture and character. We
                  approach each project with intention and integrity, bringing a
                  rare mix of ambition and empathy.
                </p>

                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 sm:mb-12">
                  We work closely with our clients and partners to understand
                  their goals, and we don't just meet expectations – we
                  outperform them. Because we see what others miss. We
                  understand the power of sport to change lives. And we bring
                  the rigour, creativity and cultural depth that the industry
                  has been waiting for.
                </p>
              </div>

              {/* Stats */}
              {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 pt-8 sm:pt-12 border-t border-gray-200">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2" style={{ color: '#01215E' }}>
                      {stat.number}
                      <span className="text-2xl sm:text-3xl lg:text-4xl">{stat.suffix}</span>
                    </div>
                    <div className="text-sm sm:text-base text-gray-600 font-medium uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 lg:mb-24"
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8"
              style={{ color: "#01215E" }}
            >
              Our Philosophy
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed text-left">
              Sports is more than competition – it's community, culture and
              character
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-20 lg:mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8"
                style={{ color: "#01215E" }}
              >
                Deep Understanding, Authentic Approach
              </h3>
              <div className="space-y-4 sm:space-y-6 text-lg sm:text-xl text-gray-700 leading-relaxed">
                <p>
                  Our deep understanding of African sports culture and youth
                  trends sets us apart. We immerse ourselves in the communities we serve,
                  understanding the unique challenges and opportunities in each
                  market.
                </p>
                <p>
                  Strong storytelling instincts paired with digital innovation
                  allow us to create narratives that resonate across cultures
                  while leveraging cutting-edge technology to amplify impact.
                </p>
                <p>
                  Our proven ability to work at both grassroots and elite levels
                  means we can nurture talent from the community level all the
                  way to international competition, creating comprehensive
                  pathways for athletic development.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden">
                <img
                  src={pe}
                  alt="Description of image"
                  className="absolute inset-0 w-full h-full object-cover"
                  // priority={true}
                />
              </div>
            </motion.div>
          </div>

          {/* Values Grid */}
          {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 sm:p-8 rounded-2xl transition-all duration-300 ${
                  activeValue === index ? 'bg-white shadow-2xl scale-105' : 'bg-white/70 shadow-lg hover:shadow-xl'
                }`}
              >
                <div 
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-6"
                  style={{ background: `linear-gradient(135deg, #01215E, #445C8A)` }}
                >
                  <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#01215E' }}>
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="pt-0 pb-16 sm:pt-0 sm:pb-20 lg:pt-4 lg:pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="absolute inset-0 rounded-3xl opacity-5"
                style={{
                  background: `linear-gradient(135deg, #01215E, #445C8A)`,
                }}
              />
              <div className="relative p-8 sm:p-12 lg:p-16">
                <Target
                  className="w-12 h-12 sm:w-16 sm:h-16 mb-6 sm:mb-8"
                  style={{ color: "#01215E" }}
                />
                <h2
                  className=" text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8"
                  style={{ color: "#01215E" }}
                >
                  Vision Statement
                </h2>
                <p className=" text-base text-lg sm:text-xl text-gray-700 leading-relaxed">
                  To become Africa's leading sports management brand,
                  championing excellence, equity and entertainment in every
                  field of play.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="absolute inset-0 rounded-3xl opacity-5"
                style={{
                  background: `linear-gradient(135deg, #445C8A, #3A5584)`,
                }}
              />
              <div className="relative p-8 sm:p-12 lg:p-16">
                <Heart
                  className="w-12 h-12 sm:w-16 sm:h-16 mb-6 sm:mb-8"
                  style={{ color: "#01215E" }}
                />
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8"
                  style={{ color: "#01215E" }}
                >
                  Mission Statement
                </h2>
                <p className=" text-base text-lg sm:text-xl text-gray-700 leading-relaxed">
                  To design, manage and amplify sports experiences that inspire,
                  connect and transform communities across Africa and beyond.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      {/* <section className="py-16 sm:py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 lg:mb-24"
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8"
              style={{ color: "#01215E" }}
            >
              Our Journey
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed text-left">
              Building excellence, one milestone at a time
            </p>
          </motion.div>

          <div className="relative">
            
            <div
              className="absolute left-4 sm:left-8 lg:left-1/2 lg:-translate-x-0.5 top-0 bottom-0 w-0.5 sm:w-1"
              style={{
                background: `linear-gradient(to bottom, #01215E, #445C8A, #3A5584)`,
              }}
            />

            <div className="space-y-12 sm:space-y-16 lg:space-y-20">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 ${
                    index % 2 === 0 ? "" : "lg:text-right"
                  }`}
                >
                  
                  <div
                    className="absolute left-2 sm:left-6 lg:left-1/2 lg:-translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 rounded-full border-4 border-white shadow-lg z-10"
                    style={{
                      background: `linear-gradient(135deg, #01215E, #445C8A)`,
                    }}
                  />

                  <div
                    className={`${
                      index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                    } pl-12 sm:pl-16 lg:pl-0`}
                  >
                    <div
                      className="inline-block px-4 py-2 rounded-full text-sm font-bold text-white mb-4"
                      style={{
                        background: `linear-gradient(135deg, #01215E, #445C8A)`,
                      }}
                    >
                      {milestone.year}
                    </div>
                    <h3
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6"
                      style={{ color: "#01215E" }}
                    >
                      {milestone.title}
                    </h3>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-lg">
                      {milestone.description}
                    </p>
                  </div>

                  <div
                    className={`${
                      index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                    } pl-12 sm:pl-16 lg:pl-0`}
                  >
                    <div className="h-32 sm:h-40 lg:h-48 rounded-xl overflow-hidden">
                      <div
                        className="w-full h-full flex items-center justify-center text-white text-3xl sm:text-4xl lg:text-5xl font-bold"
                        style={{
                          background: `linear-gradient(135deg, #445C8A, #3A5584)`,
                        }}
                      >
                        {milestone.year}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      {/* <section className="py-16 sm:py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 lg:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8" style={{ color: '#01215E' }}>
              Meet Our Team
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              A diverse, passionate team united by our love for African sports excellence
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative mb-6 sm:mb-8">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                    <div 
                      className="w-full h-full flex items-center justify-center text-white text-4xl sm:text-5xl font-bold"
                      style={{ background: `linear-gradient(135deg, #01215E, #445C8A)` }}
                    >
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  />
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: '#01215E' }}>
                    {member.name}
                  </h3>
                  <p className="text-base sm:text-lg font-medium mb-4" style={{ color: '#445C8A' }}>
                    {member.role}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-3 py-1 text-xs sm:text-sm rounded-full bg-gray-100 text-gray-700"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Our Edge Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 lg:mb-24"
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8"
              style={{ color: "#01215E" }}
            >
              Our Competitive Edge
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed text-left">
              What sets Legacy54 apart in the African sports landscape
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8 sm:space-y-12"
            >
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
                  style={{
                    background: `linear-gradient(135deg, #01215E, #445C8A)`,
                  }}
                >
                  <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3
                    className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4"
                    style={{ color: "#01215E" }}
                  >
                    Deep Cultural Understanding
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Unmatched insight into African sports culture and youth
                    trends, allowing us to create authentic experiences that
                    resonate across all 54 countries.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 sm:space-x-6">
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
                  style={{
                    background: `linear-gradient(135deg, #445C8A, #3A5584)`,
                  }}
                >
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3
                    className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4"
                    style={{ color: "#01215E" }}
                  >
                    Innovation Meets Storytelling
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Strong storytelling instincts paired with digital
                    innovation, creating compelling narratives that engage
                    millions across traditional and digital platforms.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 sm:space-x-6">
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
                  style={{
                    background: `linear-gradient(135deg, #3A5584, #001F58)`,
                  }}
                >
                  <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3
                    className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4"
                    style={{ color: "#01215E" }}
                  >
                    Grassroots to Elite Excellence
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Proven ability to work effectively at both grassroots and
                    elite levels, creating comprehensive development pathways
                    for athletes and sports organizations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 sm:space-x-6">
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
                  style={{
                    background: `linear-gradient(135deg, #001F58, #01215E)`,
                  }}
                >
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3
                    className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4"
                    style={{ color: "#01215E" }}
                  >
                    Passionate, Diverse Team
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    A diverse and passionate team that loves what they do,
                    bringing authentic enthusiasm and cultural depth to every
                    project and partnership.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden">
                <img
                  src={le0}
                  alt="Description of image"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, #01215E 0%, #445C8A 50%, #001F58 100%)`,
          }}
        />
        <div className="absolute inset-0 bg-black/10 justify-left text-left" />

        <div className="relative z-10 max-w-4xl mx-auto justify-left px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8">
              Ready to Build the Legacy?
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto ">
              We're building strategic partnerships with institutions,
              federations and sponsors committed to the future of African
              sports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 ">
              <motion.button
                className="px-8 py-4 bg-white text-[#01215E] rounded-full font-semibold text-lg flex space-x-2 min-w-[200px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-[#01215E] transition-all duration-300 min-w-[200px]"
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

export default About;