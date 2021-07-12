import { Box, Center, Flex, Img, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Welcome = ({language}) => {
    return (
        <Box>
        <Center as="section" id="welcome" pt={["100px","100px","20px"]} bgColor="primary" minH="100vh" w="100vw" >
        <Flex alignItems="center" textAlign="center" maxW="90%" flexDirection={["column","column","row-reverse"]} justifyContent="center" >
            <Img 
            // className="scene_element scene_element--clipmidspread" 
            maxW={["80%","80%","30%"]} maxH={["35vh","35vh","60vh"]} borderRadius="20px" ml={["0px","0px","50px"]} src="https://i.imgur.com/92Ht5DC.jpeg" />
            <VStack
            //  className="scene_element scene_element--fadein" 
              maxW={["auto","auto","50%","40%"]} >
            <Text pt="20px" fontWeight="600" color="terciary" fontSize={["3xl","3xl", "4xl"]} >{language ? "¡Hola, bienvenido, soy Lewis Contreras!" : "¡Hello, welcome, I'm Lewis Contreras!" }</Text>
            <Text py="10px" color="secondary" fontWeight="600" fontSize="3xl" >{language ? "Desarrollador Front-End" : "Front-End Developer" }</Text>
            <Text color="terciary" fontSize="xl" >{language ? "Un desarrollador en constante aprendizaje y seguimiento de las nuevas tecnologías." : "A developer in constantly learning and following of the new technologies" }
            </Text>
            </VStack>
        </Flex>
        

    </Center>
    
    <Box position="absolute" bgColor="primary" left="0" w="100vw"  height="60px" zIndex="2" clipPath="polygon(100% 0, 0 0, 0 100%)"
        >
    </Box>
        </Box>
    )
}

export default Welcome
