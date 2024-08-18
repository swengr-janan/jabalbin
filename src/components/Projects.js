import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";

const projects = [
  {
    title: "Project One",
    description: "Description for project one.",
    image: "./sample-work.jpg",
    link: "https://example.com/project-one",
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    image: "./sample-work.jpg",
    link: "https://example.com/project-two",
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    image: "./sample-work.jpg",
    link: "https://example.com/project-two",
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    image: "./sample-work.jpg",
    link: "https://example.com/project-two",
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    image: "./sample-work.jpg",
    link: "https://example.com/project-two",
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    image: "./sample-work.jpg",
    link: "https://example.com/project-two",
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    image: "./sample-work.jpg",
    link: "https://example.com/project-two",
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    image: "./sample-work.jpg",
    link: "https://example.com/project-two",
  },

  // Add more projects here
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
