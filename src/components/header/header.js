import React from "react";
import "./header.css";
import img1 from "./images/spitlogo.png";
import img2 from "./images/logoIdealab.png";

const header = () => {
  return (
    <div id="head" className="header">
      <div className="clglogo">
        <img className="image" src={img1} alt="img1" />
      </div>
      <div className="clgname">
        <div className="p">Bhartiya Vidya Bhavan's</div>
        <div className="h3">SARDAR PATEL INSTITUTE OF TECHNOLOGY</div>
        <div className="q">
          An autonomous un-aided Engineering Institute affiliated to University
          of Mumbai
        </div>
      </div>

      <div className="aictelogo">
      <img className="image2" src={img2} alt="img2" />
      </div>
    </div>
  );
};

export default header;
