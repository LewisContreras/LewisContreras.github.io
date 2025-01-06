import React from "react";
import { Button, Link } from "@chakra-ui/react";

const LinkButton = ( {text, href, width}) => {
  return ( 
    <Link
      href={href}
      target="_blank"
      _hover={{ textDecoration: "none" }}
      _focus={{ outline: "none" }}
      width={width  || "auto"}
    >
      <Button w="100%" colorScheme="teal" color="primary" >
        {text}
      </Button>
    </Link>
  );
};

export { LinkButton };