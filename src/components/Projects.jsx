import { Box, Button, Grid, GridItem, HStack, Icon, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Projects = () => {
    return (
        <Box py="20px" px="5%" bgColor="secondary" w="100vw" >
            <Text pb="20px" color="primary" fontSize="3xl" fontWeight="600" >Proyectos</Text>
            <Grid gridTemplateColumns="1fr" templateRows="0.5fr 1fr 3fr 3fr 3fr" gap="20px">
                <GridItem color="gray.300" fontSize="26px" fontWeight="600" >
                    Parece magia, funciona con código.
                </GridItem>
                <GridItem color="terciary" fontSize="26px" fontWeight="600" >
                    A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increíbles.
                </GridItem>
                <GridItem borderRadius="4px" bgImage="url('https://i.imgur.com/rwfsmdJ.png')" bgPosition="center" bgRepeat="no-repeat" boxShadow="2xl" bgSize="cover" position="relative" zIndex="0" >
                    <Box boxShadow="2xl" borderRadius="8px" position="absolute" p="10px" bottom="30px" left="-10px" bgColor="primary" w="90%" height="40%" >
                        <Text  fontWeight="600" fontSize="3xl" color="terciary" >Blockmaster</Text>
                        <Text fontSize="xl" color="terciary" > Revive una tienda icónica para rentar películas, regresa con una nueva plataforma de streaming.</Text>
                        <HStack px="10px" position="absolute" bottom="10px" right="0" left="0" justifyContent="space-between"  >
                            <Link width="45%" href="https://github.com/LewisContreras/blockmaster-movies" isExternal >
                                <Button width="100%"colorScheme="teal" >Repositorio</Button>
                            </Link>
                            <Link width="45%" href="https://lewiscontreras.github.io/blockmaster-movies/" isExternal >
                                <Button width="100%"colorScheme="teal" >Despliegue</Button>
                            </Link>
                        </HStack>
                    </Box>
                </GridItem>
                <GridItem borderRadius="4px" bgImage="url('https://i.imgur.com/nx7EOsb.png')" bgPosition="center" bgRepeat="no-repeat" boxShadow="2xl" bgSize="cover" position="relative" zIndex="0" >
                    <Box boxShadow="2xl" borderRadius="8px" position="absolute" p="10px" bottom="30px" left="-10px" bgColor="primary" w="90%" height="40%" >
                        <Text  fontWeight="600" fontSize="3xl" color="terciary" >App de adopción</Text>
                        <Text fontSize="xl" color="terciary" > Aplicación en la que podrás publicar y adoptar mascotas.</Text>
                        <HStack px="10px" position="absolute" bottom="10px" right="0" left="0" justifyContent="space-between"  >
                            <Link width="45%" href="https://github.com/LewisContreras/adoptionApp" isExternal >
                                <Button width="100%"colorScheme="teal" >Repositorio</Button>
                            </Link>
                            <Link width="45%" href="https://lewiscontreras.github.io/adoptionApp/" isExternal >
                                <Button width="100%"colorScheme="teal" >Despliegue</Button>
                            </Link>
                        </HStack>
                    </Box>
                </GridItem>
                <GridItem borderRadius="4px" bgImage="url('https://i.imgur.com/lT1gWYh.png')" bgPosition="center" bgRepeat="no-repeat" boxShadow="2xl" bgSize="cover" position="relative" zIndex="0" >
                    <Box boxShadow="2xl" borderRadius="8px" position="absolute" p="10px" bottom="30px" left="-10px" bgColor="primary" w="90%" height="40%" >
                        <Text  fontWeight="600" fontSize="3xl" color="terciary" >Documentación</Text>
                        <Text fontSize="xl" color="terciary" >Página de documentación técnica donde podrás encontrar algunos conceptos básicos de programación en Javascript.</Text>
                        <HStack px="10px" position="absolute" bottom="10px" right="0" left="0" justifyContent="space-between"  >
                            <Link width="45%" href="https://github.com/LewisContreras/technicalDocumentationPage" isExternal >
                                <Button width="100%"colorScheme="teal" >Repositorio</Button>
                            </Link>
                            <Link width="45%" href="https://lewiscontreras.github.io/technicalDocumentationPage/" isExternal >
                                <Button width="100%"colorScheme="teal" >Despliegue</Button>
                            </Link>
                        </HStack>
                    </Box>
                </GridItem>
            </Grid>
            <Link display="inline-block" mt="20px" w="100%" href="https://github.com/LewisContreras?tab=repositories" isExternal >
                <HStack  p="6px" w="100%" border="2px solid" borderColor="primary" borderRadius="6px" justifyContent="center" fontWeight="600" fontSize="xl" color="primary" >
                    <Text>Ver más proyectos</Text>
                    <Icon as={FaArrowRight} />
                </HStack>
            </Link>
        </Box>
    )
}

export default Projects
