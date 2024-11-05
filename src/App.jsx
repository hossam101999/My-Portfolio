import React, { useEffect, useState } from "react";
import "./App.css";
import ExamGate from "./assets/Exam Gate.png";
import Ecommerce from "./assets/Ecommerce.png";
import Bondi from "./assets/Bondi.png";
import Elzero from "./assets/Elzero.png";
import Elzeroo from "./assets/blog-website-development-data-network-concept_53876-125055.jpg";

import Redux from "./assets/redux-svgrepo-com.svg";
import TypeScript from "./assets/typescript-icon-svgrepo-com.svg";
import TailwindCSS from "./assets/tailwind-css-svgrepo-com.svg";
import myPhoto from "./assets/myPhoto (2).png";
import ArrowDown from "./assets/arrow-down.svg";
import myCv from "./PDFs/Hossam-Salah-Khatab-CV.pdf";
import { EmailForm } from "./EmailForm.jsx";
import menha from "./assets/Capture.PNG"
const TECH_SKILLS = [
  { icon: "fa-html5", name: "HTML", percentage: 85 },
  { icon: "fa-css3", name: "CSS", percentage: 85 },
  { icon: "fa-angular", name: "Angular", percentage: 85 },
  { icon: "fa-bootstrap", name: "Bootstrap 5", percentage: 85 },
  { icon: "tailwind-css-svgrepo-com", name: "Tailwind CSS", percentage: 75 },
  { icon: "fa-js", name: "JavaScript", percentage: 80 },
  { icon: "typescript-icon-svgrepo-com", name: "TypeScript", percentage: 70 },
  { icon: "fa-react", name: "React Js", percentage: 75 },
  { icon: "redux-svgrepo-com", name: "Redux, Redux Toolkit", percentage: 70 },
  { icon: "fa-git-alt", name: "Git", percentage: 70 },
];

const ADDITIONAL_SKILLS = [
  "GitHub",
  "Responsive Design",
  "RESTful APIs",
  "Quick learning",
  "B1 English",
  "Teamwork",
];

