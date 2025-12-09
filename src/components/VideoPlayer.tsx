import { motion } from 'motion/react';
import { X, Volume2, VolumeX, Maximize, Pause, Play } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

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

interface VideoPlayerProps {
  project: Project;
  onClose: () => void;
}

export function VideoPlayer({ project, onClose }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();

  // If project has episodes and no episode is selected, show episodes list
  const showEpisodesList = project.episodes && !selectedEpisode;
  // Current video URL - either from selected episode or direct project video
  const currentVideoUrl = selectedEpisode?.videoUrl || project.videoUrl;
  const currentTitle = selectedEpisode?.title || project.title;
  const currentDescription = selectedEpisode ? `Episode ${selectedEpisode.id}` : project.description;
  
  // Check if it's a YouTube video
  const isYouTubeVideo = currentVideoUrl?.includes('youtube.com/embed');

  useEffect(() => {
    // Auto-play the video when component mounts (only if we have a video to play and it's not YouTube)
    if (videoRef.current && currentVideoUrl && !isYouTubeVideo) {
      videoRef.current.play().catch(() => {
        // Auto-play might be blocked, that's okay
        setIsPlaying(false);
      });
    }
  }, [currentVideoUrl, isYouTubeVideo]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    
    // Clear existing timeout
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    
    // Hide controls after 3 seconds of inactivity
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseMove={handleMouseMove}
    >
      {/* Close Button */}
      <motion.button
        onClick={onClose}
        className="absolute top-6 right-6 z-20 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-md rounded-full flex items-center justify-center transition-all hover:scale-110 border border-white/20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: showControls || showEpisodesList ? 1 : 0, scale: showControls || showEpisodesList ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <X className="w-6 h-6 text-white" />
      </motion.button>

      {/* Episodes List View */}
      {showEpisodesList ? (
        <div className="relative w-full h-full flex items-center justify-center p-8 overflow-y-auto">
          {/* Red glowing gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-red-900/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-red-950/30 via-black to-black" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[120px]" />
          
          <motion.div 
            className="relative z-10 max-w-5xl w-full bg-zinc-900/80 backdrop-blur-xl rounded-lg shadow-2xl border border-zinc-800/50 p-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header Section */}
            <div className="mb-8">
              <motion.h2
                className="text-4xl text-white mb-3 tracking-wide"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {project.title}
              </motion.h2>
              
              {/* Metadata */}
              <motion.div
                className="flex items-center gap-4 text-sm mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-green-500">100% Match</span>
                <span className="px-2 py-0.5 border border-gray-500 text-gray-400">2024</span>
                <span className="text-gray-400">4 Episodes</span>
              </motion.div>

              <motion.p
                className="text-gray-300 text-sm leading-relaxed max-w-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                A collection of advanced AI, Machine Learning, and Robotics projects showcasing reinforcement learning, 
                pathfinding algorithms, computer vision, and control systems.
              </motion.p>
            </div>

            {/* Episodes Section */}
            <div className="border-t border-zinc-800 pt-6">
              <h3 className="text-white text-xl mb-6">Episodes</h3>
              
              <div className="space-y-4">
                {project.episodes?.map((episode, index) => (
                  <motion.div
                    key={episode.id}
                    className="flex gap-4 p-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    onClick={() => setSelectedEpisode(episode)}
                  >
                    {/* Episode Number */}
                    <div className="text-4xl text-gray-500 w-12 flex-shrink-0 group-hover:text-red-500 transition-colors">
                      {episode.id}
                    </div>
                    
                    {/* Episode Thumbnail */}
                    <div className="w-32 h-20 bg-zinc-700 rounded overflow-hidden flex-shrink-0 relative">
                      <img
                        src={episode.thumbnail}
                        alt={episode.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Play button overlay on hover */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                          <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                        </div>
                      </div>
                    </div>

                    {/* Episode Info */}
                    <div className="flex-1">
                      <h4 className="text-white mb-2 group-hover:text-red-400 transition-colors">
                        {episode.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {episode.id === 1 && "Implementing reinforcement learning algorithms for autonomous decision-making and adaptive behavior."}
                        {episode.id === 2 && "Advanced pathfinding techniques including A*, Dijkstra, and dynamic obstacle avoidance."}
                        {episode.id === 3 && "Real-time object detection and classification using computer vision and deep learning models."}
                        {episode.id === 4 && "Proportional-Integral-Derivative control systems for precise robotic motion and stability."}
                      </p>
                    </div>

                    {/* Duration */}
                    <div className="text-gray-500 text-sm flex-shrink-0">
                      {episode.id === 1 && "12m"}
                      {episode.id === 2 && "8m"}
                      {episode.id === 3 && "15m"}
                      {episode.id === 4 && "10m"}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      ) : (
        /* Video Player View */
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Cinematic bars (top and bottom) */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-black z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-black z-10 pointer-events-none" />

          {/* Video or YouTube iframe */}
          {isYouTubeVideo ? (
            <iframe
              className="w-full h-full"
              src={`${currentVideoUrl}?autoplay=1&rel=0`}
              title={currentTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              <video
                ref={videoRef}
                className="w-full h-full object-contain cursor-pointer"
                src={currentVideoUrl}
                onClick={togglePlayPause}
                loop
              >
                Your browser does not support the video tag.
              </video>

              {/* Play/Pause Overlay (center) - only for non-YouTube videos */}
              {!isPlaying && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-white/50">
                    <Play className="w-12 h-12 text-white ml-2" fill="white" />
                  </div>
                </motion.div>
              )}
            </>
          )}

          {/* Video Controls (bottom overlay) - only for non-YouTube videos */}
          {!isYouTubeVideo && (
            <motion.div
              className="absolute bottom-16 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showControls ? 1 : 0, y: showControls ? 0 : 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="max-w-6xl mx-auto">
                {/* Title */}
                <h2 className="text-white text-3xl mb-2">{currentTitle}</h2>
                <p className="text-gray-300 text-sm mb-6">{currentDescription}</p>

                {/* Control Buttons */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={togglePlayPause}
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all hover:scale-110 border border-white/20"
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 text-white" />
                    ) : (
                      <Play className="w-6 h-6 text-white ml-1" fill="white" />
                    )}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all hover:scale-110 border border-white/20"
                  >
                    {isMuted ? (
                      <VolumeX className="w-6 h-6 text-white" />
                    ) : (
                      <Volume2 className="w-6 h-6 text-white" />
                    )}
                  </button>

                  <button
                    onClick={() => videoRef.current?.requestFullscreen()}
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all hover:scale-110 border border-white/20"
                  >
                    <Maximize className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Top gradient overlay for title */}
          <motion.div
            className="absolute top-16 left-0 right-0 p-8 bg-gradient-to-b from-black/60 to-transparent z-20 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: showControls ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-6xl mx-auto">
              <p className="text-gray-400 text-sm tracking-wider uppercase">Now Playing</p>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}