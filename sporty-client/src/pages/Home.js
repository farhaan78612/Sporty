import React from "react";
//Added Later
import Navbar from "../components/Navbar";
import "./Home.css";
import Freature from "../components/Freature.js";
import Typewriter from "../components/Typewriter.js";
import Homecontent from "../components/Homecontent.js";

const Home = () => {
  return (
    <>
      <Navbar />
      <div id="bg-home">
        <Typewriter />
        <Homecontent/>
      </div>
      <Freature />
    </>
  );
};

export default Home;
