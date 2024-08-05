import React from "react";
//Added Later
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Typewriter.css";

const Typewriter = () => {
  const [text] = useTypewriter({
    words: ["Live Score", "Cricket", "Football", "Baseball"],
    loop: { Infinity },
  });
  return (
    <div className="typewriter">
      <h1 style={{ fontFamily: "NavBarFont" }} className="text-warp">
        Your ultimate sports companion
      </h1>
      <h3
        style={{ textAlign: "center", fontFamily: "NavBarFont" }}
        className="fs-3"
      >
        Watch &nbsp;
        <span>{text}</span>
        <span>
          <Cursor />
        </span>
      </h3>
    </div>
  );
};

export default Typewriter;
