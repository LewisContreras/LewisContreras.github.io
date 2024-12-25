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
        <GridItem
          colSpan={["1", "2"]}
          borderRadius="4px"
          bgImage={[
            "url('https://i.imgur.com/rwfsmdJ.png')",
            "url('https://i.imgur.com/jvChYsG.png')",
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
            w={["95%", "50%"]}
            height="40%"
          >
            <Text fontWeight="600" fontSize="3xl" color="terciary">
              Blockmaster
            </Text>
            <Text fontSize={["xl", "xl", "xl", "2xl"]} color="terciary">
              {" "}
              Revive una tienda icónica para rentar películas.
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
                href="https://github.com/LewisContreras/blockmaster-movies"
                _hover={{ textDecoration: "none" }}
                _focus={{ outline: "none" }}
                isExternal
              >
                <Button
                  width="100%"
                  colorScheme="teal"
                  _focus={{ outline: "none" }}
                >
                  Repositorio
                </Button>
              </Link>
              <Link
                width="45%"
                href="https://lewiscontreras.github.io/blockmaster-movies/"
                _hover={{ textDecoration: "none" }}
                _focus={{ outline: "none" }}
                isExternal
              >
                <Button
                  width="100%"
                  colorScheme="teal"
                  _focus={{ outline: "none" }}
                >
                  Despliegue
                </Button>
              </Link>
            </HStack>
          </Box>
        </GridItem>
        <GridItem
          borderRadius="4px"
          bgImage={[
            "url('https://i.imgur.com/nx7EOsb.png')",
            "url('https://i.imgur.com/cqnEQS8.png')",
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
            w={["95%", "90%", "70%"]}
            height={["40%", "50%"]}
          >
            <Text
              fontWeight="600"
              fontSize={["3xl", "xl", "2xl"]}
              color="terciary"
            >
              App de adopción
            </Text>
            <Text fontSize={["xl", "16px"]} color="terciary">
              {" "}
              Aplicación en la que podrás publicar y adoptar mascotas.
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
                href="https://github.com/LewisContreras/adoptionApp"
                _hover={{ textDecoration: "none" }}
                _focus={{ outline: "none" }}
                isExternal
              >
                <Button
                  width="100%"
                  colorScheme="teal"
                  _focus={{ outline: "none" }}
                >
                  Repositorio
                </Button>
              </Link>
              <Link
                width="45%"
                href="https://lewiscontreras.github.io/adoptionApp/"
                _hover={{ textDecoration: "none" }}
                _focus={{ outline: "none" }}
                isExternal
              >
                <Button
                  width="100%"
                  colorScheme="teal"
                  _focus={{ outline: "none" }}
                >
                  Despliegue
                </Button>
              </Link>
            </HStack>
          </Box>
        </GridItem>
        <GridItem
          borderRadius="4px"
          bgImage={[
            "url('https://i.imgur.com/lT1gWYh.png')",
            "url('https://i.imgur.com/5dFQyjJ.png')",
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
            w={["95%", "90%", "70%"]}
            height={["40%", "50%"]}
          >
            <Text fontWeight="600" fontSize={["3xl", "2xl"]} color="terciary">
              Documentación
            </Text>
            <Text fontSize={["xl", "16px"]} color="terciary">
              Documentación técnica de conceptos básicos de programación.
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
                href="https://github.com/LewisContreras/technicalDocumentationPage"
                _hover={{ textDecoration: "none" }}
                _focus={{ outline: "none" }}
                isExternal
              >
                <Button
                  width="100%"
                  colorScheme="teal"
                  _focus={{ outline: "none" }}
                >
                  Repositorio
                </Button>
              </Link>
              <Link
                width="45%"
                _hover={{ textDecoration: "none" }}
                _focus={{ outline: "none" }}
                href="https://lewiscontreras.github.io/technicalDocumentationPage/"
                isExternal
              >
                <Button
                  width="100%"
                  colorScheme="teal"
                  _focus={{ outline: "none" }}
                >
                  Despliegue
                </Button>
              </Link>
            </HStack>
          </Box>
        </GridItem>
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
