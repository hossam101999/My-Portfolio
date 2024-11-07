import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LucideLinkedin, LucideGithub, LucideArrowUp } from "lucide-react";
import "./App.css";
import ExamGate from "./assets/Exam Gate.png";
import Ecommerce from "./assets/Ecommerce.png";
import Bondi from "./assets/Bondi.png";
import Elzero from "./assets/Elzero.png";
import Elzeroo from "./assets/blog-website-development-data-network-concept_53876-125055.jpg";
import captureImage from "./assets/emage.jpg";
import myPhoto from "./assets/myPhoto (2).png";
import myCv from "./PDFs/Hossam-Salah-Khatab-CV.pdf";
import { EmailForm } from "./EmailForm.jsx";
import TechnologiesSection from "./TechnologiesSection.jsx";
import AdditionalSkillsSection from "./AdditionalSkillsSection.jsx";

const App = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const onPageScroll = () => {
      setScrolling(window.pageYOffset > 200);
    };

    window.addEventListener("scroll", onPageScroll);
    return () => window.removeEventListener("scroll", onPageScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <motion.div
          className="h-32 w-32 border-t-2 border-b-2 border-gray-900 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto relative overflow-hidden">
      <Header scrolling={scrolling} />
      <main className="relative mt-28">
        <HeroSection />
        <ProjectsSection />
        <TechnologiesSection />
        <AdditionalSkillsSection />
        <EmailForm />
      </main>
      <Footer />
      <ScrollToTopButton visible={scrolling} />
    </div>
  );
};

const Header = ({ scrolling }) => (
  <motion.header
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
    className={`${
      scrolling ? "border-b border-gray-900" : ""
    } fixed left-0 right-0 top-0 z-20 bg-black backdrop-blur-sm bg-opacity-90`}
  >
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
        <motion.h1 
          className="font-bold text-2xl text-white"
          whileHover={{ scale: 1.05 }}
        >
          Hossam Salah
        </motion.h1>
        <nav>
          <ul className="flex gap-6 text-gray-400">
            {["Projects", "Technologies", "Connect Me"].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1, color: "#fff" }}
                whileTap={{ scale: 0.95 }}
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </motion.header>
);

const HeroSection = () => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <div className="container mx-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
      <motion.div 
        className="w-full md:max-w-[60%]"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-bold text-4xl">Hello, I'm Hossam Salah</h2>
        <div>
          <h2 className="font-bold text-4xl mt-1 gradiant-text">
            Full Stack Developer
          </h2>
        </div>
        <div>
          <p className="mt-4 text-gray-400">
            I am a{" "}
            <span className="text-white">Frontend Developer</span> specializing
            in React JS and Angular, with strong skills in HTML, CSS,
            JavaScript, and modern React tools. I also have{" "}
            <span className="text-white">Backend Developer</span> experience in
            Node.js, Express, and MongoDB. With excellent time management
            and a collaborative spirit,
          </p>
          <motion.a 
            href={myCv} 
            download="Hossam-Salah-Khatab-CV.pdf" 
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 text-white">
              Download Resume
            </button>
          </motion.a>
        </div>
        <div className="mt-10">
          <SocialLinks />
        </div>
      </motion.div>
      <motion.div 
        className="relative"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
          <motion.img
            src={myPhoto}
            className="relative z-10 w-[280px] m-auto sm:w-[600px] rounded-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </div>
  </motion.section>
);

const ProjectsSection = () => {
  const projects = [
    {
      image: captureImage,
      title: "The Menha",
      description: "A platform showcasing scholarships, helping users find opportunities that suit their qualifications and preferences.",
      livePreviewLink: "https://menha-4lrf.vercel.app/dashboard",
      githubLink: "https://github.com/hossam101999/menha-"
    },
    {
      image: Elzero,
      title: "Full E-commerce",
      description: "A complete e-commerce solution built with Angular and Node",
      livePreviewLink: "https://itians-ecommerce-team.vercel.app/",
      githubLink: "https://github.com/hossam101999/E-comerce"
    },
    {
      image: Ecommerce,
      title: "E-commerce",
      description: "Responsive Angular App with APIs dummy",
      livePreviewLink: "https://angular-e-com-c48r.vercel.app",
      githubLink: "https://github.com/hossam101999/angular-E-com.git"
    },
    {
      image: ExamGate,
      title: "Exam Gate",
      description: "Exam Automated and Offers Application Web Responsive",
      githubLink: "https://github.com/hossam101999/exam_.git"
    },
    {
      image: Bondi,
      title: "Portfolio Project",
      description: "An Angular portfolio showcase",
      livePreviewLink: "profile-in-angular.vercel.app",
      githubLink: "https://github.com/hossam101999/profile_in_angular.git"
    },
    {
      image: Elzeroo,
      title: "Blog Page",
      description: "Responsive blog page built with React",
      githubLink: "https://github.com/hossam101999/reactblog"
    }
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-2xl font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-11">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ image, title, description, livePreviewLink, githubLink }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="border border-gray-500 rounded-md p-5 flex flex-col h-full group hover:border-blue-500 transition-colors duration-300"
  >
    <motion.img
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      src={image}
      className="w-full h-[30vh] object-cover rounded-md"
      alt={title}
    />
    <motion.h3 
      className="text-2xl font-semibold mt-8 group-hover:text-blue-500 transition-colors duration-300"
    >
      {title}
    </motion.h3>
    <p className="text-gray-400 text-sm mt-2 flex-grow italic">
      {description}
    </p>
    <div className="flex justify-between gap-4 mt-8">
      {livePreviewLink && (
        <motion.a 
          href={livePreviewLink}
          className="flex-1"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-full py-3 bg-gradient-to-tr from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full transition-colors duration-300">
            Live Preview
          </button>
        </motion.a>
      )}
      {githubLink && (
        <motion.a 
          href={githubLink}
          className="flex-1"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-full py-3 border rounded-full hover:border-blue-500 hover:text-blue-500 transition-colors duration-300">
            View on GitHub
          </button>
        </motion.a>
      )}
    </div>
  </motion.div>
);

const Footer = () => (
  <footer className="border-t border-gray-800">
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center">
        <motion.p 
          className="text-gray-300 text-sm"
          whileHover={{ scale: 1.05 }}
        >
          Hossam Salah
        </motion.p>
        <SocialLinks />
      </div>
    </div>
  </footer>
);

const ScrollToTopButton = ({ visible }) => (
  <motion.button
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 100 }}
    transition={{ duration: 0.3 }}
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="fixed right-8 bottom-8 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
  >
    <LucideArrowUp size={24} />
  </motion.button>
);

const SocialLinks = () => (
  <div className="flex gap-4 text-gray-400">
    {[
      { icon: LucideLinkedin, href: "https://www.linkedin.com/in/hossam-salah-1ab717238/" },
      { icon: LucideGithub, href: "https://github.com/hossam101999" }
    ].map(({ icon: Icon, href }) => (
      <motion.a
        key={href}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, color: "#fff" }}
        whileTap={{ scale: 0.9 }}
      >
        <Icon size={24} />
      </motion.a>
    ))}
  </div>
);

export default App;