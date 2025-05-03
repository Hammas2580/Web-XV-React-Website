import React from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/HeroSection/Hero";
import Slider from "./Components/SliderSection/Slider";
import About from "./Components/AboutSection/About";
import Chart from "./Components/ChartSection/Chart";
import Token from "./Components/TokenSection/Token";
import Footer from "./Components/FooterSection/Footer";
import { Route, Routes } from "react-router";


const App = () => {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <Slider />
        <About />
        <Chart />
        <Token />
        <Footer />
      </div>
      {/* <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/webxv" element={<Web/>}/>
        <Route path="/community" element={<Community/>}/>
      </Routes> */}
    </>
  );
};

export default App;
