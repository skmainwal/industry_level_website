import "./styles/styles.css";
import MainSection from "./components/MainSection";
import Header from "./components/Header";
import ServicesSection from "./components/ServicesSection";
import ImageSlider from "./components/imageSlider/ImageSlider";
import ServedIndustry from "./components/ServedIndustry";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App">
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
