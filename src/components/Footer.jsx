import { Flex, HStack, Icon, Link, Text } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Flex
      px="5%"
      h="100px"
      maxWidth="100vw"
      bgColor="primary"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text as="p" textAlign="center" color="terciary" fontWeight="600">
        Hecho con cariño por Lewis, Copyright 2021 - Todos los derechos
        reservados
      </Text>
      <HStack spacing={2}>
        <Link
          href="https://github.com/LewisContreras"
          _hover={{ textDecoration: "none" }}
          _focus={{ outline: "none" }}
          isExternal
        >
          <Icon boxSize={5} color="terciary" as={FaGithub}></Icon>
        </Link>
        <Link
          href="https://www.linkedin.com/in/lewis-contreras"
          _hover={{ textDecoration: "none" }}
          _focus={{ outline: "none" }}
          isExternal
        >
          <Icon boxSize={5} color="terciary" as={FaLinkedin}></Icon>
        </Link>
      </HStack>
    </Flex>
  );
};

export default Footer;
