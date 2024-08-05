import React from "react";
// Added Later
import "./Livescore.css";
import Navbar from "../../components/Navbar.js";
import GetMatches from "../Live Score/GetMatches.js";
import Footer from "../Footer.js";

const Livescore = () => {
  return (
    <>
      <Navbar />
      <div id="livescore-bg">
        <GetMatches />
      </div>
      <Footer />
    </>
  );
};

export default Livescore;
