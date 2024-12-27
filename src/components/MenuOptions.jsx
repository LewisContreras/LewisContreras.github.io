import React, { useState } from "react";
import { Center, HStack, Icon, Link, VStack } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import "../styles/animations.css";

const MENU_OPTIONS = [
  {
    id: 1,
    title: "Bienvenida",
    href: "#welcome",
  },
  {
    id: 2,
    title: "Proyectos",
    href: "#projects",
  },
  {
    id: 3,
    title: "Contacto",
    href: "#contact",
  },
];

const MenuOptions = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <HStack display={["none", "flex"]} spacing="30px">
        {MENU_OPTIONS.map((option) => (
          <Link
            key={option.id}
            _hover={{ textDecoration: "none" }}
            _focus={{ outline: "none" }}
            href={option.href}
            fontWeight="600"
            color="terciary"
          >
            {option.title}
          </Link>
        ))}
      </HStack>
      <Center
        display={["flex", "none"]}
        onClick={() => setMenu(!menu)}
        border="1px solid"
        borderColor="terciary"
        borderRadius="4px"
        p="5px"
      >
        <Icon color="terciary" fontSize="20px" as={FaBars} />
      </Center>
      <VStack
        className="scene_fast scene_element--clippathdown"
        display={!menu ? "none" : ["flex", "none"]}
        bgColor="primary"
        position="absolute"
        top="70px"
        left="-8px"
        width="100vw"
        zIndex="10"
      >
        {MENU_OPTIONS.map((option) => (
          <Link
            key={option.id}
            _hover={{ textDecoration: "none" }}
            _focus={{ outline: "none" }}
            href={option.href}
            py="4px"
            width="100%"
            textAlign="center"
            borderTop="2px solid"
            borderColor="terciary"
            color="terciary"
          >
            {option.title}
          </Link>
        ))}
      </VStack>
    </>
  );
};

export { MenuOptions };
