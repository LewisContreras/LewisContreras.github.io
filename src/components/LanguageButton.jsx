import React from "react";
import { Button } from "@chakra-ui/react";
import { useLanguage } from "../hooks/useLanguage";

const LanguageButton = () => {
  const { t, toggleLanguage } = useLanguage();

  return (
    <Button onClick={toggleLanguage} colorScheme="teal" color="primary">
      {t.navBar.language.text}
    </Button>
  );
};

export { LanguageButton };
