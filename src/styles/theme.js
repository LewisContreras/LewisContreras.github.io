import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
      global: {
        body: {
          color: "#000"
        },
        a:{
          _hover:{
            textDecoration:"none",
            outline: "none"
          }
        }
      },
    },
 
    colors: {
        primary: "#262056",
        secondary:"#38B2AC",
        terciary: "#CBD5E0"
    },
    textStyles: {
        h1: {
            fontSize: "46px",
            fontWeight: 800,
            lineHeight: "56px",
            letterSpacing: "0.15%",
        },
        h2: {
            fontSize: "48px",
            fontWeight: 700,
            lineHeight: "58px",
            letterSpacing: "0.15%",
        },
        h3: {
            fontSize: "37px",
            fontWeight: 700,
            lineHeight: "37px"
        },
        h4: {
            fontSize: "30px",
            fontWeight: 600,
            lineHeight: "34px"
        },
        h5: {
            fontSize: "30px",
            fontWeight: 600,
            lineHeight: "26px"
        }
    },
  });

export default theme;