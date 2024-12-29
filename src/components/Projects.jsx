import {
  Box,
  Grid,
  GridItem,
  HStack,
  Icon,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FeaturedProjects } from "./FeaturedProjects";
import { useLanguage } from "../hooks/useLanguage";

const Projects = () => {
  const { t } = useLanguage();
  return (
    <Box id="projects" py="90px" px="5%" bgColor="secondary" maxWidth="100vw">
      <Text pb="30px" color="primary" fontSize="3xl" fontWeight="600">
        {t.projects.title}
      </Text>
      <Grid
        maxWidth="100vw"
        gridTemplateColumns={["1fr", "1fr 1fr"]}
        templateRows={["0.5fr 1fr 600px 600px 600px", "1fr 540px 350px"]}
        gap="40px"
      >
        <GridItem color="primary" fontSize="26px" fontWeight="600">
          {t.projects.description1}
        </GridItem>
        <GridItem color="primary" fontSize="26px" fontWeight="600">
          {t.projects.description2}
        </GridItem>
        <FeaturedProjects />
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
          <Text>{t.projects.moreProjects}</Text>
          <Icon as={FaArrowRight} />
        </HStack>
      </Link>
    </Box>
  );
};

export default Projects;
