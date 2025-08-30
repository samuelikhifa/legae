import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SplashScreen from "./components/SplashScreen";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import { initGA, trackPageView } from "./utils/analytics";
import WebVitals from "./components/Performance/WebVitals";
import ScrollTracker from "./components/Performance/ScrollTracker";

// Analytics tracking component
const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(window.location.href, document.title);
  }, [location]);

  return (
    <>
      <WebVitals />
      <ScrollTracker pageName={location.pathname.replace("/", "") || "home"} />
    </>
  );
};

function App() {
  const [showSplash, setShowSplash] = useState(false);
  const [isAppReady, setIsAppReady] = useState(false);
  // const [showNewsletter, setShowNewsletter] = useState(false);

  useEffect(() => {
    // Check if splash screen has been shown before using sessionStorage
    // sessionStorage persists during browser tab session but resets on new tab/window
    const splashShown = sessionStorage.getItem("splashShown");

    if (!splashShown) {
      setShowSplash(true);
    } else {
      setIsAppReady(true);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setIsAppReady(true);
    // Mark that splash has been shown for this session
    sessionStorage.setItem("splashShown", "true");
    // Show newsletter popup after 10 seconds
    // setTimeout(() => setShowNewsletter(true), 10000);
  };

  // Initialize Google Analytics
  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    // Prevent scrolling during splash screen
    if (showSplash) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showSplash]);

  // Show splash screen if it should be shown
  if (showSplash) {
    return <SplashScreen show={showSplash} onComplete={handleSplashComplete} />;
  }

  // Only render main app after splash is complete or if it was already shown before
  if (!isAppReady) {
    return null; // or a loading spinner
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <AnalyticsTracker />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            {/* <Route path="/services/event-management" element={<EventManagementPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />  */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>
        <Footer />
      
      </div>
    </Router>
  );
}

export default App;
