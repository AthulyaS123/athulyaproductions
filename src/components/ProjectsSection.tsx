import { useState } from 'react';
import { motion } from 'motion/react';
import { VideoPlayer } from './VideoPlayer';
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";



interface Episode {
  id: number;
  title: string;
  thumbnail: string;
  videoUrl: string;
}

interface Project {
  id: number;
  title: string;
  thumbnail: string;
  videoUrl?: string;
  description: string;
  episodes?: Episode[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Equity Risk Score Audit",
    thumbnail: `${import.meta.env.BASE_URL}projects/d.jpeg`,
    videoUrl: "https://www.youtube.com/embed/zhtNhcqTih0",
    description: "Multi-Modal ML for Risk Score Assessment"
  },
  {
    id: 2,
    title: "Pose Data Visualization",
    thumbnail: `${import.meta.env.BASE_URL}projects/c.jpeg`,
    videoUrl: "https://www.youtube.com/embed/Wen5lScIwGM",
    description: "Real time 3D Pose Estimation and AI Data Metrics"
  },
  {
    id: 3,
    title: "Salesforce AI Engine",
    thumbnail: `${import.meta.env.BASE_URL}projects/e.jpeg`,
    videoUrl: "https://www.youtube.com/embed/q_R21nKuFo8",
    description: "Automated promotion setup, prediction, and recommendation"
  },
  {
    id: 4,
    title: "Fitify",
    thumbnail: `${import.meta.env.BASE_URL}projects/a.jpeg`,
    videoUrl: "https://www.youtube.com/embed/qHhgaujFGtE",
    description: "AI Powered Fashion App"
  },
  {
    id: 5,
    title: "AI/ML/Robotics",
    thumbnail: `${import.meta.env.BASE_URL}projects/b.jpeg`,
    description: "4 Episodes",
    episodes: [
      {
        id: 1,
        title: "RL Agent",
        thumbnail:
          "https://images.unsplash.com/photo-1742767069929-0c663150b164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWluZm9yY2VtZW50JTIwbGVhcm5pbmclMjByb2JvdHxlbnwxfHx8fDE3NjUzMDkyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        videoUrl: "https://www.youtube.com/embed/l2DG-Y3Q69Y"
      },
      {
        id: 2,
        title: "Pathfinding",
        thumbnail:
          "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=250&fit=crop",
        videoUrl: "https://www.youtube.com/embed/9pZk6KUO7dI"
      },
      {
        id: 3,
        title: "Object Detection",
        thumbnail:
          "https://images.unsplash.com/photo-1546440554-353aee3985b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFmZmljJTIwY2FycyUyMGRldGVjdGlvbnxlbnwxfHx8fDE3NjUzMDkyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        videoUrl: "https://www.youtube.com/embed/jvuX2wJNvXg"
      },
      {
        id: 4,
        title: "PID",
        thumbnail:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
        videoUrl: "https://www.youtube.com/embed/ZTdhinERBz0"
      }
    ]
  },
  {
    id: 6,
    title: "iReflect",
    thumbnail: `${import.meta.env.BASE_URL}projects/forrestmirror.jpeg`,
    videoUrl: "https://www.youtube.com/embed/jc4m_DrqxCA",
    description: "AI and Design"
  }
];


export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // ⭐ NEW: State to control arrow visibility
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  // ⭐ NEW: Listen to scrolling to toggle arrows
  const handleScroll = () => {
    const container = document.getElementById("projects-scroll");
    if (!container) return;

    const atStart = container.scrollLeft === 0;
    const atEnd =
      container.scrollWidth - container.clientWidth - container.scrollLeft < 5;

    setShowLeft(!atStart);
    setShowRight(!atEnd);
  };

  return (
    <>
      <div id="projects-section" className="py-20 px-8 relative">

        <motion.h2
          className="text-4xl text-white mb-8 tracking-wider"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Top 10 Projects Today
        </motion.h2>

        {/* ⭐ LEFT ARROW — only shows after first scroll */}
        {showLeft && (
          <button
            onClick={() => {
              const container = document.getElementById("projects-scroll");
              if (container) container.scrollBy({ left: -400, behavior: "smooth" });
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20
                       w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md
                       rounded-full flex items-center justify-center
                       transition-all hover:scale-110 border border-white/20 shadow-lg"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>
        )}

        {/* ⭐ RIGHT ARROW — hides when reaching end */}
        {showRight && (
          <button
            onClick={() => {
              const container = document.getElementById("projects-scroll");
              if (container) container.scrollBy({ left: 400, behavior: "smooth" });
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20
                       w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md
                       rounded-full flex items-center justify-center
                       transition-all hover:scale-110 border border-white/20 shadow-lg"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        )}

        {/* ⭐ Add onScroll listener */}
        <div
          id="projects-scroll"
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer flex-shrink-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative w-96 h-56 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
          <motion.p
          className="text-gray-500 mt-16 text-sm tracking-wider relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Click a project to watch. 
          Scroll to view more.
        </motion.p>
      </div>

      {/* Modal */}

      
      {selectedProject && (
        <VideoPlayer
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
