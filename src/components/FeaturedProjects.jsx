import React from "react";
import { ProjectCard } from "./ProjectCard";

const PROJECTS_INFO = [
  {
    id: 1,
    title: "Blockmaster",
    description: "Revive una tienda icónica para rentar películas.",
    imageWeb: "https://i.imgur.com/rwfsmdJ.png",
    imageMobile: "https://i.imgur.com/jvChYsG.png",
    repository: "https://github.com/LewisContreras/blockmaster-movies",
    deploy: "https://lewiscontreras.github.io/blockmaster-movies/",
  },
  {
    id: 2,
    title: "Adoption App",
    description: "Aplicación en la que podrás publicar y adoptar mascotas.",
    imageWeb: "https://i.imgur.com/nx7EOsb.png",
    imageMobile: "https://i.imgur.com/cqnEQS8.png",
    repository: "https://github.com/LewisContreras/adoptionApp",
    deploy: "https://lewiscontreras.github.io/adoptionApp/",
  },
  {
    id: 3,
    title: "Documentation App",
    description: "Documentación técnica de conceptos básicos de programación.",
    imageWeb: "https://i.imgur.com/lT1gWYh.png",
    imageMobile: "https://i.imgur.com/5dFQyjJ.png",
    repository: "https://github.com/LewisContreras/technicalDocumentationPage",
    deploy: "https://lewiscontreras.github.io/technicalDocumentationPage/",
  },
];

const FeaturedProjects = () => {
  return (
    <>
      {PROJECTS_INFO.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </>
  );
};

export { FeaturedProjects };
