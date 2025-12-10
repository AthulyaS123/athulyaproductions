import { motion } from 'motion/react';
import { X, Play, Plus, ThumbsUp, Volume2 } from 'lucide-react';

interface InfoCardProps {
  onClose: () => void;
}

export function InfoCard({ onClose }: InfoCardProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-4xl bg-zinc-900 rounded-lg overflow-hidden shadow-2xl border border-zinc-800"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero Section */}
        <div className="relative bg-gradient-to-b from-zinc-800 to-zinc-900">
          {/* Technology Background Image */}
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29kZSUyMHByb2dyYW1taW5nfGVufDF8fHx8MTc2NTI1NTkwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Technology background"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Red glowing gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-red-900/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-red-950/30 via-zinc-900/60 to-zinc-900" />

          {/* Close Button - Glass Style */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all hover:scale-110 border border-white/20 shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
            <X className="w-6 h-6 text-white relative z-10" />
          </button>

          {/* Title & Info */}
          <div className="relative p-8 pt-16 pb-6">
            <motion.h2
              className="text-5xl text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              About Me
            </motion.h2>

            {/* Action Buttons - Glass Style */}
            <motion.div
              className="flex gap-3 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <button className="group relative flex items-center gap-2 px-6 py-3 bg-white hover:bg-white/90 text-black rounded transition-all backdrop-blur-md shadow-lg hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded opacity-0 group-hover:opacity-100 transition-opacity" />
                <Play className="w-5 h-5 relative z-10" fill="currentColor" />
                <span className="relative z-10">Play</span>
              </button>
              <button className="group relative w-11 h-11 bg-zinc-800/80 hover:bg-zinc-700 backdrop-blur-md border-2 border-gray-500 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full" />
                <Plus className="w-6 h-6 text-white relative z-10" />
              </button>
              <button className="group relative w-11 h-11 bg-zinc-800/80 hover:bg-zinc-700 backdrop-blur-md border-2 border-gray-500 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full" />
                <ThumbsUp className="w-5 h-5 text-white relative z-10" />
              </button>
              <button className="group relative w-11 h-11 bg-zinc-800/80 hover:bg-zinc-700 backdrop-blur-md border-2 border-gray-500 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg ml-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full" />
                <Volume2 className="w-5 h-5 text-white relative z-10" />
              </button>
            </motion.div>

            {/* Metadata */}
            <motion.div
              className="flex items-center gap-4 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-green-500">100% Match</span>
              <span className="px-2 py-0.5 border border-gray-500 text-gray-400">CS & Entrepreneurship @ UT Austin</span>
              <span className="text-gray-400">Founder/CTO at Apovo</span>
            </motion.div>

            {/* Tags */}
            <motion.div
              className="flex gap-2 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="px-3 py-1 bg-zinc-800 text-gray-300 rounded text-xs">Software Development</span>
              <span className="px-3 py-1 bg-zinc-800 text-gray-300 rounded text-xs">Product Management</span>
              <span className="px-3 py-1 bg-zinc-800 text-gray-300 rounded text-xs">UI/UX Design</span>
            </motion.div> 
          </div>
        </div>

        {/* Content Section - Scrollable */}
        <div className="p-8 pt-4 max-h-96 overflow-y-auto custom-scrollbar">
          {/* Episodes Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-white text-2xl">Episodes</h3>
              <p className="text-gray-400">My Journey</p>
            </div>

            {/* Episode 1 */}
            <div className="flex gap-4 mb-6 p-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors group">
              <div className="text-4xl text-gray-500 w-12 flex-shrink-0">1</div>
              <div className="w-32 h-20 bg-zinc-700 rounded overflow-hidden flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1751666526244-40239a251eae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJpbmclMjBjb21tdW5pdHklMjBzZXJ2aWNlfGVufDF8fHx8MTc2NTI1Nzg0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Volunteering"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-white mb-2">Empathy-Driven</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A curious creator and world-traveler, I am always seeking to learn from new people, 
                  cultures, and perspectives.
                </p>
              </div>
              <div className="text-gray-500 text-sm flex-shrink-0">5m</div>
            </div>

            {/* Episode 2 */}
            <div className="flex gap-4 mb-6 p-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors group">
              <div className="text-4xl text-gray-500 w-12 flex-shrink-0">2</div>
              <div className="w-32 h-20 bg-zinc-700 rounded overflow-hidden flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1562758778-e5638b5b6607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGNvbXBldGl0aW9uJTIwdW5pdmVyc2l0eXxlbnwxfHx8fDE3NjUzMDYxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Robotics at UT Austin"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-white mb-2">Innovation-Focused</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  I blend technical expertise from software engineering roles with a deep passion for 
                  product design, ideation, and building things that matter.
                </p>
              </div>
              <div className="text-gray-500 text-sm flex-shrink-0">6m</div>
            </div>

            {/* Episode 3 */}
            <div className="flex gap-4 mb-6 p-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors group">
              <div className="text-4xl text-gray-500 w-12 flex-shrink-0">3</div>
              <div className="w-32 h-20 bg-zinc-700 rounded overflow-hidden flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1599592187465-6dc742367282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwcGl0Y2glMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNjUyODYxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Startup Presentation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-white mb-2">Impact-Oriented</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  As a junior at UT Austin studying Computer Science and Entrepreneurship, I hone my 
                  skills as the founder/CTO of Apovo, where I&apos;m building an AI-powered healthcare navigator.
                </p>
              </div>
              <div className="text-gray-500 text-sm flex-shrink-0">8m</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Left Column - Description */}
            <div className="col-span-2 space-y-6">
              {/* Education */}
              <div className="border-t border-zinc-800 pt-6">
                <h3 className="text-white mb-3">Education</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-300">University of Texas at Austin</p>
                  <p className="text-gray-400">
                    B.S. Computer Science · Minor in Entrepreneurship · Expected May 2027
                  </p>
                </div>
              </div>

              {/* Relevant Coursework */}
              <div>
                <h3 className="text-white mb-3">Relevant Coursework</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400 mb-2">Computer Science:</p>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      Data Structures, Algorithms, Computer Architecture, Operating Systems, 
                      Software Engineering, HCI, Machine Learning, Cloud Computing, Autonomous Robots, 
                      Start-Up, Venture Capital
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-2">Design:</p>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      AI & Design, Storytelling in Design, Pitch to Prototype
                    </p>
                  </div>
                </div>
              </div>
             <div>
                <h3 className="text-white mb-3">Experience</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400 mb-2">Companies:</p>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      Daikin, JP Morgan Chase, Cisco, Living with Robots Lab, Kendra Scott, FinTech Collective, Apovo, OpenWorkspace, FlightDeck, Sweet Times, Codeverse, First Tech Challenge, First Robotics Challenge
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-2">Awards:</p>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      Freedman Family Pitch, Freshman Research Initiative Fellowship, FIRST Tech Challenge Dean’s List, Cisco IoT Pitch, FTC Regional 1st Place, NCWIT Regional Affiliate Winner
                    </p>
                  </div>
                </div>
              </div>
                
            </div>

            {/* Right Column - Skills */}
            <div className="space-y-6">
              <div>
                <h3 className="text-gray-400 mb-3 text-sm">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Java', 'Python', 'JavaScript', 'TypeScript', 'React', 'CSS/HTML', 
                    'C++', 'AWS Lambda', 'Azure OpenAI', 'APIs', 'AI/ML', 'Docker', 'Git'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="group relative px-3 py-1 bg-zinc-800 text-gray-300 rounded-full text-xs hover:bg-zinc-700 transition-all hover:scale-105 shadow-md"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="relative">{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-gray-400 mb-3 text-sm">Non-Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Product Strategy', 'Leadership', 'Public Speaking', 
                    'Presentation', 'Technical Documentation'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="group relative px-3 py-1 bg-zinc-800 text-gray-300 rounded-full text-xs hover:bg-zinc-700 transition-all hover:scale-105 shadow-md"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="relative">{skill}</span>
                    </span>
                  ))}
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}