import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { GridViewer } from './GridViewer';

interface Hobby {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  images: string[];
}

const hobbies: Hobby[] = [
  {
    id: 1,
    title: "Travel Adventures",
    thumbnail: "https://i.ibb.co/hFBgc1RY/1-E1-F44-A0-8-E9-D-4983-832-F-A5-A1-C5-A32-A3-D-1-105-c.jpg",
    description: "Exploring the world one destination at a time",
    images: [
      "https://i.ibb.co/hFBgc1RY/1-E1-F44-A0-8-E9-D-4983-832-F-A5-A1-C5-A32-A3-D-1-105-c.jpg",

      "https://i.ibb.co/tPvtnLmB/2-D98-C2-B1-3144-4653-92-A1-A34-A859-E99-AC-4-5005-c.jpg",

      "https://i.ibb.co/W8J6vNM/6-C664385-C62-F-4-C1-E-935-C-E52320-A1-B879-4-5005-c.jpg",
      "https://i.ibb.co/mrwcDj0z/6-E7728-A4-EFBB-487-A-BCFE-115-B6-A195-F6-B-1-105-c.jpg",
      "https://i.ibb.co/mVQ6gTrC/07-EF7-BC5-6-EF8-4178-8-DD9-B951704460-BB-1-105-c.jpg",
      "https://i.ibb.co/FkWMNDKV/30-FAA7-DF-38-C7-4-B17-B53-D-68-D027973-F34-1-105-c.jpg",
  
      "https://i.ibb.co/BVGMX0S1/90-CADB7-E-5286-4035-9-F21-A4-C47-B701-DD4-1-105-c.jpg",
      "https://i.ibb.co/LdFkv9xh/360-F6-F31-31-EA-41-B1-A64-E-36370136-E442-1-105-c.jpg",

      "https://i.ibb.co/zhhZ8TXZ/6963-CB39-832-B-4-D5-A-BDB0-CE3732365-B4-C-1-105-c.jpg",
      "https://i.ibb.co/0Rv2PBgG/35685-D79-5080-4-FA6-8-C1-F-3-AA0-A06-C2777-1-105-c.jpg",

      "https://i.ibb.co/zW0cmSpH/458271-E4-2877-41-D9-81-D4-722-F47-C4-A2-CC-1-105-c.jpg",

      "https://i.ibb.co/N22swSS4/E8-D5-FEEA-70-FE-4-E6-D-B97-B-ED9-A9-AAE6603-1-105-c.jpg"
    ]
  },
  {
    id: 2,
    title: "Food",
    thumbnail: "https://i.ibb.co/jnJPFyV/9-DD162-A8-B6-E1-4-A1-A-8-AC6-32-F6824608-EE-1-105-c.jpg",
    description: "Exploring culinary delights and flavors",
    images: [
      "https://i.ibb.co/jnJPFyV/9-DD162-A8-B6-E1-4-A1-A-8-AC6-32-F6824608-EE-1-105-c.jpg",
      "https://i.ibb.co/7tLrs3xY/3-A2-EE495-E8-A1-44-AA-B5-CD-D4-CCF5612-CA3-4-5005-c.jpg",
      "https://i.ibb.co/08cd61k/8-D3-D9-B71-2-B67-4-E33-B5-A7-6-DB719-FC2-DCF-1-105-c.jpg",
      "https://i.ibb.co/m5vNJWHb/919-D6112-491-B-4446-87-A8-A4-AF83-DEBBDD-4-5005-c.jpg",
      "https://i.ibb.co/WW0mvR0v/1106023-E-5-E72-487-D-B5-E7-B3-EA0-AB328-A3-4-5005-c.jpg",
      "https://i.ibb.co/jvG1C5sk/77051706-FBAD-4280-B843-9-A1-E140838-A1-4-5005-c.jpg",
      "https://i.ibb.co/SDVvKxFV/C1412-AD0-A40-E-4-F63-9-D19-6-F55-AEFD2096-4-5005-c.jpg"
    ]
  },
  {
    id: 3,
    title: "Music",
    thumbnail: "https://i.ibb.co/BVFDm491/076-F6088-A438-4-CC8-A1-F3-DBBCDBCE9-C3-F-4-5005-c.jpg",
    description: "Live music and unforgettable experiences",
    images: [
  "https://i.ibb.co/Gvtf5KyD/4-DD86988-AC82-4-CC7-B254-6-E3911-B4273-F-1-105-c.jpg",
"https://i.ibb.co/BVFDm491/076-F6088-A438-4-CC8-A1-F3-DBBCDBCE9-C3-F-4-5005-c.jpg",
"https://i.ibb.co/BKVBkzLP/83-DE61-BB-89-D2-4733-8-F67-DF2-F11468-A94-1-105-c.jpg",
"https://i.ibb.co/214d3V8C/941-AA4-B9-0819-41-FD-BE22-231-FDA208-D07-1-105-c.jpg",
"https://i.ibb.co/VYg39QHk/F78849-C5-8222-4-DE4-AAE2-6-EB9-BBC963-C4-4-5005-c.jpg"

    ]
  },
  {
    id: 4,
    title: "Sports",
    thumbnail: "https://i.ibb.co/RpZHcvCK/584778-BE-C72-F-476-C-BD73-05-D910-A35926-1-105-c.jpg",
    description: "Staying active and competitive",
    images: [
      "https://i.ibb.co/v6ZBpQJ4/273-F7-D02-FD87-4-A99-BA93-C6-A9-E867-D19-B-1-105-c.jpg",
"https://i.ibb.co/RpZHcvCK/584778-BE-C72-F-476-C-BD73-05-D910-A35926-1-105-c.jpg",
"https://i.ibb.co/jksJHwWW/ADAC21-B6-D495-4-D1-F-90-A7-F544-A647-DCBB-1-105-c.jpg",
"https://i.ibb.co/qFy6HDVM/DB5-A4055-779-E-4-D8-B-9-AD6-47738-F036-BE6-1-105-c.jpg",
"https://i.ibb.co/L22Wm0S/FAFB2-EE2-9611-4407-ACD6-4-C23-DDAB5-C65-1-105-c.jpg"

    ]
  }
];

