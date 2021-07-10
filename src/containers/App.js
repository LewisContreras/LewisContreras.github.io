import { ChakraProvider,CSSReset } from "@chakra-ui/react";
import React,{ useState } from "react";
import Footer from "../components/Footer";
import FormContact from "../components/FormContact";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import Welcome from "../components/Welcome";
import theme from "../styles/theme";

function App() {

  const [language, setLanguage] = useState(true)

  return (
    <ChakraProvider  theme={theme} >
      <CSSReset/>
      <NavBar language={language} setLanguage={setLanguage} />
      <Welcome language={language} />
      <Projects language={language} />
      <FormContact language={language} />
      <Footer language={language} />

    </ChakraProvider>
  );
}

export default App;
