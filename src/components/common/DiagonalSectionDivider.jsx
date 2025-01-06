import React from "react";
import { Box } from "@chakra-ui/react";

const DiagonalSectionDivider = ({color}) => {
  return (
    <Box
      position="absolute"
      bgColor={color}
      left="0"
      top="0"
      width="100%"
      height="70px"
      clipPath="polygon(0 0, 100% 100%, 100% 0)"
    ></Box>
  );
};

export { DiagonalSectionDivider };
