import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const images = [
  {id:1,
    url: 'https://i.ibb.co/fVfg8Qxm/IMG-9874.jpg',
    title: 'Memory 1',
  },
  {
    id: 2,
    url: 'https://i.ibb.co/RGkwB40c/1764651-A-715-E-4-C80-B34-A-8-B4-B8043-DEED-1-105-c.jpg',
    title: 'Memory 2',
  },
  {
    id: 3,
    url: 'https://i.ibb.co/7xg8VX13/2-F3-DF2-E5-6999-4-A9-E-8456-B55-FEE087527.avif',
    title: 'Memory 3',
  },
  // Priority images after spotlight
  {
    id: 4,
    url: 'https://i.ibb.co/rRXXbs5W/DEB03312-4-CC9-4-A34-9-D1-E-B473-C6-BD769-D.png',
    title: 'Memory 4',
  },
  {
    id: 5,
    url: 'https://i.ibb.co/MDdLVx2L/F22-FC022-54-E7-4-F9-B-8178-6319-ECF387-E8-4-5005-c.jpg',
    title: 'Memory 5',
  },
  {
    id: 6,
    url: 'https://i.ibb.co/b548fDrT/B3-D9-E051-F0-D6-4-BA9-8-BE6-671-A3-B9-FC5-EB-4-5005-c.jpg',
    title: 'Memory 6',
  },
  {
    id: 7,
    url: 'https://i.ibb.co/KCSGb9R/5-ABAFDE2-2-D19-4-FE6-9-AE1-1-FF1-D01-BBEB0-1-105-c.jpg',
    title: 'Memory 7',
  },
  {
    id: 8,
    url: 'https://i.ibb.co/7N05wttM/0-BC686-D7-593-E-44-B9-92-A7-19-B7-F104-C212-1-105-c.jpg',
    title: 'Memory 8',
  },
  {
    id: 10,
    url: 'https://i.ibb.co/Myhq4Zdm/94-C93-D63-53-CD-44-AF-BDFE-F6-D44-E8-CD684-4-5005-c.jpg',
    title: 'Memory 10',
  },
  {
    id: 12,
    url: 'https://i.ibb.co/DDX2PDTT/921-B9-F10-67-D8-4946-933-D-4675-E43-EAAD0-1-105-c.jpg',
    title: 'Memory 12',
  },
  {
    id: 15,
    url: 'https://i.ibb.co/1tpDXRK6/8646-DBC0-6461-4-CFE-B6-B6-A889217-BC0-F1-1-105-c.jpg',
    title: 'Memory 15',
  },
  {
    id: 18,
    url: 'https://i.ibb.co/whcFWhXC/26450043-EC3-F-499-E-88-A1-40-B171442-D17-4-5005-c.jpg',
    title: 'Memory 18',
  },
  {
    id: 19,
    url: 'https://i.ibb.co/qFRYFhQQ/73368108-6-A13-4231-B28-B-71-DBD94-ED891-4-5005-c.jpg',
    title: 'Memory 19',
  },
  {
    id: 23,
    url: 'https://i.ibb.co/Xx8wD7vq/BB95-E464-458-E-4-B1-C-9-F52-6-ED9-BAA2-E8-B3-4-5005-c.jpg',
    title: 'Memory 23',
  },
  {
    id: 24,
    url: 'https://i.ibb.co/cSrfYwxt/BF19199-A-FF7-A-46-FF-A6-D7-E2-E976-B3-A862-4-5005-c.jpg',
    title: 'Memory 24',
  },
  {
    id: 25,
    url: 'https://i.ibb.co/kgys02rx/BFD50557-45-CE-47-B6-83-F3-A01-AAB8-A5877-4-5005-c.jpg',
    title: 'Memory 25',
  },
  {
    id: 27,
    url: 'https://i.ibb.co/FbqwP9ht/D9-CF54-A7-B078-40-E5-9-F79-7-D547-F4-B9218-1-105-c.jpg',
    title: 'Memory 27',
  },
  {
    id: 28,
    url: 'https://i.ibb.co/ynRjjG1S/DE017178-5-EB5-4-CC1-ACEF-C70-CF7-CCEAF4-1-105-c.jpg',
    title: 'Memory 28',
  },
  // New images
  {
    id: 29,
    url: 'https://i.ibb.co/zhhZ8TXZ/6963-CB39-832-B-4-D5-A-BDB0-CE3732365-B4-C-1-105-c.jpg',
    title: 'Memory 29',
  },
  {
    id: 30,
    url: 'https://i.ibb.co/N22swSS4/E8-D5-FEEA-70-FE-4-E6-D-B97-B-ED9-A9-AAE6603-1-105-c.jpg',
    title: 'Memory 30',
  },
  {
    id: 32,
    url: 'https://i.ibb.co/FkWMNDKV/30-FAA7-DF-38-C7-4-B17-B53-D-68-D027973-F34-1-105-c.jpg',
    title: 'Memory 32',
  },
];

