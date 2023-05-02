import React from "react";
import AIDLLOGO from "../assets/AIDLLOGO.jpeg";
// import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
// import { Link } from "react-scroll";
import About from "./About";
import Carousel from "./Carousel";
import Cards from "./Cards";
import Address from "./Address";
import Faq from "./Faq";
import Footer from "./Footer";

const Home = () => {
  return (
    <div name="Home" id="HOME"className="h-screen w-full ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
      <h2 className="text-4xl sm:text-7xl font-bold p-4 mt-40 text-white">
        Artificial Intelligence and Deep Learning Club
      </h2>
      <p className="text-gray-500 py-4 max-w-md">
        An initiative of Fr. C. Rodrigues Institute of Technology, Vashi.
      </p>
      <div></div>
    </div>
    <div>
      <img
        className="rounded-md mx-auto w-2/3 md:w-full object-scale-down h-96 pl-6"
        src={AIDLLOGO}
        alt="my profile"
      ></img>
    </div>
  </div>
  <About />
  <Cards />
  <Faq />
  <Carousel />
  <Address />
  <Footer />
</div>
);
};

export default Home;