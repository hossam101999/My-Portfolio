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
    { name: 'Responsive Design', icon: Globe, color: 'bg-blue-500', description: 'WEB approach' },
    { name: 'RESTful APIs', icon: MessageSquare, color: 'bg-green-500', description: 'API integration & development' },
    { name: 'Quick Learning', icon: Brain, color: 'bg-yellow-500', description: 'Adaptable & fast learner' },
    { name: 'B1 English', icon: MessageSquare, color: 'bg-red-500', description: 'Professional working proficiency' },
    { name: 'Teamwork', icon: Users, color: 'bg-indigo-500', description: 'Collaborative & communicative' }
  ];

  return (
    <div className="py-20 text-white bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-14 text-center">Additional Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setActiveSkill(index)}
              onMouseLeave={() => setActiveSkill(null)}
              tabIndex={0}
              role="button"
              aria-label={`Skill: ${skill.name}`}
            >
              <div className={`
                p-6 rounded-xl bg-gray-900
                transform transition-all duration-300 
                group-hover:scale-105 group-hover:rotate-3 group-hover:shadow-xl
                border border-white/20 hover:border-white/40
              `}>
                <div className="flex items-center space-x-4">
                  <div className={`${skill.color} p-3 rounded-lg opacity-80`}>
                    {React.createElement(skill.icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
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


// import React, { useState, useEffect } from 'react';
// import { Github, Linkedin, Globe, Users, Brain, MessageSquare } from 'lucide-react';

// const AdditionalSkillsSection = () => {
//   const [scrolling, setScrolling] = useState(false);
//   const [activeSkill, setActiveSkill] = useState(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolling(window.scrollY > 200);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const skills = [
//     { name: 'GitHub', icon: Github, color: 'from-purple-500 to-purple-700', description: 'Version control & collaboration' },
//     { name: 'Responsive Design', icon: Globe, color: 'from-blue-500 to-blue-700', description: 'WEB approach' },
//     { name: 'RESTful APIs', icon: MessageSquare, color: 'from-green-500 to-green-700', description: 'API integration & development' },
//     { name: 'Quick Learning', icon: Brain, color: 'from-yellow-500 to-yellow-700', description: 'Adaptable & fast learner' },
//     { name: 'B1 English', icon: MessageSquare, color: 'from-red-500 to-red-700', description: 'Professional working proficiency' },
//     { name: 'Teamwork', icon: Users, color: 'from-indigo-500 to-indigo-700', description: 'Collaborative & communicative' }
//   ];

//   return (
//     <div className="py-20 text-white bg-black">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-4xl font-bold mb-14 text-center">Additional Skills</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="relative group"
//               onMouseEnter={() => setActiveSkill(index)}
//               onMouseLeave={() => setActiveSkill(null)}
//               tabIndex={0}
//               role="button"
//               aria-label={`Skill: ${skill.name}`}
//             >
//               <div className={`
//                 p-6 rounded-xl bg-gradient-to-r ${skill.color}
//                 transform transition-all duration-300 
//                 group-hover:scale-105 group-hover:rotate-3 group-hover:shadow-lg
//                 border border-white/20 hover:border-white/40
//                 shadow-lg hover:shadow-[0_0_15px_5px_var(--tw-shadow-color)]
//               `} style={{ "--tw-shadow-color": skill.color.split(' ')[0] }}>
//                 <div className="flex items-center space-x-4">
//                   <div className="p-3 rounded-lg opacity-80 bg-gray-900">
//                     {React.createElement(skill.icon, { className: "w-6 h-6 text-white" })}
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
//                     <p className={`
//                       text-sm text-gray-300 mt-1
//                       transition-all duration-300
//                       ${activeSkill === index ? 'opacity-100' : 'opacity-0'}
//                     `}>
//                       {skill.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdditionalSkillsSection;
 