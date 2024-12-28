import React from "react";
import "./styles/styles.css";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import ServicesSection from "./components/ServicesSection";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import ServedIndustry from "./components/ServedIndustry";
import SmoothScroll from "./components/utils/SmoothScroll";

function App() {
  return (
    <div className="App">
      <SmoothScroll />
      <Header />
      <MainSection />
      <ServicesSection />
      <ServedIndustry />
      <AboutUs />
      <ContactUs />
    </div>
  );
}

export default App;
