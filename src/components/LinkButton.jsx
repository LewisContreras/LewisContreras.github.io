import React from "react";
import { Button, Link } from "@chakra-ui/react";

const LinkButton = ( {text, href, ...rest}) => {
  return ( 
    <Link
      href={href}
      target="_blank"
      _hover={{ textDecoration: "none" }}
      _focus={{ outline: "none" }}
      {...rest}
    >
      <Button colorScheme="teal" color="primary" >
        {text}
      </Button>
    </Link>
  );
};

export { LinkButton };