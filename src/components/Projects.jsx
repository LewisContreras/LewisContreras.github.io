import { Box, Button, Grid, GridItem, HStack, Icon, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import ScrollReveal from "scrollreveal"

const Projects = ({language}) => {

    ScrollReveal().reveal(".first-project",{
        distance: '120%',
        origin: 'bottom',
        opacity: null
    })

    ScrollReveal().reveal(".second-project",{
        distance: '120%',
        origin: 'left',
        opacity: null
    })

    ScrollReveal().reveal(".third-project",{
        distance: '120%',
        origin: 'right',
        opacity: null
    })

    return (
        <Box position="relative" >
            <Box as="section" zIndex="10"  id="projects" py="90px" px="5%" bgColor="secondary" w="100vw" >
            <Text className="scene_element scene_element--fadeinleft" pb="30px" color="primary" fontSize="3xl" fontWeight="600" >{language ? "Proyectos" : "Projects" }</Text>
            <Grid gridTemplateColumns={["1fr","1fr 1fr"]} templateRows={["0.5fr 1fr 600px 600px 600px","1fr 540px 350px"]} gap="40px">
                <GridItem color="primary" fontSize="26px" fontWeight="600" >
                {language ? "Parece magia, funciona con código." : "It seems magic, it works out with code." }
                </GridItem>
                <GridItem color="primary" fontSize="26px" fontWeight="600" >
                {language ? "A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increíbles." : "Along my career as Fronted, I've had the privilege of work in challenging and incredible projects." }
                    
                </GridItem>
                <GridItem className="first-project" transition="1s" _hover={{transform:"scale(1.01)"}} colSpan={["1","2"]} borderRadius="4px" bgImage={["url('https://i.imgur.com/rwfsmdJ.png')","url('https://i.imgur.com/jvChYsG.png')" ]}bgPosition="center" bgRepeat="no-repeat" boxShadow="2xl" bgSize="cover" position="relative" zIndex="0" >
                    <Box boxShadow="2xl" borderRadius="8px" position="absolute" p="10px" bottom="30px" left="-10px" bgColor="primary" w={["95%","50%"]} height="40%" >
                        <Text  fontWeight="600" fontSize="3xl" color="terciary" >Blockmaster</Text>
                        <Text fontSize={["xl","xl","xl","2xl"]} color="terciary" >{language ? "Revive una tienda icónica para rentar películas." : "Relive an iconic shop to rent movies." } </Text>
                        <HStack px="10px" position="absolute" bottom="10px" right="0" left="0" justifyContent="space-between"  >
                            <Link width="45%" href="https://github.com/LewisContreras/blockmaster-movies" _hover={{textDecoration:"none"}} _focus={{outline:"none"}}  isExternal >
                                <Button width="100%"colorScheme="teal" _focus={{outline:"none"}} >{language ? "Repositorio" : "Respository" }</Button>
                            </Link>
                            <Link width="45%" href="https://lewiscontreras.github.io/blockmaster-movies/" _hover={{textDecoration:"none"}} _focus={{outline:"none"}}  isExternal >
                                <Button width="100%"colorScheme="teal" _focus={{outline:"none"}} >{language ? "Despliegue" : "Deploy" }</Button>
                            </Link>
                        </HStack>
                    </Box>
                </GridItem>
                <GridItem className="second-project" transition="1s" _hover={{transform:"scale(1.01)"}}  borderRadius="4px" bgImage={["url('https://i.imgur.com/nx7EOsb.png')","url('https://i.imgur.com/cqnEQS8.png')"]} bgPosition="center" bgRepeat="no-repeat" boxShadow="2xl" bgSize="cover" position="relative" zIndex="0" >
                    <Box boxShadow="2xl" borderRadius="8px" position="absolute" p="10px" bottom="30px" left="-10px" bgColor="primary" w={["95%","90%","70%"]} height={["40%","50%"]} >
                        <Text  fontWeight="600" fontSize={["3xl","xl","2xl" ]}color="terciary" >{language ? "App de adopción" : "Adoption App" }</Text>
                        <Text fontSize={["xl","16px"]} color="terciary" >{language ? "Aplicación en la que podrás publicar y adoptar mascotas." : "App which you can post and adopt pets." } </Text>
                        <HStack px="10px" position="absolute" bottom="10px" right="0" left="0" justifyContent="space-between"  >
                            <Link width="45%" href="https://github.com/LewisContreras/adoptionApp" _hover={{textDecoration:"none"}} _focus={{outline:"none"}}  isExternal >
                                <Button width="100%"colorScheme="teal" _focus={{outline:"none"}} >{language ? "Repositorio" : "Respository" }</Button>
                            </Link>
                            <Link width="45%" href="https://lewiscontreras.github.io/adoptionApp/" _hover={{textDecoration:"none"}} _focus={{outline:"none"}}  isExternal >
                                <Button width="100%"colorScheme="teal" _focus={{outline:"none"}} >{language ? "Despliegue" : "Deploy" }</Button>
                            </Link>
                        </HStack>
                    </Box>
                </GridItem>
                <GridItem className="third-project" transition="1s" _hover={{transform:"scale(1.01)"}}  borderRadius="4px" bgImage={["url('https://i.imgur.com/lT1gWYh.png')","url('https://i.imgur.com/5dFQyjJ.png')"]} bgPosition="center" bgRepeat="no-repeat" boxShadow="2xl" bgSize="cover" position="relative" zIndex="0" >
                    <Box boxShadow="2xl" borderRadius="8px" position="absolute" p="10px" bottom="30px" left="-10px" bgColor="primary" w={["95%","90%","70%"]} height={["40%","50%"]} >
                        <Text  fontWeight="600" fontSize={["3xl","2xl"]} color="terciary" >{language ? "Documentación" : "Documentation" }</Text>
                        <Text fontSize={["xl","16px"]} color="terciary" >{language ? "Documentación técnica de conceptos básicos de programación." : "Technical documentation about basic concepts of programming." }</Text>
                        <HStack px="10px" position="absolute" bottom="10px" right="0" left="0" justifyContent="space-between"  >
                            <Link width="45%" href="https://github.com/LewisContreras/technicalDocumentationPage" _hover={{textDecoration:"none"}} _focus={{outline:"none"}}  isExternal >
                                <Button width="100%"colorScheme="teal" _focus={{outline:"none"}} >{language ? "Repositorio" : "Repository" }</Button>
                            </Link>
                            <Link width="45%" _hover={{textDecoration:"none"}} _focus={{outline:"none"}}  href="https://lewiscontreras.github.io/technicalDocumentationPage/" isExternal >
                                <Button width="100%"colorScheme="teal" _focus={{outline:"none"}} >{language ? "Despliegue" : "Deploy" }</Button>
                            </Link>
                        </HStack>
                    </Box>
                </GridItem>
            </Grid>
            <Link transition="1s" display={["inline-block","block"]} _hover={{textDecoration:"none",transform:"scale(1.01)"}} _focus={{outline:"none"}} mt="20px" w={["100%","300px" ]} mx="auto" href="https://github.com/LewisContreras?tab=repositories" isExternal >
                <HStack  p="6px" w="100%" border="2px solid" borderColor="primary" borderRadius="6px" justifyContent="center" fontWeight="600" fontSize="xl" color="primary" >
                    <Text>{language ? "Ver más proyectos" : "See more projects" }</Text>
                    <Icon as={FaArrowRight} />
                </HStack>
            </Link>
            
            {/* clipPath="polygon(100% 0, 0 0, 100% 100%)"  */}

        </Box>
        <Box position="absolute" bgColor="secondary" left="0" w="100vw"  height="60px" zIndex="2" clipPath="polygon(100% 0, 0 0, 0 100%)"
            >
            </Box>
        </Box>
    )
}

export default Projects
