import React from 'react';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Madhuri Patil</h3>
        <p className="text-lg font-normal text-gray-400">
          Frontend Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Passionate about creating interactive and user-friendly web applications.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
          <a href="https://www.linkedin.com/">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a href="https://github.com/">
            <span className="bannerIcon">
              <SiGithub />
            </span>
          </a>
          <a href="mailto:example@gmail.com">
            <span className="bannerIcon">
              <SiGmail />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;
