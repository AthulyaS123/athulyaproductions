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
    thumbnail: `${import.meta.env.BASE_URL}hobbies/travel/BB95E464-458E-4B1C-9F52-6ED9BAA2E8B3_4_5005_c.jpeg`,
    description: "Fun Fact: Traveled to 6 countries in 3 weeks! I love exploring new cultures and learning about different perspectives of life. I am a life long learner, so every person I meet is valuable.",
    images: [
      `${import.meta.env.BASE_URL}hobbies/travel/45EB8450-CFB7-4BB8-8DFC-1C76BF8F26AA_4_5005_c.jpeg`,
      `${import.meta.env.BASE_URL}hobbies/travel/360F6F31-31EA-41B1-A64E-36370136E442_1_105_c.jpeg`,
      `${import.meta.env.BASE_URL}hobbies/travel/921B9F10-67D8-4946-933D-4675E43EAAD0_1_105_c.jpeg`,
      `${import.meta.env.BASE_URL}hobbies/travel/1695C2E3-1375-4EA4-B11F-1EF492917204_4_5005_c.jpeg`,
      `${import.meta.env.BASE_URL}hobbies/travel/6963CB39-832B-4D5A-BDB0-CE3732365B4C_1_105_c.jpeg`,
      `${import.meta.env.BASE_URL}hobbies/travel/35685D79-5080-4FA6-8C1F-3AA0A06C2777_1_105_c.jpeg`,
      `${import.meta.env.BASE_URL}hobbies/travel/9222926C-0980-48AB-A708-2A9B50E4D2EC_4_5005_c.jpeg`,
      `${import.meta.env.BASE_URL}hobbies/travel/A1B4A571-2858-4BA4-B826-0EE221CAFB7B_4_5005_c.jpeg`,
      `${import.meta.env.BASE_URL}hobbies/travel/A729DB24-CF7A-4802-946C-EDE729C2A8EB_1_105_c.jpeg`,
      `${import.meta.env.BASE_URL}hobbies/travel/BB95E464-458E-4B1C-9F52-6ED9BAA2E8B3_4_5005_c.jpeg`,
      `${import.meta.env.BASE_URL}hobbies/travel/DD3F568C-29BE-4287-8359-D58457F18960_4_5005_c.jpeg`
    ]
  },
  {
    id: 2,
    title: "Food",
    thumbnail: `${import.meta.env.BASE_URL}hobbies/food/9DD162A8-B6E1-4A1A-8AC6-32F6824608EE_1_105_c.jpeg`,
    description: "Who doesn't love to eat! My favorite restaurants is Thai Siam and I have gone there 312 times. I am the friend that always carries a snack, so you will never go hungry!",
    images: [
      `${import.meta.env.BASE_URL}hobbies/food/2A9ED195-76A8-44A9-ABCE-BFB467DE75DA_1_105_c.jpeg`,
      `${import.meta.env.BASE_URL}hobbies/food/3A2EE495-E8A1-44AA-B5CD-D4CCF5612CA3_4_5005_c.jpeg`,
      `${import.meta.env.BASE_URL}hobbies/food/8D3D9B71-2B67-4E33-B5A7-6DB719FC2DCF_1_105_c.jpeg`,
      `${import.meta.env.BASE_URL}hobbies/food/9DD162A8-B6E1-4A1A-8AC6-32F6824608EE_1_105_c.jpeg`,
      `${import.meta.env.BASE_URL}hobbies/food/0941CABD-6A43-42E6-B5AC-5CE679DB5A13_4_5005_c.jpeg`,
      `${import.meta.env.BASE_URL}hobbies/food/D55B624F-8B20-424E-A894-E5D45640382C_4_5005_c.jpeg`
    ]
  },
  {
    id: 3,
    title: "Music",
    thumbnail: `${import.meta.env.BASE_URL}hobbies/music/941AA4B9-0819-41FD-BE22-231FDA208D07_1_105_c.jpeg`,
    description: "Music is a language everyone can understand. It makes me connect to my emotions and those around me. Favorite genre is indie music!",
    images: [
      `${import.meta.env.BASE_URL}hobbies/music/0D1B4014-2FAD-4EBA-8A0E-F8A3D0806686_1_105_c.jpeg`,
      `${import.meta.env.BASE_URL}hobbies/music/2C0BF5C8-39EF-4CFE-9DA0-19AA75EF63FA_4_5005_c.jpeg`,
      `${import.meta.env.BASE_URL}hobbies/music/4DD86988-AC82-4CC7-B254-6E3911B4273F_1_105_c.jpeg`,
      `${import.meta.env.BASE_URL}hobbies/music/076F6088-A438-4CC8-A1F3-DBBCDBCE9C3F_4_5005_c.jpeg`,
      `${import.meta.env.BASE_URL}hobbies/music/941AA4B9-0819-41FD-BE22-231FDA208D07_1_105_c.jpeg`
    ]
  },
  {
    id: 4,
    title: "Sports",
    thumbnail: `${import.meta.env.BASE_URL}hobbies/sports/9A70C068-645D-4CC6-9A21-582224E26694_4_5005_c.jpeg`,
    description: "Whether it's watching or playing sports, I am very spirited. I used to do basketball and track. I now currently play pickleball. GO LONGHORNS!",
    images: [
      `${import.meta.env.BASE_URL}hobbies/sports/2C2CFDD3-78D2-4E02-ACD3-6BDFF11FB30C_4_5005_c.jpeg`,
      `${import.meta.env.BASE_URL}hobbies/sports/773CD0B7-8149-447E-BEF3-08B9F91589A2_4_5005_c.jpeg`,
      `${import.meta.env.BASE_URL}hobbies/sports/3510D65F-1640-4627-BB12-734FB9B00848_4_5005_c.jpeg`,
      `${import.meta.env.BASE_URL}hobbies/sports/BB78A771-5C4F-4759-9D1F-12DA67D6B883_4_5005_c.jpeg`,
      `${import.meta.env.BASE_URL}hobbies/sports/9A70C068-645D-4CC6-9A21-582224E26694_4_5005_c.jpeg`,
      `${import.meta.env.BASE_URL}hobbies/sports/EAD71439-99B4-4034-B071-3A938420B853_4_5005_c.jpeg`
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
          className="text-4xl text-white mb-8 tracking-wider relative z-10"
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