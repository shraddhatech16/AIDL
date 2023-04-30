import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Home from "./components/Home";
import About from "./components/About";
import ParticlesjsBackground from "./components/ParticlesjsBackground";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Cards from "./components/Cards";
import Address from "./components/Address";
import Faq from "./components/Faq";

import Preloader from "./components/Pre";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
    
    <ParticlesjsBackground/>

      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Faq' element={<Faq/>} />

      </Routes>
      <About/>
      <Cards/>
      <Faq/>
      <Carousel/>
      
      <SocialLinks/>  
      <Address/>    
      <Footer />
   
    </div>
  </Router>
  );
}

export default App;