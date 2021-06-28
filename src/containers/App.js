import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../components/Footer";
import FormContact from "../components/FormContact";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import Welcome from "../components/Welcome";
import theme from "../styles/theme";

function App() {
  return (
    <ChakraProvider theme={theme} >
      <NavBar/>
      <Welcome/>
      <Projects/>
      <FormContact/>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
