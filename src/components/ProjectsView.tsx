import { useState } from 'react';
import { motion } from 'motion/react';
import { VideoPlayer } from './VideoPlayer';
import { ArrowLeft, X } from 'lucide-react';

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
    title: "Salesforce AI Engine",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop",
    videoUrl: "https://www.youtube.com/embed/q_R21nKuFo8",
    description: "Automated promotion setup, prediction, and recommendation"
  },
  {
    id: 2,
    title: "Fitify",
    thumbnail: "https://i.ibb.co/N6jzxXLG/image.jpg",
    videoUrl: "https://www.youtube.com/embed/qHhgaujFGtE",
    description: "AI Powered Fashion App"
  },
  {
    id: 3,
    title: "AI/ML/Robotics",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=600&fit=crop",
    description: "4 Episodes",
    episodes: [
      {
        id: 1,
        title: "RL Agent",
        thumbnail: "https://images.unsplash.com/photo-1742767069929-0c663150b164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWluZm9yY2VtZW50JTIwbGVhcm5pbmclMjByb2JvdHxlbnwxfHx8fDE3NjUzMDkyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        videoUrl: "https://www.youtube.com/embed/l2DG-Y3Q69Y"
      },
      {
        id: 2,
        title: "Pathfinding",
        thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=250&fit=crop",
        videoUrl: "https://www.youtube.com/embed/9pZk6KUO7dI"
      },
      {
        id: 3,
        title: "Object Detection",
        thumbnail: "https://images.unsplash.com/photo-1546440554-353aee3985b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFmZmljJTIwY2FycyUyMGRldGVjdGlvbnxlbnwxfHx8fDE3NjUzMDkyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        videoUrl: "https://www.youtube.com/embed/jvuX2wJNvXg"
      },
      {
        id: 4,
        title: "PID",
        thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
        videoUrl: "https://www.youtube.com/embed/ZTdhinERBz0"
      }
    ]
  }
];

interface ProjectsViewProps {
  onBack: () => void;
}

export function ProjectsView({ onBack }: ProjectsViewProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 relative">
        {/* Red glowing gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-red-900/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/30 via-black to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[120px]" />
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute top-8 left-8 z-20 flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105 border border-white/20 shadow-lg group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          <span>Back to Genres</span>
        </button>

        <motion.h2
          className="text-5xl text-white mb-16 tracking-wider relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full relative z-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Movie Poster */}
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-2xl mb-4">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
                    </div>
                    <p className="text-white text-sm">{project.description}</p>
                  </div>
                </div>
              </div>

              {/* Movie Title */}
              <h3 className="text-white text-xl text-center group-hover:text-red-500 transition-colors duration-300">
                {project.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Back to genres text */}
        <motion.p
          className="text-gray-500 mt-16 text-sm tracking-wider relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Click a project to watch
        </motion.p>
      </div>

      {/* Video Player Modal */}
      {selectedProject && (
        <VideoPlayer
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}