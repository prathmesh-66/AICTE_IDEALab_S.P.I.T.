import React from "react";
import "./team.css";

const temp = (props) => {
  return (
    <div className="project-card_team">
      <img src={props.imgsrc} alt="imgaga" />
      <h2 className="project-title_team">{props.title}</h2>
      <div className="pro-details_team">
        <p>{props.text}</p>
        
      </div>
    </div>
  );
};

export default temp;
