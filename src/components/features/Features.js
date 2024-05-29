import React from 'react';
import { AiFillAppstore } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="text-center">
        <Title
          title="What I Do."
          des="Features"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <a href="http://auronchiess.netlify.app/">
          <Card
            title="E-commerce Website Development"
            des="Developing feature-rich and user-friendly e-commerce websites."
            icon={<AiFillAppstore />}
          />
        </a>
        <a href="https://master--madhuri-patil-portfolio.netlify.app/">
          <Card
            title="Personal Portfolio Website"
            des="Creating interactive and visually appealing portfolios."
            icon={<SiAntdesign />}
          />
        </a>
        <a href="https://main--firstcryclonewebsite.netlify.app/">
          <Card
            title="Clone Website Development"
            des="Cloning complex websites to enhance skills."
            icon={<FaGlobe />}
          />
        </a>
        <a href="https://main--blogssample.netlify.app/">
          <Card
            title="Blog Website Development"
            des="Developing dynamic and responsive blog websites."
            icon={<SiProgress />}
          />
        </a>
        <a href="https://www.figma.com/proto/h5BVSkISX0tqOzJIW8szo6/GoCart-New?node-id=8-241&starting-point-node-id=1%3A4&t=VyyxA2CDbmbaBmSD-1">
          <Card
            title="UX Design"
            des="Designing user-centric and aesthetic interfaces."
            icon={<SiAntdesign />}
          />
        </a>
      </div>
    </section>
  );
}

export default Features;
