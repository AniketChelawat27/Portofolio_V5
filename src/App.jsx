import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, lazy, Suspense } from 'react';
import "./index.css";
import Navbar from "./components/Navbar";
import WelcomeScreen from "./Pages/WelcomeScreen";
import { AnimatePresence } from 'framer-motion';

// Lazy load components
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const AnimatedBackground = lazy(() => import("./components/Background"));
const Portofolio = lazy(() => import("./Pages/Portofolio"));
const ContactPage = lazy(() => import("./Pages/Contact"));
const ProjectDetails = lazy(() => import("./components/ProjectDetail"));

const Footer = () => (
  <footer>
    <center>
      <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
      <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
        2025{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          EkiZR
        </a>
        . All Rights Reserved.
      </span>
    </center>
  </footer>
);

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
  </div>
);

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <Suspense fallback={<LoadingSpinner />}>
          <Navbar />
          <AnimatedBackground />
          <Home />
          <About />
          <Portofolio />
          <ContactPage />
          <Footer />
        </Suspense>
      )}
    </>
  );
};

const ProjectPageLayout = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <ProjectDetails />
    <Footer />
  </Suspense>
);

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
        <Route path="/project/:id" element={<ProjectPageLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;