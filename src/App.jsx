 import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import { Home } from "./HomePage/Home";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/aboutus" Component={AboutUs} />
          <Route path="/contactus" Component={ContactUs} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
