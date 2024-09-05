import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";

const projects = [
  {
    title: "SparkSwap",
    description:
      "SparkSwap is your to-go Decentralized Finance platform. Your one-stop access DeFi platform for swapping crypto, bridging, earning rewards through staking, launching new projects, and managing your NFT collection.",
    image: `${process.env.PUBLIC_URL}/SparkSwap.png`,
    link: "https://sparkswap.finance/#/",
  },
  {
    title: "MetaGaming Guild",
    description:
      "MetaGaming Guild is a unified DAO-based ecosystem of Gaming Guild, INO/IGO Launchpad, GameFi Vaults, Game Yield Farming and Play-to-Earn Game aimed at democratizing game finance.",
    image: `${process.env.PUBLIC_URL}/mgg.png`,
    link: "https://www.metagg.com/#/",
  },
  {
    title: "Filipino Web3",
    description:
      "Filipino Web3 is an organization with the aim of helping our fellow Filipinos hone their skills and maximize their potential to grow in the Web3 space.",
    image: `${process.env.PUBLIC_URL}/fwcb.png`,
    link: "https://filipinoweb3.org/",
  },
  {
    title: "Zabbix Website",
    description:
      "Official website for TechnoPro Engineering (Shinagawa Branch Office) that showcase their partner product ZABBIX.",
    image: `${process.env.PUBLIC_URL}/zabbix.png`,
    link: "https://www.technopro.com/eng/service/zabbix/",
  },
  {
    title: "Secure Face/D2 Website",
    description:
      "Official website for TechnoPro Engineering (Shinagawa Branch Office) that showcase their partner product 顔認証 (Face Recognition Device).",
    image: `${process.env.PUBLIC_URL}/kao.jpg`,
    link: "https://www.technopro.com/eng/service/secureface/",
  },
  {
    title: "MetaSaga Warriors",
    description:
      "MetaSaga Warriors is a roguelike dungeon crawler FREE-TO-OWN NFT game where you command a party of warriors on a mission to stop the corruption that encroached upon their paradise.",
    image: `${process.env.PUBLIC_URL}/msw.png`,
    link: "https://metasagawarriors.com/",
  },

  // Add more projects here
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Discover my Featured Projects</h1>
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
