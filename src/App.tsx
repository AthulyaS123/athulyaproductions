import { useState } from "react";
import { LandingPage } from "./components/LandingPage";
import { FilmStrip } from "./components/FilmStrip";
import { InfoCard } from "./components/InfoCard";
import { ProjectsSection } from "./components/ProjectsSection";
import { HobbiesView } from "./components/HobbiesView";

export default function App() {
  const [showFilmStrip, setShowFilmStrip] = useState(false);
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [hasSeenLanding, setHasSeenLanding] = useState(false);

  const handleLandingComplete = () => {
    setHasSeenLanding(true);
    setShowFilmStrip(true);
  };

  const handleReturnToLanding = () => {
    setShowFilmStrip(false);
    setShowAboutMe(false);
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects-section");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToHobbies = () => {
    const hobbiesSection = document.getElementById("hobbies-section");
    if (hobbiesSection) {
      hobbiesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {!showFilmStrip ? (
        <LandingPage onComplete={handleLandingComplete} />
      ) : (
        <div className="min-h-screen flex flex-col relative z-10">
          {/* Red glowing orb background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute top-1/2 left-10 w-72 h-72 bg-red-500/8 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute bottom-40 right-40 w-64 h-64 bg-red-700/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            />
            <div
              className="absolute top-1/3 left-1/4 w-48 h-48 bg-red-600/6 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: "1.5s" }}
            />
            <div
              className="absolute bottom-1/4 left-1/2 w-56 h-56 bg-red-500/8 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
          </div>

          {/* ATHULYA logo */}
          <button
            onClick={handleReturnToLanding}
            className="absolute top-8 left-8 text-red-600 tracking-widest hover:text-red-500 transition-colors duration-300 z-20"
          >
            ATHULYA
          </button>

          {/* Film Strip */}
          <div className="pt-24">
            <FilmStrip />
          </div>

          {/* Genre Buttons */}
          <div className="pt-24 pb-16 px-4">
            <p className="text-center text-gray-500 mb-6 tracking-widest uppercase text-sm">
              Top Genres
            </p>

            <div className="flex flex-col items-center gap-8">
              {/* Buttons */}
              
              <div className="flex justify-center gap-6">
                {/* ABOUT ME BUTTON */}
                
                <button
                  onClick={() => setShowAboutMe(true)}
                  className="group relative px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105 border border-white/20 shadow-lg hover:shadow-2xl hover:shadow-red-500/50"
                >
                  {/* Featured Banner */}
                  <span className="relative">About Me</span>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-2 py-0.5 text-xs tracking-wider rounded shadow-md z-10">
                    FEATURED
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>

                {/* PROJECTS BUTTON */}
                <button
                  onClick={scrollToProjects}
                  className="group relative px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105 border border-white/20 shadow-lg hover:shadow-2xl hover:shadow-red-500/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative">Projects</span>
                </button>

                {/* HOBBIES BUTTON */}
                <button
                  onClick={scrollToHobbies}
                  className="group relative px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105 border border-white/20 shadow-lg hover:shadow-2xl hover:shadow-red-500/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative">Hobbies</span>
                </button>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <ProjectsSection />

          {/* Hobbies Section */}
          <div id="hobbies-section" className="relative">
            <HobbiesView />
          </div>

          {/* Spacer */}
          <div className="flex-1" />
        </div>
      )}

      {/* Info Card Modal */}
      {showAboutMe && <InfoCard onClose={() => setShowAboutMe(false)} />}

      {/* Footer – now hidden on Landing Page */}
      {showFilmStrip && (
        <footer className="w-full text-center text-gray-400 py-10 text-sm tracking-wide mt-20">
          ©{new Date().getFullYear()} Athulya Productions  
          <a> | </a>
          <a
            href="https://www.linkedin.com/in/athulyasaravanakumar/" target="blank"
            className="text-gray-300 hover:text-white transition-colors underline underline-offset-2"
          >
            LinkedIn
          </a>
          <a> | athulyas [dot] work @ gmail [dot] com</a>
        </footer>
      )}
    </div>
  );
}
