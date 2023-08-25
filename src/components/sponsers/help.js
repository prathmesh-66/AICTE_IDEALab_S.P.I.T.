import React from "react";
import "./helplogo.css";
import Helpcard from "../sponsers/helpcard"
import Helpcardata from "../sponsers/helpcardata"



const temp = () => {
  return (
    <div id="spon" className="work_container">
        <div className="heading">
          Our Supporters
        </div>
      <div className="elp_border_box">
      <div className="project_heading">
        <div className="project_container_help">
          {Helpcardata.map((val,ind)=>{
            return(
                <Helpcard
                key={ind}
                imgsrc={val.imgsrc}
                link={val.link}
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
