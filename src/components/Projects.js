import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";

const projects = [
  {
    title: "Pitaka",
    description:
      "Pitaka is a user-friendly app for managing fiat and crypto assets securely, offering competitive fees and unmatched reliability as the first DeFi platform of its kind. I worked as a QA Engineer for this project.",
    image: `${process.env.PUBLIC_URL}/pitaka.png`,
    link: "https://www.pitaka.io/",
  },
  {
    title: "JEG & Sons Website",
    description:
      "A sleek, responsive web interface to showcase the company's brand, services, and products. Features a Modern design, smooth animations, and intuitive navigation for an engaging, seamless browsing experience. I worked as a Software Developer for this project.",
    image: `${process.env.PUBLIC_URL}/jeg.png`,
    link: "https://jegandsons.github.io/jegandsons-website/",
  },
  {
    title: "Valentine Invitation Card",
    description:
      "A beautifully designed digital or printed card that invites loved ones to a special Valentine’s celebration. It features elegant visuals, heartfelt messages, and essential event details to create a warm and romantic experience. I worked as a Software Developer for this project.",
    image: `${process.env.PUBLIC_URL}/valentine.png`,
    link: "https://swengr-janan.github.io/valentines-invitation/",
  },
  {
    title: "SparkSwap",
    description:
      "SparkSwap is your to-go Decentralized Finance platform. Your one-stop access DeFi platform for swapping crypto, bridging, earning rewards through staking, launching new projects, and managing your NFT collection. I worked as a QA Engineer for this project.",
    image: `${process.env.PUBLIC_URL}/SparkSwap.png`,
    link: "https://sparkswap.finance/#/",
  },
  {
    title: "MetaGaming Guild",
    description:
      "MetaGaming Guild is a unified DAO-based ecosystem of Gaming Guild, INO/IGO Launchpad, GameFi Vaults, Game Yield Farming and Play-to-Earn Game aimed at democratizing game finance. I worked as a QA Engineer for this project.",
    image: `${process.env.PUBLIC_URL}/mgg.png`,
    link: "https://www.metagg.com/#/",
  },
  {
    title: "Filipino Web3",
    description:
      "Filipino Web3 is an organization with the aim of helping our fellow Filipinos hone their skills and maximize their potential to grow in the Web3 space. I worked as a Software Developer for this project.",
    image: `${process.env.PUBLIC_URL}/fwcb.png`,
    link: "https://filipinoweb3.org/",
  },
  {
    title: "Zabbix Website",
    description:
      "Official website for TechnoPro Engineering (Shinagawa Branch Office) that showcase their partner product ZABBIX. I worked as a Software Developer for this project.",
    image: `${process.env.PUBLIC_URL}/zabbix.png`,
    link: "https://www.technopro.com/eng/service/zabbix/",
  },
  {
    title: "Secure Face/D2 Website",
    description:
      "Official website for TechnoPro Engineering (Shinagawa Branch Office) that showcase their partner product 顔認証 (Face Recognition Device). I worked as a Software Developer for this project.",
    image: `${process.env.PUBLIC_URL}/kao.jpg`,
    link: "https://www.technopro.com/eng/service/secureface/",
  },
  {
    title: "MetaSaga Warriors",
    description:
      "MetaSaga Warriors is a roguelike dungeon crawler FREE-TO-OWN NFT game where you command a party of warriors on a mission to stop the corruption that encroached upon their paradise. I worked as a Team Lead/QA Engineer for this project.",
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
