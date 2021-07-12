import { Box, Button, Center, HStack, Icon, Link, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {FaBars} from "react-icons/fa"
import "../styles/animations.css"
import ScrollReveal from 'scrollreveal'

const NavBar = ({language,setLanguage}) => {
    const [menu, setMenu] = useState(false)

    useEffect(() => {
      const sr = ScrollReveal()
      sr.reveal(".navbar-items",{
        origin:"left",
        distance:"120%"
      })

      sr.reveal(".navbar-buttons",{
        origin:"left",
        distance:"120%"
      })
      
    }, [])

    const handleSmooth = (e) =>{
      e.preventDefault()
      const links = document.querySelectorAll(".navbar-link")
      for (const i of links) {
        if (e.target === i) {
          i.style.borderBottom = "2px solid"
          i.style.color = "#38B2AC"
        }else{
          i.style.borderBottom = "none"
          i.style.color = "#CBD5E0"
        }     
      }
      const section = e.target.getAttribute("href")
      document.querySelector(section).scrollIntoView({
        behavior: "smooth"
      })               
    }

    const handleSmoothMobile = (e) =>{
      e.preventDefault()
      const section = e.target.getAttribute("href")
      document.querySelector(section).scrollIntoView({
        behavior: "smooth"
      })               
    }
    
    

    return (
        <Box boxShadow="base" display="flex" alignItems="center" position="fixed" top="0" w="100vw"  bgColor="primary" zIndex="10" h={["80px","60px"]} >
          <HStack   w="90%" mx="auto"  justifyContent="space-between" >
            <Center display={["flex","none"]} onClick={()=>setMenu(!menu)} border="1px solid" borderColor="terciary" borderRadius="4px" p="5px" >
              <Icon color="terciary" fontSize="20px" as={FaBars} />
            </Center>
            <HStack className="navbar-items"
            // className="scene_element scene_element--fadeinleft"
             display={["none","flex"]} spacing="30px" >
            <Link className="navbar-link"  _hover={{textDecoration:"none"}} _focus={{outline:"none"}}  href="#welcome" fontWeight="600" textAlign="center" color="secondary" borderBottom="3px solid" onClick={handleSmooth} >{language ? "Bienvenido" : "Welcome" }</Link>
            <Link className="navbar-link" _hover={{textDecoration:"none"}} _focus={{outline:"none"}} fontWeight="600" href="#projects"  color="terciary" onClick={handleSmooth}  >{language ? "Proyectos" : "Projects" }</Link>
            {/* <Link py="4px" width="100%" textAlign="center" borderTop="2px solid" borderColor="terciary" color="terciary" >Technologies</Link> */}
            <Link className="navbar-link" href="#contact" _hover={{textDecoration:"none"}} _focus={{outline:"none"}} fontWeight="600" color="terciary" onClick={handleSmooth}  >{language ? "Contacto" : "Contact" }</Link>
            </HStack>
            <HStack className="navbar-buttons" >
              {/* <Button onClick={()=>setLanguage(!language)} >
                Idioma
              </Button> */}
              <Link
              //  className="scene_element scene_element--fadeinright"
                href="https://drive.google.com/file/d/11aj2WBsoFrqqSeOlejw53-wF5EhOHNAk/view?usp=sharing"  target="_blank" _hover={{textDecoration:"none"}} _focus={{outline:"none"}}  >
              <Button width="100px" colorScheme="teal" _focus={{outline:"none"}}  >{language ? "Ver CV" : "View CV" }</Button>
              </Link>
            </HStack>
          </HStack>
          <VStack className="scene_fast scene_element--clippathdown"  display={!menu ? "none" : "flex"}  bgColor="primary" position="absolute" top="70px" width="100vw" zIndex="10" >
            <Link _hover={{textDecoration:"none"}} _focus={{outline:"none"}} onClick={(e)=>{
              handleSmoothMobile(e)
              setMenu(!menu)
              }} href="#welcome" py="4px" width="100%" textAlign="center" borderTop="2px solid" borderColor="terciary" color="terciary" >{language ? "Bienvenido" : "Welcome" }</Link>
            <Link _hover={{textDecoration:"none"}} _focus={{outline:"none"}} onClick={(e)=>{
              handleSmoothMobile(e)
              setMenu(!menu)
              }} href="#projects" py="4px" width="100%" textAlign="center" borderTop="2px solid" borderColor="terciary" color="terciary" >{language ? "Proyectos" : "Projects" }</Link>
            {/* <Link py="4px" width="100%" textAlign="center" borderTop="2px solid" borderColor="terciary" color="terciary" >Technologies</Link> */}
            <Link href="#contact" _hover={{textDecoration:"none"}} _focus={{outline:"none"}} onClick={(e)=>{
              handleSmoothMobile(e)
              setMenu(!menu)
              }} py="4px" pb="10px" width="100%" textAlign="center" borderTop="2px solid" borderColor="terciary" color="terciary" >{language ? "Contacto" : "Contact" }</Link>
          </VStack>
        </Box>
    )
}

export default NavBar
