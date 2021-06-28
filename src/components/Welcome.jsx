import { Center, Flex, Img, Text } from '@chakra-ui/react'
import React from 'react'

const Welcome = () => {
    return (
        <Center pt="100px" bgColor="primary" h="100vh" w="100vw" >
            <Flex alignItems="center" textAlign="center" maxW="90%" flexDirection="column" >
                <Img maxW="80%" maxH="35vh" borderRadius="20px" src="https://i.imgur.com/92Ht5DC.jpeg" />
                <Text pt="20px" fontWeight="600" color="terciary" fontSize="3xl" >¡Hola, bienvenido, soy Lewis Contreras!</Text>
                <Text py="10px" color="secondary" fontWeight="600" fontSize="3xl" >Front-End Developer</Text>
                <Text color="terciary" fontSize="xl" >Un desarrollador en constante aprendizaje y seguimiento de las nuevas tecnologías.
                </Text>
            </Flex>
            

        </Center>
    )
}

export default Welcome
