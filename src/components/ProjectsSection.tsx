import { useState } from 'react';
import { motion } from 'motion/react';
import { VideoPlayer } from './VideoPlayer';

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

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
          Top 3 Projects Today
        </motion.h2>

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
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
              {/* Movie Poster */}
              <div className="relative w-96 h-56 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on hover */}
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