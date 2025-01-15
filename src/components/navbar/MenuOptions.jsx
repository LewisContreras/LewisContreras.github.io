import React, { useState } from "react";
import { Center, HStack, Icon, Link, VStack } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import "../../styles/animations.css";
import { useLanguage } from "../../hooks/useLanguage";

const MENU_OPTIONS = ["welcome", "projects", "contact"];

const MenuOptions = () => {
  const [menu, setMenu] = useState(false);
  const { t } = useLanguage();
  return (
    <>
      <HStack display={["none", "flex"]} spacing="30px">
        {MENU_OPTIONS.map((option, index) => (
          <Link
            key={index}
            _hover={{ textDecoration: "none" }}
            _focus={{ outline: "none" }}
            href={`#${option}`}
            fontWeight="600"
            color="terciary"
          >
            {t.navBar[option].text}
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
        {MENU_OPTIONS.map((option, index) => (
          <Link
            key={index}
            _hover={{ textDecoration: "none" }}
            _focus={{ outline: "none" }}
            href={`#${option}`}
            py="4px"
            width="100%"
            textAlign="center"
            borderTop="2px solid"
            borderColor="terciary"
            color="terciary"
          >
            {t.navBar[option].text}
          </Link>
        ))}
      </VStack>
    </>
  );
};

export { MenuOptions };
