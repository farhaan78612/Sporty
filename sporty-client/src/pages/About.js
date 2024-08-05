import React from "react";
//Added Later
import Navbar from "../components/Navbar";
import "./About.css";
import CricketInfo from "../infopages/CricketInfo";
import FootballInfoPage from "../infopages/FootballInfoPage";
import Footer from "./Footer";
import HockeyInfo from "../infopages/HockeyInfo";
import OlympicsInfo from "../infopages/OlympicsInfo";
import BaseballInfo from "../infopages/BaseballInfo";

const About = (prop) => {
  const developers = [
    { Name: "Ansuman", content: "Reg. No: 2361020322" },
    { Name: "Farhaan", content: "Reg. No: 2361020334" },
    { Name: "Manoranjan", content: "Reg. No: 2361020322" },
    { Name: "Shakti", content: "Reg. No: 2361020322" },
  ];

  if (prop.title === "CricketInfo") {
    return (
      <>
        <Navbar />
        <div id="CricketInfo">
          <CricketInfo />
        </div>
        <Footer />
      </>
    );
  } else if (prop.title === "FootballInfo") {
    return (
      <>
        <Navbar />
        <div id="FootballInfo">
          <FootballInfoPage />
        </div>
        <Footer />
      </>
    );
  } else if (prop.title === "HockeyInfo") {
    return (
      <>
        <Navbar />
        <div id="HockeyInfo">
          <HockeyInfo />
        </div>
        <Footer />
      </>
    );
  } else if (prop.title === "OlympicsInfo") {
    return (
      <>
        <Navbar />
        <div id="OlympicsInfo">
          <OlympicsInfo />
        </div>
        <Footer />
      </>
    );
  } else if (prop.title === "BaseballInfo") {
    return (
      <>
        <Navbar />
        <div id="BaseballInfo">
          <BaseballInfo />
        </div>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Navbar />
      <div id="bg-about">
        <div className="container-fluid" id="about-card">
          <div className="container-fluid" id="about-text">
            <p className="card-text">
              Welcome to <span>SPORTY</span>, your ultimate destination for
              real-time sports scores, news, and updates! Whether you're a
              die-hard fan or just catching up on the latest results, SPORTY has
              you covered with comprehensive coverage of all your favorite
              sports. From football and basketball to tennis and cricket, we
              provide the most up-to-date scores, statistics, and live
              commentary to keep you in the know.
            </p>

            <p className="card-text">
              At SPORTY, we are passionate about delivering the best user
              experience. Our intuitive interface and customizable notifications
              ensure that you never miss a moment of the action. Stay informed
              with expert analysis, in-depth articles, and exclusive interviews
              with top athletes and coaches.
            </p>

            <p className="card-text">
              Join the SPORTY community today and elevate your sports experience
              to the next level. With SPORTY, you're always just a click away
              from the thrill of the game!
            </p>
          </div>
        </div>
        <h1 id="Highlight-developers">Developed with Love By</h1>
        <div id="developers">
          {developers.map((developer) => (
            <div id="card">
              <div id={developer.Name} className="card-item"></div>
              <div className="d-flex flex-column ms-3 w-75 justify-content-center">
                <h3>{developer.Name}</h3>
                <p>{developer.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div id="footer"></div>
      </div>
      <Footer />
    </>
  );
};

export default About;
