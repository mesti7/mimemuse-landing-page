import React, { useEffect } from "react";
import Product from "./Component/Product/Product";
import AboutUs from "./Component/AboutUs/AboutUs";
import FooterDiv from "./Component/FooterDiv/FooterDiv";
import { Home } from "./Home/Home";
import NavBar from "./Component/NavBar/NavBar";
import Aos from "aos";
import "aos/dist/aos.css";
import Courses from "../src/Component/Courses/Courses";
// import Countries from "./Component/Countries/Countries";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
    })
  }, []);
  return (
    <div>
      <NavBar/>
      <Home />
      <Courses />
      {/* <Countries/> */}
      <Product />
      <AboutUs />
      <FooterDiv />
    </div>
  );
};

export default App;
