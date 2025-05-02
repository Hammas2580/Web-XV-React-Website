import React from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/HeroSection/Hero";
import Slider from "./Components/SliderSection/Slider";
import About from "./Components/AboutSection/About";
import Chart from "./Components/ChartSection/Chart";


const App = () => {
  return (
    <div>
      <Header />
      <Hero/>
      <Slider/>
      <About/>
      <Chart/>
    </div>
  );
};

export default App;
