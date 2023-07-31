import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import { Home } from "./HomePage/Home";
import ContactUs from "./pages/ContactUs";
import News from "../src/pages/News";
import Blogs from "../src/pages/Blogs";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/aboutus" Component={AboutUs} />
          <Route path="/contactus" Component={ContactUs} />
          <Route path="/News" Component={News} />
          <Route path="/Blog" Component={Blogs} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
