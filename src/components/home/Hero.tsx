import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  // Users,
  // Target,
  Medal,
  // ArrowRight,
  // Play,
  Star,
  Globe,
  // Zap,
  // Heart,
} from "lucide-react";
import FastImage from "../Performance/FastImage";


const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Main Background with Multiple Layers */}
      <div className="absolute inset-0 z-0">
        <FastImage
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
          alt="African athletes celebrating victory"
          className="w-full h-full object-cover"
          priority={true}
          fetchPriority="high"
          preload={true}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/95 via-primary-800/90 to-navy-800/95"></div>
      </div>

      {/* Authentic African Pattern Overlay */}
      <div className="absolute inset-0 z-10 opacity-15">
        <svg
          className="w-full h-full"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="african-cultural-pattern"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              {/* Traditional African Geometric Patterns */}
              <path
                d="M40,20 L60,40 L40,60 L20,40 Z"
                fill="currentColor"
                className="text-warning-400"
                opacity="0.6"
              />
              <circle
                cx="20"
                cy="20"
                r="4"
                fill="currentColor"
                className="text-silver-50"
              />
              <circle
                cx="60"
                cy="60"
                r="4"
                fill="currentColor"
                className="text-silver-50"
              />
              <path
                d="M20,60 L30,50 L40,60 L30,70 Z"
                fill="currentColor"
                className="text-success-400"
                opacity="0.4"
              />
              <rect
                x="50"
                y="10"
                width="8"
                height="8"
                fill="currentColor"
                className="text-warning-400"
                opacity="0.3"
              />
              <path
                d="M10,10 L18,18 L10,26 L2,18 Z"
                fill="currentColor"
                className="text-primary-400"
                opacity="0.5"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#african-cultural-pattern)"
          />
        </svg>
      </div>

      {/* Dynamic Continental Silhouette */}
      <div className="absolute inset-0 z-15 opacity-8">
        <motion.svg
          className="w-full h-full text-warning-400"
          viewBox="0 0 800 600"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.08 }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          {/* Authentic Africa Continent Shape */}
          <path
            d="M400,80 C450,85 500,100 540,140 C580,180 600,220 590,280 C580,340 560,380 520,420 C480,450 440,470 400,475 C360,470 320,450 280,420 C240,380 220,340 210,280 C200,220 220,180 260,140 C300,100 350,85 400,80 Z"
            fill="currentColor"
            className="animate-pulse"
            style={{ animationDuration: "6s" }}
          />
        </motion.svg>
      </div>

      {/* Floating African Sports Cultural Elements */}
      <motion.div
        className="absolute top-20 left-4 sm:left-10 text-warning-400 opacity-25 z-20"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Trophy className="w-10 h-10 sm:w-14 sm:h-14 drop-shadow-lg" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-4 sm:right-16 text-silver-100 opacity-20 z-20"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Medal className="w-8 h-8 sm:w-12 sm:h-12 drop-shadow-lg" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-6 sm:right-20 text-success-400 opacity-25 z-20"
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
          rotate: [0, -10, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Star className="w-9 h-9 sm:w-12 sm:h-12 drop-shadow-lg" />
      </motion.div>

      <motion.div
        className="absolute top-2/3 left-8 sm:left-24 text-warning-500 opacity-20 z-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <Globe className="w-7 h-7 sm:w-10 sm:h-10 drop-shadow-lg" />
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-30 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="space-y-6 sm:space-y-8 md:space-y-10"
        >
          {/* African Heritage Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-primary-900/40 backdrop-blur-md border border-primary-700/50 rounded-full px-4 sm:px-6 py-3 text-silver-100 text-sm sm:text-base font-medium shadow-lg"
          >
            <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-warning-400" />
            <span>Uniting 54 African Nations Through Sports Excellence</span>
          </motion.div>

          {/* Main Heading with African Typography Inspiration */}
          <div className="font-display font-black text-silver-50 leading-tight">
            <motion.div
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Legacy
              <motion.span
                className="text-warning-400"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(251, 146, 60, 0.5)",
                    "0 0 30px rgba(251, 146, 60, 0.8)",
                    "0 0 20px rgba(251, 146, 60, 0.5)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                54
              </motion.span>
            </motion.div>
            <motion.div
              className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-primary-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Unleash the Spirit
            </motion.div>
          </div>

          {/* Culturally Rich Subtitle */}
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-5xl mx-auto leading-relaxed text-primary-100 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
          >
            From the soccer fields of Nigeria to the running tracks of Kenya,
            from the rugby pitches of South Africa to the basketball courts of
            Senegal — we celebrate, elevate, and unite African sports heritage
            with world-class excellence and authentic cultural pride.
          </motion.p>

          {/* Enhanced CTA Buttons */}
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator with African Touch */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 sm:w-7 sm:h-12 border-2 border-silver-200/60 rounded-full flex justify-center bg-navy-900/20 backdrop-blur-sm">
            <motion.div
              className="w-1.5 h-3 sm:h-4 bg-warning-400 rounded-full mt-2"
              animate={{ opacity: [0.4, 1, 0.4], y: [0, 8, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          <span className="text-xs text-silver-300 font-medium tracking-wider">
            SCROLL
          </span>
        </div>
      </motion.div>

      {/* Premium Corner Elements with African Geometric Inspiration */}
      <div className="absolute top-0 left-0 w-20 sm:w-32 h-1 bg-gradient-to-r from-warning-400 via-success-400 to-transparent z-20"></div>
      <div className="absolute top-0 left-0 w-1 h-20 sm:h-32 bg-gradient-to-b from-warning-400 via-success-400 to-transparent z-20"></div>
      <div className="absolute bottom-0 right-0 w-20 sm:w-32 h-1 bg-gradient-to-l from-warning-400 via-success-400 to-transparent z-20"></div>
      <div className="absolute bottom-0 right-0 w-1 h-20 sm:h-32 bg-gradient-to-t from-warning-400 via-success-400 to-transparent z-20"></div>

      {/* Rotating Cultural Elements */}
      <motion.div
        className="absolute top-6 left-6 sm:top-10 sm:left-10 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-2 border-warning-400/40 rounded-full bg-navy-900/20 backdrop-blur-sm z-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 border-2 border-success-400/40 rounded-sm bg-navy-900/20 backdrop-blur-sm z-20"
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Expanding Cultural Ripple */}
      <motion.div
        className="absolute inset-0 border-4 border-primary-400/10 rounded-full"
        style={{ borderRadius: "50%" }}
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 4, opacity: 0 }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeOut" }}
      />
    </section>
  );
};

export default Hero;
