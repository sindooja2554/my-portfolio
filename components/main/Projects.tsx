// 'use client'; 
import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/criticsworld.gif"
          title="Criticsworld"
          description="Interactice Review Platform for movie enthusiasts to post reviews, rate films, and engage with a community. It offers advanced search features and fosters discussions through review comments."
          // projectUrl="https://critics-world-frontend.vercel.app/signin"     
        />
        <ProjectCard
          src="/Fundoo.gif"
          title="Fundoo"
          description="Fundoo is a note-taking application that serves as a clone of Google Keep, allowing users to create, edit, organize, and manage notes. It supports features like color-coded notes, reminders, labels, and easy drag-and-drop functionality for efficient organization."
          // projectUrl="https://fundoo-react.vercel.app/"
        />
        {/* <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        /> */}
      </div>
    </div>
  );
};

export default Projects;
