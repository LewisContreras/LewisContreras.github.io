import React from "react";
import { Button, Link } from "@chakra-ui/react";

const LinkButton = ( {text, href}) => {
  return ( 
    <Link
      href={href}
      target="_blank"
      _hover={{ textDecoration: "none" }}
      _focus={{ outline: "none" }}
    >
      <Button bgColor="secondary" color="primary" >
        {text}
      </Button>
    </Link>
  );
};

export { LinkButton };