import React from "react";
import "./helplogo.css";
import {Link} from "react-router-dom";

const temp = (props) => {
  return (
    <div className="project_card">
      <Link to={props.link}><img src={props.imgsrc} alt="imgaga" /></Link>
    </div>
  );
};

export default temp;
