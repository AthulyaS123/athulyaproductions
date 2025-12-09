import { motion } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Hobby {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
}

interface PhotoViewerProps {
  hobby: Hobby;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export function PhotoViewer({ hobby, onClose, onNext, onPrev }: PhotoViewerProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-8"
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

      {/* Navigation Buttons */}
      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all hover:scale-110 border border-white/20"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
      )}

      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all hover:scale-110 border border-white/20"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Photo Container */}
      <motion.div
        className="relative max-w-5xl w-full"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Photo */}
        <div className="relative rounded-lg overflow-hidden shadow-2xl">
          <img
            src={hobby.thumbnail}
            alt={hobby.title}
            className="w-full h-auto max-h-[70vh] object-contain"
          />
          
          {/* Red glow effect */}
          <div className="absolute inset-0 shadow-[0_0_100px_rgba(239,68,68,0.3)] pointer-events-none" />
        </div>

        {/* Info Panel */}
        <motion.div
          className="mt-6 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-white text-3xl mb-2">{hobby.title}</h2>
          <p className="text-gray-300">{hobby.description}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
