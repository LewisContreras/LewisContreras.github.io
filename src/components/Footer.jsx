import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { SocialMediaLinks } from "./SocialMediaLinks";

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
      gap="8px"
    >
      <Text as="p" textAlign="center" color="terciary" fontWeight="600">
        Hecho con cariño por Lewis, Copyright 2021 - Todos los derechos
        reservados
      </Text>
      <SocialMediaLinks />
    </Flex>
  );
};

export default Footer;
