import { Box, GridItem, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { LinkButton } from "../common/LinkButton";
import { useLanguage } from "../../hooks/useLanguage";

const ProjectCard = ({ project, index }) => {
  const { t } = useLanguage();
  return (
    <GridItem
      className="fade-in"
      colSpan={index === 0 ? ["1", "2"] : "1"}
      borderRadius="4px"
      bgImage={[`url('${project.imageWeb}')`, `url('${project.imageMobile}')`]}
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
        height={index === 0 ? ["30%"] : ["30%", "50%"]}
      >
        <Text fontWeight="600" fontSize={["3xl", "xl", "2xl"]} color="terciary">
          {t.projects[project.title].title}
        </Text>
        <Text fontSize={["xl", "16px"]} color="terciary">
          {t.projects[project.title].description}
        </Text>
        <HStack
          px="10px"
          position="absolute"
          bottom="10px"
          right="0"
          left="0"
          justifyContent="space-between"
        >
          <LinkButton
            text={t.projects.repositoryText}
            href={project.repository}
            width="45%"
          />
          <LinkButton
            text={t.projects.deployText}
            href={project.deploy}
            width="45%"
          />
        </HStack>
      </Box>
    </GridItem>
  );
};

export { ProjectCard };
