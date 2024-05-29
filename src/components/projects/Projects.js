import React from 'react';
import Title from '../layouts/Title';
import ProjectsCard from './ProjectsCard';
import { projectOne, projectTwo, projectThree, projectFour } from "../../assets/index";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Visit my projects and give feedback."
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="E-commerce Website"
          des="Developed an e-commerce website using React.js and Vite."
          src={projectOne}
          githubLink="https://github.com/Mad2591/Auronchies"
          liveLink="http://auronchiess.netlify.app/"
        />
        <ProjectsCard
          title="Personal Portfolio Website"
          des="Created a personal portfolio website using React.js, Tailwind CSS, and Framer Motion to showcase my projects and skills."
          src={projectTwo}
          githubLink="https://github.com/Mad2591/new-portfolio"
          liveLink="https://master--madhuri-patil-portfolio.netlify.app/"
        />
        <ProjectsCard
          title="Clone of FirstCry Website"
          des="Built a clone of the FirstCry website using HTML and CSS."
          src={projectThree}
          githubLink="https://github.com/Mad2591/FirstCry"
          liveLink="https://main--firstcryclonewebsite.netlify.app/"
        />
        <ProjectsCard
          title="Blog Website"
          des="Developed a blog website using React.js."
          src={projectFour}
          githubLink="https://github.com/Mad2591/my-first-app"
          liveLink="https://main--blogssample.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
