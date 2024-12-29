import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import Footer from "../components/Footer";
import FormContact from "../components/FormContact";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import Welcome from "../components/Welcome";
import theme from "../styles/theme";
import { LanguageProvider } from "../contexts/LanguageProvider";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <LanguageProvider>
        <CSSReset />
        <NavBar />
        <Welcome />
        <Projects />
        <FormContact />
        <Footer />
      </LanguageProvider>
    </ChakraProvider>
  );
}

export default App;
