import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Icon,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const projectsInfo = [
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

const Projects = () => {
  return (
    <Box id="projects" py="90px" px="5%" bgColor="secondary" maxWidth="100vw">
      <Text pb="30px" color="primary" fontSize="3xl" fontWeight="600">
        Proyectos
      </Text>
      <Grid
        maxWidth="100vw"
        gridTemplateColumns={["1fr", "1fr 1fr"]}
        templateRows={["0.5fr 1fr 600px 600px 600px", "1fr 540px 350px"]}
        gap="40px"
      >
        <GridItem color="primary" fontSize="26px" fontWeight="600">
          Parece magia, funciona con código.
        </GridItem>
        <GridItem color="primary" fontSize="26px" fontWeight="600">
          A lo largo de mi carrera como Frontend, he tenido el privilegio de
          trabajar en proyectos retadores e increíbles.
        </GridItem>
        {projectsInfo.map((project, index) => (
          <GridItem
            colSpan={index === 0 ? ["1", "2"] : "1"}
            borderRadius="4px"
            bgImage={[
              `url('${project.imageWeb}')`,
              `url('${project.imageMobile}')`,
            ]}
            bgPosition="center"
            bgRepeat="no-repeat"
            boxShadow="2xl"
            bgSize="cover"
            position="relative"
            zIndex="0"
          >
            <Box
              boxShadow="2xl"
              borderRadius="8px"
              position="absolute"
              p="10px"
              bottom="30px"
              left="-10px"
              bgColor="primary"
              w={index === 0 ? ["95%", "50%", "35%"] : ["95%", "90%", "75%"]}
              height={index === 0 ? ["40%", "30%"] : ["40%", "50%"]}
            >
              <Text
                fontWeight="600"
                fontSize={["3xl", "xl", "2xl"]}
                color="terciary"
              >
                {project.title}
              </Text>
              <Text fontSize={["xl", "16px"]} color="terciary">
                {project.description}
              </Text>
              <HStack
                px="10px"
                position="absolute"
                bottom="10px"
                right="0"
                left="0"
                justifyContent="space-between"
              >
                <Link
                  width="45%"
                  href={project.repository}
                  _hover={{ textDecoration: "none" }}
                  _focus={{ outline: "none" }}
                  isExternal
                >
                  <Button
                    width="100%"
                    colorScheme="teal"
                    _focus={{ outline: "none" }}
                    color="primary"
                  >
                    Repositorio
                  </Button>
                </Link>
                <Link
                  width="45%"
                  href={project.deploy}
                  _hover={{ textDecoration: "none" }}
                  _focus={{ outline: "none" }}
                  isExternal
                >
                  <Button
                    width="100%"
                    colorScheme="teal"
                    _focus={{ outline: "none" }}
                    color="primary"
                  >
                    Despliegue
                  </Button>
                </Link>
              </HStack>
            </Box>
          </GridItem>
        ))}
      </Grid>
      <Link
        display={["inline-block", "block"]}
        _hover={{ textDecoration: "none" }}
        _focus={{ outline: "none" }}
        mt="20px"
        w={["100%", "300px"]}
        mx="auto"
        href="https://github.com/LewisContreras?tab=repositories"
        isExternal
      >
        <HStack
          p="6px"
          w="100%"
          border="2px solid"
          borderColor="primary"
          borderRadius="6px"
          justifyContent="center"
          fontWeight="600"
          fontSize="xl"
          color="primary"
        >
          <Text>Ver más proyectos</Text>
          <Icon as={FaArrowRight} />
        </HStack>
      </Link>
    </Box>
  );
};

export default Projects;
