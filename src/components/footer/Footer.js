import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaEnvelope, FaMobileAlt } from "react-icons/fa";
import { logo } from "../../assets/index";

const Footer = () => {
  return (
    <div className="w-full py-20 text-gray-600">
      <div className="mx-auto max-w-screen-lg grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8 justify-end">
        <div className="flex flex-col items-center gap-8">
          <img className="w-32" src={logo} alt="logo" />
          <div className="flex gap-4">
            <a href="https://www.facebook.com">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/madhuri-p-084a08146?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
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

export default Footer;
