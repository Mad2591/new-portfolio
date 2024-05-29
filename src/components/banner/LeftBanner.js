import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaEnvelope, FaMobileAlt } from "react-icons/fa";
import { SiFigma, SiJavascript } from "react-icons/si";
import pdf from './Madhuri.pdf';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer.", "UI/UX Designer.", "Creative Thinker."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Madhuri Patil</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I design user-friendly web interfaces using modern frontend technologies, focusing on exceptional user experiences with clean, efficient code.
        </p>
      </div>
      <div>
        <a href={pdf} download>
        <button className="bg-[#ff014f] hover:bg-[#e00044] text-white font-bold py-2 px-4 rounded">
            Download CV
          </button>
        </a>
      </div>
      <div className="flex flex-col gap-6 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <a href="https://www.figma.com/">
              <span className="bannerIcon">
                <SiFigma />
              </span>
            </a>
            <a href="https://reactjs.org/">
              <span className="bannerIcon">
                <FaReact />
              </span>
            </a>
            <a href="https://www.javascript.com/">
              <span className="bannerIcon">
                <SiJavascript />
              </span>
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
              <span className="bannerIcon">
                <FaHtml5 />
              </span>
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
              <span className="bannerIcon">
                <FaCss3Alt />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/Mad2591">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="mailto:madhuripatil2591@gmail.com">
              <span className="bannerIcon">
                <FaEnvelope />
              </span>
            </a>
            <a href="tel:+917507085690">
              <span className="bannerIcon">
                <FaMobileAlt />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner;
