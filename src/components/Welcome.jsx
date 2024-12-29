import { Center, Flex, Img, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useLanguage } from "../hooks/useLanguage";

const Welcome = () => {
  const { t } = useLanguage();
  return (
    <Center
      id="welcome"
      pt={["100px", "100px", "20px"]}
      bgColor="primary"
      minH="100vh"
      maxWidth="100vw"
    >
      <Flex
        alignItems="center"
        textAlign="center"
        maxW="90%"
        flexDirection={["column", "column", "row-reverse"]}
        justifyContent="center"
      >
        <Img
          w={["40%", "20%"]}
          alt={t.welcome.altMainPhoto}
          borderRadius="20px"
          ml={["0px", "0px", "50px"]}
          src="/images/personal-photo.webp"
        />
        <VStack maxW={["auto", "auto", "50%", "40%"]}>
          <Text
            pt="20px"
            fontWeight="600"
            color="terciary"
            fontSize={["3xl", "3xl", "4xl"]}
          >
            {t.welcome.presentation}
          </Text>
          <Text py="10px" color="secondary" fontWeight="600" fontSize="3xl">
            {t.welcome.position}
          </Text>
          <Text color="terciary" fontSize="xl">
            {t.welcome.moreAboutMe}
          </Text>
        </VStack>
      </Flex>
    </Center>
  );
};

export default Welcome;
