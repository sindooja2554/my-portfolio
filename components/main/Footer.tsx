import React from "react";
import {
  RxGithubLogo,
} from "react-icons/rx";

import { FaYoutube, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] relative z-[30]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          
          {/* Community Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <a 
              href="https://github.com/sindooja2554" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-cyan-400 transition"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">GitHub</span>    
            </a>
            <a 
              href="https://medium.com/@sindoojagajam2023" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-cyan-400 transition"
            >
              <FaMedium />
              <span className="text-[15px] ml-[6px]">Medium</span>    
            </a>
          </div>

          {/* Social Media Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>

            <a 
              href="https://www.linkedin.com/in/sindooja-gajam-595660146" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-blue-600 transition"
            >
              <FaLinkedin />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>    
            </a>

            <a 
              href="https://www.instagram.com/sindooja_gajam?igsh=cWZ0N2piZ3Ixd3o3&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-pink-400 transition"
            >
              <FaInstagram />
              <span className="text-[15px] ml-[6px]">Instagram</span>    
            </a>
          </div>

          {/* About Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <a 
              href="/Sindooja_resume.pdf" 
              download="Sindooja_resume.pdf"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-cyan-400 transition"
            >
              <span className="text-[15px] ml-[6px]">Learn about me</span>    
            </a>
            <a 
            href="mailto:sindoojagajam2023@gmail.com?subject=Hello%20Sindooja&body=I%20wanted%20to%20reach%20out%20regarding..." 
            className="flex flex-row items-center my-[15px] cursor-pointer hover:text-cyan-400 transition"
            >
                <span className="text-[15px] ml-[6px]">sindoojagajam2023@gmail.com</span>    
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
