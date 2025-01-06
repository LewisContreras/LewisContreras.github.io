import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import Footer from "../components/footer/Footer";
import FormContact from "../components/contact/FormContact";
import NavBar from "../components/navbar/NavBar";
import Projects from "../components/projects/Projects";
import Welcome from "../components/welcome/Welcome";
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
