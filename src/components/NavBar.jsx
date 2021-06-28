import { Box, Button, Center, HStack, Icon, Link, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import {FaBars} from "react-icons/fa"
import "../styles/animations.css"

const NavBar = () => {
    const [menu, setMenu] = useState(false)
    return (
        <Box boxShadow="base" display="flex" alignItems="center" position="fixed" top="0" w="100vw"  bgColor="primary" zIndex="10" h={["80px","60px"]} >
          <HStack w="90%" mx="auto"  justifyContent="space-between" >
            <Center display={["flex","none"]} onClick={()=>setMenu(!menu)} border="1px solid" borderColor="terciary" borderRadius="4px" p="5px" >
              <Icon color="terciary" fontSize="20px" as={FaBars} />
            </Center>
            <HStack display={["none","flex"]} spacing="30px" >
            <Link _hover={{textDecoration:"none"}} _focus={{outline:"none"}}  href="#welcome" fontWeight="600" textAlign="center" color="terciary" >Bienvenida</Link>
            <Link _hover={{textDecoration:"none"}} _focus={{outline:"none"}} fontWeight="600" href="#projects"  color="terciary" >Proyectos</Link>
            {/* <Link py="4px" width="100%" textAlign="center" borderTop="2px solid" borderColor="terciary" color="terciary" >Technologies</Link> */}
            <Link href="#contact" _hover={{textDecoration:"none"}} _focus={{outline:"none"}} fontWeight="600" color="terciary" >Contacto</Link>
            </HStack>
            <Link href="https://drive.google.com/file/d/11aj2WBsoFrqqSeOlejw53-wF5EhOHNAk/view?usp=sharing"  target="_blank" _hover={{textDecoration:"none"}} _focus={{outline:"none"}}  >
            <Button colorScheme="teal" _focus={{outline:"none"}}  >Ver Curriculum</Button>
            </Link>
          </HStack>
          <VStack className="scene_fast scene_element--clippathdown"  display={!menu ? "none" : "flex"}  bgColor="primary" position="absolute" top="70px" width="100vw" zIndex="10" >
            <Link _hover={{textDecoration:"none"}} _focus={{outline:"none"}}  href="#welcome" py="4px" width="100%" textAlign="center" borderTop="2px solid" borderColor="terciary" color="terciary" >Welcome</Link>
            <Link _hover={{textDecoration:"none"}} _focus={{outline:"none"}}  href="#projects" py="4px" width="100%" textAlign="center" borderTop="2px solid" borderColor="terciary" color="terciary" >Projects</Link>
            {/* <Link py="4px" width="100%" textAlign="center" borderTop="2px solid" borderColor="terciary" color="terciary" >Technologies</Link> */}
            <Link href="#contact" _hover={{textDecoration:"none"}} _focus={{outline:"none"}}  py="4px" pb="10px" width="100%" textAlign="center" borderTop="2px solid" borderColor="terciary" color="terciary" >Contact</Link>
          </VStack>
        </Box>
    )
}

export default NavBar
