import "./App.css";
import "@fontsource/roboto";
import Navbar from "./components/Navbar/Navbar.jsx";
import theme from "./assets/theme.js";
import { ThemeProvider } from "@emotion/react";
import Hero from "./components/Hero/Hero.jsx";
import Coffee from "./components/Coffee/Coffee.jsx";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Hero />
        <Coffee />
      </ThemeProvider>
    </>
  );
}

export default App;
