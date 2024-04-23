import React, { Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import { Home } from './HomePage/Home'
import ContactUs from './pages/ContactUs'
import Policy from './pages/Policy'
import Cookie from './pages/Cookie'
import Terms from './pages/Terms'

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" Component={Home} />
          {/* <Route path="/aboutus" Component={AboutUs} />
          <Route path="/contactus" Component={ContactUs} /> */}
          <Route path="/privacypolicy" Component={Policy} />
          <Route path="/termsandconditions" Component={Terms} />
          <Route path="/cookies" Component={Cookie} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
