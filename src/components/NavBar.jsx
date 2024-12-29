import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import { MenuOptions } from "./MenuOptions";
import { LinkButton } from "./LinkButton";
import { LanguageButton } from "./LanguageButton";
import { useLanguage } from "../hooks/useLanguage";

const NavBar = () => {
  const { t } = useLanguage();
  return (
    <Box
      boxShadow="base"
      display="flex"
      alignItems="center"
      position="fixed"
      top="0"
      width="100vw"
      bgColor="primary"
      zIndex="10"
      h={["80px", "60px"]}
    >
      <HStack w="90%" mx="auto" justifyContent="space-between">
        <MenuOptions />
        <HStack>
          <LinkButton
            text={t.navBar.cv.text}
            href="https://drive.google.com/file/d/18IylaNu-1RUHQk0VjAmgLuS3bn9-lyuu/view?usp=sharing"
          />
          <LanguageButton />
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavBar;
