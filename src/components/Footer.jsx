import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { SocialMediaLinks } from "./SocialMediaLinks";
import { useLanguage } from "../hooks/useLanguage";

const Footer = () => {

  const { t } = useLanguage();
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
        {t.footer.copyright}
      </Text>
      <SocialMediaLinks />
    </Flex>
  );
};

export default Footer;
