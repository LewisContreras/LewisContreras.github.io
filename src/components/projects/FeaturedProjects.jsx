import React from "react";
import { ProjectCard } from "./ProjectCard";
import { Grid } from "@chakra-ui/react";

const PROJECTS_INFO = [
  {
    id: 1,
    title: "blockmaster",
    imageWeb: "https://i.imgur.com/rwfsmdJ.png",
    imageMobile: "https://i.imgur.com/jvChYsG.png",
    repository: "https://github.com/LewisContreras/blockmaster-movies",
    deploy: "https://lewiscontreras.github.io/blockmaster-movies/",
  },
  {
    id: 2,
    title: "adoptionApp",
    imageWeb: "https://i.imgur.com/nx7EOsb.png",
    imageMobile: "https://i.imgur.com/cqnEQS8.png",
    repository: "https://github.com/LewisContreras/adoptionApp",
    deploy: "https://lewiscontreras.github.io/adoptionApp/",
  },
  {
    id: 3,
    title: "documentationPage",
    imageWeb: "https://i.imgur.com/lT1gWYh.png",
    imageMobile: "https://i.imgur.com/5dFQyjJ.png",
    repository: "https://github.com/LewisContreras/technicalDocumentationPage",
    deploy: "https://lewiscontreras.github.io/technicalDocumentationPage/",
  },
];

const FeaturedProjects = () => {
  return (
    <Grid
      mt="40px"
      maxWidth="100vw"
      gridTemplateColumns={["1fr", "1fr 1fr"]}
      templateRows={["600px 600px 600px", "540px 350px"]}
      gap="40px"
    >
      {PROJECTS_INFO.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </Grid>
  );
};

export { FeaturedProjects };
