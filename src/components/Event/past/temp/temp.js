import React from "react";
import "./temp.css";
import Tempcard from "./tempcard"
import Tempcardata from "./tempcardata"

const temp = () => {
  return (
    <div className="work-container">
    <div className="temp_center">
        <div className="temp_heading">
          Past Events
        </div>
      <div className="project-heading">
        <div className="project-container">
          {Tempcardata.map((val,ind)=>{
            return(
                <Tempcard
                key={ind}
                id={val.id}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                dates={val.dates}
                about={val.about}
                view={val.view}
                photos={val.photos}
                />
            )
          })}
        </div>
        </div>
      </div>
    </div>
  );
};

export default temp;
