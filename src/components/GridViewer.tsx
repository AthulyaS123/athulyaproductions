import { motion } from 'motion/react';
import { X } from 'lucide-react';

interface Hobby {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  images: string[];
}

interface GridViewerProps {
  hobby: Hobby;
  onClose: () => void;
}

export function GridViewer({ hobby, onClose }: GridViewerProps) {
  // Duplicate images for seamless loop
  const duplicatedImages = [...hobby.images, ...hobby.images, ...hobby.images];

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all hover:scale-110 border border-white/20"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Header */}
      <motion.div
        className="mb-12 text-center relative z-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-4xl text-white mb-2">{hobby.title}</h2>
        <p className="text-gray-400">{hobby.description}</p>
      </motion.div>

      {/* Film Strip */}
      <div className="w-full max-w-6xl relative" onClick={(e) => e.stopPropagation()}>
        {/* Film strip perforations (top) */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-zinc-900 flex items-center justify-around z-10 border-b border-zinc-800">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={`perf-top-${i}`} className="w-2 h-2 bg-zinc-700 rounded-sm" />
          ))}
        </div>

        {/* Film strip perforations (bottom) */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-zinc-900 flex items-center justify-around z-10 border-t border-zinc-800">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={`perf-bottom-${i}`} className="w-2 h-2 bg-zinc-700 rounded-sm" />
          ))}
        </div>

        {/* Scrolling images container */}
        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-3 px-3"
            animate={{
              x: [0, -1 * (hobby.images.length * 280 + hobby.images.length * 12)],
            }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {duplicatedImages.map((image, index) => (
              <div
                key={`${hobby.id}-${index}`}
                className="flex-shrink-0 w-70 h-44 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                
                <img
                  src={image}
                  alt={`${hobby.title} ${index}`}
                  className="w-full h-full object-cover rounded-md shadow-2xl transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Frame border */}
                <div className="absolute inset-0 border-2 border-gray-900 rounded-md pointer-events-none" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Vignette effect */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/95 via-transparent to-black/95" />
      </div>

      {/* Footer instruction */}
      <motion.p
        className="text-center text-gray-500 mt-12 text-sm relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={(e) => e.stopPropagation()}
      >
        Click outside to close
      </motion.p>
    </motion.div>
  );
}