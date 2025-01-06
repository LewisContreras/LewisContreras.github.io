import React, { useState } from "react";
import { Center, HStack, Icon, Link, VStack } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import "../../styles/animations.css";
import { useLanguage } from "../../hooks/useLanguage";

const MENU_OPTIONS = [
  {
    id: 1,
    title: "welcome",
  },
  {
    id: 2,
    title: "projects",
  },
  {
    id: 3,
    title: "contact",
  },
];

const MenuOptions = () => {
  const [menu, setMenu] = useState(false);
  const { t } = useLanguage();
  return (
    <>
      <HStack display={["none", "flex"]} spacing="30px">
        {MENU_OPTIONS.map((option) => (
          <Link
            key={option.id}
            _hover={{ textDecoration: "none" }}
            _focus={{ outline: "none" }}
            href={`#${option.title}`}
            fontWeight="600"
            color="terciary"
          >
            {t.navBar[option.title].text}
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
        className="scene_element scene_element--clippathdown"
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
            href={`#${option.title}`}
            py="4px"
            width="100%"
            textAlign="center"
            borderTop="2px solid"
            borderColor="terciary"
            color="terciary"
          >
            {t.navBar[option.title].text}
          </Link>
        ))}
      </VStack>
    </>
  );
};

export { MenuOptions };
