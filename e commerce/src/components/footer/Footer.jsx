import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex justify-around items-center px-3 flex-wrap gap-4 min-h-14 bg-gray-900 text-white py-3">
      <img src="/logo.png" alt="" className="h-10" />
      <p className="text-sm ">Copyright © 2024 indicart.vercel.app</p>
      <div className="flex gap-2">
        <a href="https://www.linkedin.com/in/code-with-vikash/" target="_blank">
          <FaLinkedin size="1.5rem" className="hover:scale-[0.9]" />
        </a>
        <a href="https://github.com/CodeWith-Vikash" target="_blank">
          <FaGithub size="1.5rem" className="hover:scale-[0.9]" />
        </a>
        <a href="https://x.com/codeWithVikash" target="_blank">
          <FaSquareXTwitter size="1.5rem" className="hover:scale-[0.9]" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