function App() {
  const [scrolling, setScrolling] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl m-auto relative overflow-hidden">
      <header
        className={`${
          scrolling ? "border-b border-gray-900" : ""
        } fixed left-0 right-0 top-[-14px] sm:top-[0px] z-20 bg-black`}
        id="home"
      >
        <div className="container m-auto px-4 py-6 max-w-4xl">
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl text-white animate-fadeIn">
                Hossam Salah
              </h1>
            </div>
            <div>
              <ul className="flex gap-4 text-gray-400 hover:text-white cursor-pointer animate-fadeIn">
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#technologies">Technologies</a>
                </li>
                <li>
                  <a href="#connectMe">Connect Me</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main className="relative mt-28">
        <section>
          <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
            <div className="w-full md:max-w-[60%] animate-fadeInLeft">
              <h2 className="font-bold text-4xl">Hello, I'm Hossam Salah</h2>
              <div>
                <h2 className="font-bold text-4xl mt-1 gradiant-text animate-fadeInLeft">
                  full stack Developer
                </h2>
              </div>
              <div>
                <p className="mt-4 text-gray-400 animate-fadeInLeft">
                  I am a <span className="text-white"> Frontend Developer </span>  specializing in React JS and Angular,
                  with strong skills in HTML, CSS, JavaScript, and modern React
                  tools. I also<span className="text-white">Backend Developer </span>  experience in Node.js, Express, and
                  MongoDB. With excellent time management and a collaborative
                  spirit,
                </p>
                <a href={myCv} download="Hossam-Salah-Khatab-CV.pdf" target="_blank">
                  <button className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 text-white animate-bounceInUp">
                    Download resume
                  </button>
                </a>
              </div>
              <div className="text-white mt-10 ms-auto animate-fadeInLeft">
                <a
                  href="https://www.linkedin.com/in/hossam-salah-1ab717238/"
                  className="icon-linkedin text-3xl"
                >
                  <i className="fa-brands fa-linkedin me-5"></i>
                </a>
                <a
                  href="https://github.com/hossam101999"
                  className="icon-github text-3xl"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
            <div className="relative animate-fadeInRight">
              <div className="after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
                <img
                  src={myPhoto}
                  className="relative z-10 w-[280px] m-auto sm:w-[600px] rounded-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="animate-fadeInUp">
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-11">
              <ProjectCard
                image={Ecommerce}
                title="E-commerce"
                description="Responsive Angular App with APIs dummy"
                livePreviewLink="https://angular-e-com-c48r.vercel.app"
                githubLink="https://github.com/hossam101999/angular-E-com.git"
              />
                <ProjectCard
                 image={Elzero}
                 title="Full E-commerce"
                 description="In this project, my team and I built a full e-commerce using Angular and Node"
                 livePreviewLink="https://itians-ecommerce-team.vercel.app/"
                 githubLink="https://github.com/hossam101999/E-comerce"
               />
              <ProjectCard
                image={ExamGate}
                title="Exam Gate"
                description="Exam Automated an Offers Application Web Responsive"
                githubLink="https://github.com/hossam101999/exam_.git"
              />
              <ProjectCard
                image={menha}
                title="Full E-commerce"
                description="So In this project, my team and I developed the Menha platform, a website designed to showcase scholarships, helping users easily find opportunities that suit their qualifications and preferences."
                livePreviewLink="menha-4lrf.vercel.app"
                githubLink="https://github.com/hossam101999/menha-"
              />
              <ProjectCard
                image={Bondi}
                title="Portfolio Project"
                description="This is an Angular portfolio"
                livePreviewLink="profile-in-angular.vercel.app"
                githubLink="https://github.com/hossam101999/profile_in_angular.git"
              />
              <ProjectCard
                image={Elzeroo}
                title="Blog Page"
                description="Exam blog page Web Responsive by React"
                githubLink="https://github.com/hossam101999/reactblog"
              />
            </div>
          </div>
        </section>

        <section className="py-10 animate-fadeInUp" id="technologies">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Technologies</h2>
            <div className="mt-14">
              {TECH_SKILLS.map((skill) => (
                <div key={skill.name} className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold animate-fadeInLeft">
                      <i
                        className={`fa-brands ${skill.icon} me-3 text-[#2965f1] text-2xl`}
                      ></i>
                      {skill.name}
                    </h2>
                    <p className="text-gray-500 animate-fadeInRight">
                      {skill.percentage}%
                    </p>
                  </div>
                  <span className="w-[85%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md animate-expandWidth" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="animate-fadeInUp">
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              Additional Technologies and Skills
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              {ADDITIONAL_SKILLS.map((skill) => (
                <div key={skill}>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5 animate-fadeInLeft">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <EmailForm />
      </main>

      <footer>
        <div className="container m-auto flex justify-evenly px-4 py-6 align-middle animate-fadeInUp">
          <div>
            <p className="text-gray-300 text-sm">Hossam Salah</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a
                  href="https://www.linkedin.com/in/hossam-salah-1ab717238/"
                  className="icon-linkedin text-3xl"
                >
                  <i className="fa-brands fa-linkedin me-0 sm:me-5"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hossam101999"
                  className="icon-github text-3xl"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {scrolling && (
        <button
          className="fixed block right-[-20px] sm:right-8 bottom-0 w-24 animate-bounceInUp"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={ArrowDown} />
        </button>
      )}
    </div>
  );
}

const ProjectCard = ({
  image,
  title,
  description,
  livePreviewLink,
  githubLink,
}) => {
  return (
    <div className="border border-gray-500 rounded-md p-5 flex-1 animate-fadeInUp">
      <img src={image} className="w-full h-[30vh] object-cover" />
      <h3 className="text-2xl font-semibold mt-8">{title}</h3>
      <p className="text-gray-400 text-sm mt-2">
        <i>{description}</i>
      </p>
      <div className="flex justify-between gap-2 mt-12 items-end">
        {livePreviewLink && (
          <a href={livePreviewLink} className="w-1/2" target="_blank">
            <button className="w-full text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 text-white animate-bounceInUp">
              Live preview
            </button>
          </a>
        )}
        {githubLink && (
          <a href={githubLink} className="w-1/2" target="_blank">
            <button className="w-full text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500 animate-bounceInUp">
              Checkout GitHub
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default App;