export function FilmStrip() {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [spotlightFading, setSpotlightFading] = useState(false);
  
  // Spotlight image (id 3) - calculate initial position to center it
  const spotlightImageIndex = 2; // id 3 is at index 1
  const imageWidth = 280; // Reduced from 360px
  const gap = 12; // Reduced from 16px
  const initialOffset = -(spotlightImageIndex * (imageWidth + gap)) + (typeof window !== 'undefined' ? window.innerWidth / 2 - imageWidth / 2 : 400);
  
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images, ...images];

  // Start animation after spotlight
  useEffect(() => {
    // Start fading out spotlight
    const fadeTimer = setTimeout(() => {
      setSpotlightFading(true);
    }, 2500); // Start fading at 2.5 seconds
    
    // Start scroll animation
    const scrollTimer = setTimeout(() => {
      setAnimationStarted(true);
    }, 3500); // Start scrolling at 3.5 seconds

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <div className="w-full py-6 relative">
      {/* Film strip perforations (top) */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-zinc-900 flex items-center justify-around z-10 border-b border-zinc-800">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={`perf-top-${i}`} className="w-3 h-3 bg-zinc-700 rounded-sm" />
        ))}
      </div>

      {/* Film strip perforations (bottom) */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-zinc-900 flex items-center justify-around z-10 border-t border-zinc-800">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={`perf-bottom-${i}`} className="w-3 h-3 bg-zinc-700 rounded-sm" />
        ))}
      </div>

      {/* Scrolling images container */}
      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-3 px-3"
          initial={{ x: initialOffset }}
          animate={{
            x: animationStarted 
              ? [initialOffset, -1 * (images.length * imageWidth + images.length * gap)]
              : initialOffset,
          }}
          transition={{
            x: {
              duration: animationStarted ? 60 : 0,
              repeat: animationStarted ? Infinity : 0,
              ease: 'linear',
              delay: animationStarted ? 0 : 0,
            },
          }}
        >
          {duplicatedImages.map((image, index) => {
            const isSpotlight = image.id === 3 && index === spotlightImageIndex && !animationStarted;
            
            return (
              <motion.div
                key={`${image.id}-${index}`}
                className="flex-shrink-0 relative group"
                style={{ 
                  width: `${imageWidth}px`,
                  height: '180px',
                  zIndex: isSpotlight ? 50 : 1 
                }}
                initial={{ scale: 1, opacity: 1 }}
                animate={{
                  scale: isSpotlight ? (spotlightFading ? 1 : 1.1) : 1,
                  opacity: 1,
                }}
                transition={{
                  scale: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
                  opacity: { duration: 0.5 },
                }}
              >
                {/* Spotlight red glow effect */}
                {isSpotlight && (
                  <motion.div
                    className="absolute -inset-4 bg-red-500/40 rounded-lg blur-xl z-0"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: spotlightFading ? [0.7, 0] : [0, 0.5, 0.7, 0.5],
                      scale: spotlightFading ? [1.1, 1] : [0.9, 1, 1.15, 1],
                    }}
                    transition={{
                      duration: spotlightFading ? 1 : 3,
                      repeat: spotlightFading ? 0 : Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                
                <img
                  src={image.url}
                  alt={image.title}
                  className={`w-full h-full object-cover rounded-md shadow-2xl transition-all duration-500 ease-out ${
                    isSpotlight 
                      ? 'ring-4 ring-red-500 shadow-[0_0_40px_rgba(239,68,68,0.6)]' 
                      : 'group-hover:scale-105'
                  }`}
                  style={{ position: 'relative', zIndex: isSpotlight ? 20 : 1 }}
                />
                <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <h3 className="text-sm">{image.title}</h3>
                </div>
                {/* Frame border */}
                <motion.div 
                  className={`absolute inset-0 rounded-md pointer-events-none ${
                    isSpotlight ? 'border-4 border-red-500' : 'border-2 border-gray-900'
                  }`}
                  animate={{
                    opacity: isSpotlight && spotlightFading ? 0 : 1,
                  }}
                  transition={{
                    duration: 1,
                    ease: 'easeInOut',
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Vignette effect - dimmed during spotlight */}
      <motion.div 
        className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black via-transparent to-black"
        animate={{
          opacity: animationStarted ? 1 : 0.3,
        }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />
      
      {/* Spotlight overlay - darkens everything except the spotlight image */}
      {!animationStarted && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ 
            zIndex: 40,
            background: 'radial-gradient(circle 250px at center, transparent 0%, rgba(0,0,0,0.8) 60%)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: spotlightFading ? 0 : 1 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        />
      )}
    </div>
  );
}