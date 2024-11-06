import React, { useState, useEffect } from 'react';
import { Github, Linkedin, ChevronUp, Globe, Users, Brain, MessageSquare } from 'lucide-react';

const AdditionalSkillsSection = () => {
  const [scrolling, setScrolling] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'GitHub', icon: Github, color: 'bg-purple-500', description: 'Version control & collaboration' },
    { name: 'Responsive Design', icon: Globe, color: 'bg-blue-500', description: 'Mobile-first approach' },
    { name: 'RESTful APIs', icon: MessageSquare, color: 'bg-green-500', description: 'API integration & development' },
    { name: 'Quick Learning', icon: Brain, color: 'bg-yellow-500', description: 'Adaptable & fast learner' },
    { name: 'B1 English', icon: MessageSquare, color: 'bg-red-500', description: 'Professional working proficiency' },
    { name: 'Teamwork', icon: Users, color: 'bg-indigo-500', description: 'Collaborative & communicative' }
  ];

  return (
    <div className=" text-white ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setActiveSkill(index)}
              onMouseLeave={() => setActiveSkill(null)}
              tabIndex={0} // Makes each skill card focusable
              role="button"
              aria-label={`Skill: ${skill.name}`}
            >
              <div className={`
                p-6 rounded-xl bg-white/10
                transform transition-all duration-300 
                group-hover:scale-105 group-hover:shadow-xl
                border border-white/20 hover:border-white/40
              `}>
                <div className="flex items-center space-x-4">
                  <div className={`${skill.color} p-3 rounded-lg opacity-80`}>
                    {React.createElement(skill.icon, { className: "w-6 h-6" })}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                    <p className={`
                      text-sm text-gray-400 mt-1
                      transition-all duration-300
                      ${activeSkill === index ? 'opacity-100' : 'opacity-0'}
                    `}>
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdditionalSkillsSection;




// import React, { useState } from 'react';

// const Preview = () => {
//   // Sample skills data
//   const skills = [
//     { label: 'GitHub', category: 'Tool', level: 'Advanced' },
//     { label: 'Responsive Design', category: 'Development', level: 'Expert' },
//     { label: 'RESTful APIs', category: 'Development', level: 'Advanced' },
//     { label: 'Quick Learning', category: 'Soft Skill', level: 'Expert' },
//     { label: 'B1 English', category: 'Language', level: 'Intermediate' },
//     { label: 'Teamwork', category: 'Soft Skill', level: 'Expert' }
//   ];

//   const [hoveredSkill, setHoveredSkill] = useState(null);

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <h2 className="text-4xl font-bold text-center mb-12">
//           <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
//             Technologies & Skills
//           </span>
//         </h2>

//         {/* Skills Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="relative group"
//               onMouseEnter={() => setHoveredSkill(index)}
//               onMouseLeave={() => setHoveredSkill(null)}
//             >
//               <div className={`
//                 h-full
//                 rounded-xl
//                 p-6
//                 backdrop-blur-md
//                 bg-white/10
//                 border border-white/20
//                 transition-all
//                 duration-300
//                 ${hoveredSkill === index ? 'bg-white/20 transform scale-105' : ''}
//               `}>
//                 {/* Card Content */}
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between">
//                     <span className="text-xl font-semibold">{skill.label}</span>
//                     <span className={`
//                       px-3 py-1
//                       rounded-full
//                       text-sm
//                       ${skill.category === 'Development' ? 'bg-blue-500/30 text-blue-200' :
//                         skill.category === 'Tool' ? 'bg-purple-500/30 text-purple-200' :
//                         skill.category === 'Soft Skill' ? 'bg-green-500/30 text-green-200' :
//                         'bg-orange-500/30 text-orange-200'}
//                     `}>
//                       {skill.category}
//                     </span>
//                   </div>

//                   {/* Progress Bar */}
//                   <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
//                     <div
//                       className={`h-full transition-all duration-500 rounded-full
//                         ${skill.level === 'Expert' ? 'w-full bg-green-500' :
//                           skill.level === 'Advanced' ? 'w-4/5 bg-blue-500' :
//                           'w-3/5 bg-yellow-500'}`}
//                     />
//                   </div>

//                   {/* Level Label */}
//                   <div className="text-sm text-gray-400">
//                     {skill.level}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Footer */}
//         <footer className="mt-16 pt-8 border-t border-white/10">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-gray-400">Hossam Salah</p>
//             <div className="flex space-x-4">
//               <a
//                 href="https://www.linkedin.com/in/hossam-salah-1ab717238/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
//               >
//                 <div className="w-6 h-6 text-blue-400">
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//                   </svg>
//                 </div>
//               </a>
//               <a
//                 href="https://github.com/hossam101999"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
//               >
//                 <div className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300">
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
//                   </svg>
//                 </div>
//               </a>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default Preview;