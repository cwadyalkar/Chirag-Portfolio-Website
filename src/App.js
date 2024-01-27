import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Services from "./Components/Services";
import Qualification from "./Components/Qualification";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Scrollup from "./Components/Scrollup";
import Work from "./Components/Work";
const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
        <Work/>
        <Contact/>
      </main>
        <Footer/>
        <Scrollup/>
    </>
  );
};

export default App;
