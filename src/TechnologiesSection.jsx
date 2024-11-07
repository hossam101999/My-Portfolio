import React from 'react';
import { motion, useAnimation, useTransform, useScroll } from 'framer-motion';
import { Hexagon, CheckCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
const TECH_SKILLS = [
  { icon: "fa-html5", name: "HTML", percentage: 90, color: "#e34c26" },
  { icon: "fa-css3", name: "CSS", percentage: 90, color: "#264de4" },
  { icon: "fa-angular", name: "Angular", percentage: 85, color: "#dd1b16" },
  { icon: "fa-bootstrap", name: "Bootstrap 5", percentage: 90, color: "#7952b3" },
  { icon: "tailwind-css-svgrepo-com", name: "Tailwind CSS", percentage: 85, color: "#38bdf8" },
  { icon: "fa-js", name: "JavaScript", percentage: 90, color: "#f7df1e" },
  { icon: "typescript-icon-svgrepo-com", name: "TypeScript", percentage: 80, color: "#3178c6" },
  { icon: "fa-react", name: "React Js", percentage: 90, color: "#61dafb" },
  { icon: "redux-svgrepo-com", name: "Redux, Redux Toolkit", percentage: 80, color: "#764abc" },
  { icon: "fa-git-alt", name: "Git", percentage: 85, color: "#f05032" },
];

const TechnologiesSection = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const yOffset = useTransform(scrollY, [0, 300], [0, -50]);
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      style={{ y: yOffset }}
      className="py-20 text-gray-100 bg-black"  
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-14 text-center text-gray-100">
          My Tech Stack
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {TECH_SKILLS.map((skill) => (
            <motion.div
              key={skill.name}
              className="bg-gray-900 rounded-lg p-6 flex flex-col items-center text-center"
              whileHover={{ scale: 1.1, rotate: 5, boxShadow: `0 0 15px ${skill.color}` }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{
                  background: `linear-gradient(to right, ${skill.color} 0%, ${skill.color} ${skill.percentage}%, #404040 ${skill.percentage}%, #404040 100%)`,
                }}
              >
                <Hexagon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-100">{skill.name}</h3>
              <div className="flex items-center gap-2 text-gray-400 mb-4">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <p>{skill.percentage}%</p>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2.5">
                <motion.div
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2.5 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TechnologiesSection;
