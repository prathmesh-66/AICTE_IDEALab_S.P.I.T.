import React from "react";
import "./temp.css";
import { NavLink } from "react-router-dom";

const temp = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="imgaga" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <p>{props.dates}</p>
        <p>{props.about}</p>
        <div className="pro-btns">
          <a href={props.view}>
              <button className="btn">Poster </button>
            </a>
          <NavLink to={{
   pathname:"/photo/"+props.id,
   state: {photos:props.photos}  
 }} className="btn">
            Photos 
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default temp;
