import { Center, Flex, Img, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Welcome = () => {
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
          maxW={["80%", "80%", "30%"]}
          maxH={["35vh", "35vh", "60vh"]}
          alt="Photo of Lewis Contreras, a software developer"
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
            ¡Hola, bienvenido, soy Lewis Contreras!
          </Text>
          <Text py="10px" color="secondary" fontWeight="600" fontSize="3xl">
            Software Developer
          </Text>
          <Text color="terciary" fontSize="xl">
            Un desarrollador en constante aprendizaje y seguimiento de las
            nuevas tecnologías.
          </Text>
        </VStack>
      </Flex>
    </Center>
  );
};

export default Welcome;