interface HobbiesViewProps {
  onBack?: () => void;
}

export function HobbiesView({ onBack }: HobbiesViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedHobby, setSelectedHobby] = useState<Hobby | null>(null);

  const rotateLeft = () => {
    setCurrentIndex((prev) => (prev - 1 + hobbies.length) % hobbies.length);
  };

  const rotateRight = () => {
    setCurrentIndex((prev) => (prev + 1) % hobbies.length);
  };

  const getCarouselStyle = (index: number) => {
    const totalItems = hobbies.length;
    const angle = ((index - currentIndex) * 360) / totalItems;
    const radius = 350; // Distance from center (reduced)
    
    return {
      transform: `
        rotateY(${angle}deg) 
        translateZ(${radius}px)
        ${Math.abs(index - currentIndex) > totalItems / 2 ? 'scale(0.8)' : 'scale(1)'}
      `,
      opacity: Math.abs(index - currentIndex) === 0 ? 1 : 0.6,
      zIndex: Math.abs(index - currentIndex) === 0 ? 10 : 5
    };
  };

  const handleNext = () => {
    const currentHobbyIndex = hobbies.findIndex(h => h.id === selectedHobby?.id);
    const nextIndex = (currentHobbyIndex + 1) % hobbies.length;
    setSelectedHobby(hobbies[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const currentHobbyIndex = hobbies.findIndex(h => h.id === selectedHobby?.id);
    const prevIndex = (currentHobbyIndex - 1 + hobbies.length) % hobbies.length;
    setSelectedHobby(hobbies[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">
        {/* Red glowing gradient background - made more subtle at the top */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/10 to-red-900/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/20 to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[120px]" />

        {/* Back Button - Only show if onBack is provided */}
        {onBack && (
          <button
            onClick={onBack}
            className="absolute top-8 left-8 z-20 flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105 border border-white/20 shadow-lg group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Genres</span>
          </button>
        )}

        <motion.h2
          className="text-5xl text-white mb-8 tracking-wider relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore Trending Hobbies Today
        </motion.h2>

        <motion.p
          className="text-gray-400 mb-16 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Use arrows to explore
        </motion.p>

        {/* 3D Carousel Container */}
        <div className="relative w-full h-[400px] flex items-center justify-center perspective-[2000px] relative z-10">
          {/* Carousel */}
          <div 
            className="relative w-full h-full flex items-center justify-center"
            style={{ 
              transformStyle: 'preserve-3d',
              perspective: '2000px'
            }}
          >
            {hobbies.map((hobby, index) => {
              const isCenter = index === currentIndex;
              return (
                <div
                  key={hobby.id}
                  className={`absolute w-52 aspect-square transition-all duration-700 ease-out cursor-pointer ${
                    isCenter ? 'pointer-events-auto' : 'pointer-events-none'
                  }`}
                  style={{
                    ...getCarouselStyle(index),
                    transformStyle: 'preserve-3d'
                  }}
                  onClick={() => isCenter && setSelectedHobby(hobby)}
                >
                  {/* Square Photo Card */}
                  <div className={`relative w-full h-full rounded-lg overflow-hidden shadow-2xl transition-all duration-500 ${
                    isCenter ? 'shadow-red-500/50' : ''
                  }`}>
                    <img
                      src={hobby.thumbnail}
                      alt={hobby.title}
                      className="w-full h-full object-cover"
                      crossOrigin="anonymous"
                      onError={(e) => {
                        console.error(`Failed to load image: ${hobby.thumbnail}`);
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=600&fit=crop';
                      }}
                    />
                    
                    {/* Overlay for center item */}
                    {isCenter && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                        <h3 className="text-white text-lg text-center">{hobby.title}</h3>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={rotateLeft}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all hover:scale-110 border border-white/20 shadow-lg"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          <button
            onClick={rotateRight}
            className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all hover:scale-110 border border-white/20 shadow-lg"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        </div>

        {/* Instruction Text */}
        <motion.p
          className="text-gray-500 mt-12 text-sm tracking-wider relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Click center card to view photo
        </motion.p>

        {/* Carousel Indicators */}
        <div className="flex gap-2 mt-8 relative z-10">
          {hobbies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-red-500 w-8' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Grid Viewer Modal */}
      {selectedHobby && (
        <GridViewer
          hobby={selectedHobby}
          onClose={() => setSelectedHobby(null)}
        />
      )}
    </>
  );
}