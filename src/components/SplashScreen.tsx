import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import legacy from "../assets/Images/legacy.png";

interface SplashScreenProps {
  onComplete: () => void;
  show: boolean; // Add this prop to control visibility
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete, show }) => {
  const [phase, setPhase] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!show) return; // Don't run animations if not showing

    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Adjust timers based on mobile/desktop
    const mobileDelay = isMobile ? 1000 : 0;

    const timer1 = setTimeout(() => setPhase(1), 800);
    const timer2 = setTimeout(() => setPhase(2), 2000 + mobileDelay);
    const timer3 = setTimeout(() => setPhase(3), 3200 + mobileDelay);
    const timer4 = setTimeout(onComplete, 4500 + mobileDelay);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      window.removeEventListener("resize", checkMobile);
    };
  }, [onComplete, isMobile, show]);

  // Reset phase when show becomes true
  useEffect(() => {
    if (show) {
      setPhase(0);
    }
  }, [show]);

  if (!show) return null; // Don't render if not showing

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 w-screen h-screen flex items-center justify-center overflow-hidden z-[9999]"
        style={{
          background: `linear-gradient(135deg, #01215E 0%, #445C8A 35%, #3A5584 65%, #001F58 100%)`,
        }}
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          scale: 1.1,
          filter: "blur(10px)",
        }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        {/* Dynamic Sports Field Background */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <pattern
                id="pitch"
                patternUnits="userSpaceOnUse"
                width="20"
                height="20"
              >
                <rect
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#pitch)"
              className="text-white/20"
            />
            <circle
              cx="50"
              cy="50"
              r="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-white/30"
            />
          </svg>
        </div>

        {/* Animated Ball Movement - All Sides */}
        <motion.div
          className="absolute w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-white rounded-full shadow-2xl z-10"
          initial={{ x: "50vw", y: "50vh", scale: 0 }}
          animate={
            phase >= 1
              ? {
                  x: ["50vw", "85vw", "85vw", "50vw", "15vw", "15vw", "50vw"],
                  y: ["50vh", "50vh", "15vh", "10vh", "15vh", "85vh", "90vh"],
                  scale: [0, 1, 1, 1, 1, 1, 0],
                  rotate: [0, 180, 360, 540, 720, 900, 1080],
                }
              : {}
          }
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            times: [0, 0.15, 0.3, 0.45, 0.6, 0.8, 1],
          }}
        >
          <div className="absolute inset-0 bg-white/40 rounded-full blur-lg scale-150 animate-pulse"></div>
        </motion.div>

        {/* African Continent Silhouette */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-5"
          initial={{ scale: 0, rotate: -45 }}
          animate={phase >= 0 ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          {/* <svg width="50%" height="50%" viewBox="0 0 400 400" className="text-white sm:w-[60%] sm:h-[60%]">
            <path
              d="M200 40 C240 50 280 70 310 110 C330 140 340 180 330 220 C320 260 300 290 270 310 C250 320 220 330 200 320 C170 310 150 280 140 250 C130 220 140 190 150 160 C160 130 180 90 200 40 Z"
              fill="currentColor"
            />
          </svg> */}
        </motion.div>

        {/* Main Content Container */}
        <div className="relative z-20 text-center px-4 sm:px-6 md:px-8 w-full max-w-xs sm:max-w-lg md:max-w-2xl mx-auto">
          {/* Logo Section */}
          <motion.div
            className="mb-6 sm:mb-8 md:mb-12"
            initial={{ scale: 0, opacity: 0, rotateY: 180 }}
            animate={phase >= 1 ? { scale: 1, opacity: 1, rotateY: 0 } : {}}
            transition={{
              duration: isMobile ? 2.0 : 1.5,
              ease: "backOut",
              delay: isMobile ? 0.5 : 0,
            }}
          >
            <div className="relative inline-block">
              {/* Logo with actual image */}
              <div className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 mx-auto bg-white/10 rounded-full flex items-center justify-center border-2 border-white/30 overflow-hidden">
                <img
                  src={legacy}
                  alt="Legacy54 Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <motion.div
                className="absolute -inset-2 sm:-inset-3 md:-inset-4 rounded-full blur-xl sm:blur-2xl"
                style={{
                  background: `linear-gradient(135deg, #445C8A, #3A5584)`,
                }}
                animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.8, 1.2, 0.8] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Brand Name */}
          <motion.div
            initial={{ opacity: 0, y: 30, letterSpacing: "0.5em" }}
            animate={
              phase >= 2 ? { opacity: 1, y: 0, letterSpacing: "0.1em" } : {}
            }
            transition={{
              duration: isMobile ? 2.2 : 1.8,
              ease: "easeOut",
              delay: isMobile ? 0.3 : 0,
            }}
            className="mb-4 sm:mb-6 md:mb-8"
          >
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white tracking-wider font-sans leading-tight">
              <motion.span
                className="inline-block"
                animate={
                  phase >= 2
                    ? {
                        textShadow: [
                          "0 0 10px rgba(255,255,255,0.5)",
                          "0 0 20px rgba(255,255,255,0.8)",
                          "0 0 10px rgba(255,255,255,0.5)",
                        ],
                      }
                    : {}
                }
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                LEGACY54
              </motion.span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={phase >= 3 ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: isMobile ? 1.5 : 1.2,
              ease: "easeOut",
              delay: isMobile ? 0.2 : 0,
            }}
            className="mb-6 sm:mb-8 md:mb-12"
          >
            <p className="text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-white/95 tracking-widest uppercase leading-relaxed">
              Elevating African Sports
            </p>
            <motion.div
              className="w-16 xs:w-24 sm:w-32 md:w-48 lg:w-64 h-0.5 sm:h-1 bg-white mx-auto mt-2 sm:mt-3 md:mt-4"
              initial={{ width: 0 }}
              animate={phase >= 3 ? { width: "100%" } : {}}
              transition={{
                delay: isMobile ? 0.7 : 0.5,
                duration: 1.2,
                ease: "easeOut",
              }}
            />
          </motion.div>

          {/* Loading Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={phase >= 2 ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center space-x-2 sm:space-x-3"
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-white rounded-full"
                animate={{
                  scale: [0.8, 1.4, 0.8],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>

          {/* Bottom Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={phase >= 3 ? { opacity: 1 } : {}}
            transition={{
              delay: isMobile ? 1.0 : 0.8,
              duration: 1,
            }}
            className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 w-full px-4"
          >
            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-white/80 font-light tracking-wider uppercase">
              54 Countries • One Vision
            </p>
          </motion.div>
        </div>

        {/* Corner Accent Lines - Using brand colors */}
        <div
          className="absolute top-0 left-0 w-8 xs:w-12 sm:w-20 md:w-32 lg:w-48 h-0.5 sm:h-1"
          style={{ backgroundColor: "#445C8A" }}
        ></div>
        <div
          className="absolute top-0 left-0 w-0.5 sm:w-1 h-8 xs:h-12 sm:h-20 md:h-32 lg:h-48"
          style={{ backgroundColor: "#445C8A" }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-8 xs:w-12 sm:w-20 md:w-32 lg:w-48 h-0.5 sm:h-1"
          style={{ backgroundColor: "#3A5584" }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-0.5 sm:w-1 h-8 xs:h-12 sm:h-20 md:h-32 lg:h-48"
          style={{ backgroundColor: "#3A5584" }}
        ></div>

        {/* Rotating Border Elements */}
        <motion.div
          className="absolute top-4 left-4 xs:top-6 xs:left-6 sm:top-8 sm:left-8 w-6 h-6 xs:w-8 xs:h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 border-2"
          style={{ borderColor: "#445C8A" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-4 right-4 xs:bottom-6 xs:right-6 sm:bottom-8 sm:right-8 w-5 h-5 xs:w-6 xs:h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 border-2"
          style={{ borderColor: "#3C5786" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Expanding Ripple Effect */}
        <motion.div
          className="absolute inset-0 border-2 sm:border-4"
          style={{ borderColor: "rgba(68, 92, 138, 0.1)" }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
