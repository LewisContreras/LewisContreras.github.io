import { Box, HStack, Icon, Link, Text } from "@chakra-ui/react";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FeaturedProjects } from "./FeaturedProjects";
import { useLanguage } from "../../hooks/useLanguage";
import { DiagonalSectionDivider } from "../common/DiagonalSectionDivider";

const Projects = () => {
  const { t } = useLanguage();
  return (
    <Box
      id="projects"
      py="90px"
      bgColor="secondary"
      maxWidth="100vw"
      position="relative"
      px="5%"
    >
      <DiagonalSectionDivider color="primary" />
      <Text pb="30px" color="primary" fontSize="3xl" fontWeight="600">
        {t.projects.title}
      </Text>
      <Text color="primary" fontSize="26px" fontWeight="600">
        {t.projects.description}
      </Text>
      <FeaturedProjects />
      <Link
        display={["inline-block", "block"]}
        _hover={{ textDecoration: "none" }}
        _focus={{ outline: "none" }}
        mt="30px"
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
          boxShadow="2xl"
        >
          <Text>{t.projects.moreProjects}</Text>
          <Icon as={FaArrowRight} />
        </HStack>
      </Link>
    </Box>
  );
};

export default Projects;
