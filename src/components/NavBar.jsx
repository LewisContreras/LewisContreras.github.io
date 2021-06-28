import { Box, Button, Center, HStack, Icon, Link, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import {FaBars} from "react-icons/fa"
import "../styles/animations.css"

const NavBar = () => {
    const [menu, setMenu] = useState(false)
    return (
        <Box boxShadow="base" display="flex" alignItems="center" position="fixed" top="0" w="100vw"  bgColor="primary" zIndex="10" h="80px" >
          <HStack w="90%" mx="auto" justifyContent="space-between" >
            <Center onClick={()=>setMenu(!menu)} border="1px solid" borderColor="terciary" borderRadius="4px" p="5px" >
              <Icon color="terciary" fontSize="20px" as={FaBars} />
            </Center>
            <Link href="../files/CV-LewisContreras.pdf" download="CV-LewisContreras.pdf" >
            <Button colorScheme="teal"  >Descargar Curriculum</Button>
            </Link>
          </HStack>
          <VStack className="scene_fast scene_element--clippathdown"  display={!menu ? "none" : "flex"}  bgColor="primary" position="absolute" top="70px" width="100vw" zIndex="10" >
            <Link py="4px" width="100%" textAlign="center" borderTop="2px solid" borderColor="terciary" color="terciary" >Welcome</Link>
            <Link py="4px" width="100%" textAlign="center" borderTop="2px solid" borderColor="terciary" color="terciary" >Projects</Link>
            <Link py="4px" width="100%" textAlign="center" borderTop="2px solid" borderColor="terciary" color="terciary" >Technologies</Link>
            <Link py="4px" pb="10px" width="100%" textAlign="center" borderTop="2px solid" borderColor="terciary" color="terciary" >Contact</Link>
          </VStack>
        </Box>
    )
}

export default NavBar
