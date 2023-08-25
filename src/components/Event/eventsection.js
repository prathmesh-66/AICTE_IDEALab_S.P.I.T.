import React from "react";
import "./eventsection.css";
import Uploading_soon from "../Event/images/Uploading_soon.png";

import { Link } from "react-router-dom";

const eventsection = () => {
  return (
    <div className="eventsec">
    <div className="eventsection" id="eventsection">
   
      <div className="event_heading">Events</div>
      <div className="cente">
      <div className="upcoming_event">
        {" "}
        <div className="recent">Recent Event</div>
        
        <div className="dipp">
          <div className="event_name">
            Skilled Program
            <a href={Uploading_soon}>
              <button className="button">Details </button>
            </a>
          </div>
          <div className="event_details">
            We are conducting a 6 days skilling programme for SPCE students from
            10th july to 15th july for training in areas like eleectrical and
            electronics fabrication, embedded systems design, embedded
            programming, 3D printing, robotics, welding, IoT, Machine Learning,
            AI etc So Let me know which session you would like to take and aslo
            availabilty along with Commitee Incharge for associated areas(
            electronics fabrication, embedded systems design,embedded
            programming, 3D printing, robotics, welding, IoT, Machine Learning,
            AI)
          </div>
        </div>
        <div className="more_event">
          <Link to={"/past_event"}>
            <button className="button">Past Events</button>
          </Link>
          <Link to={"/upcoming_event"}>
            <button className="button"> Upcoming Events</button>
          </Link>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default eventsection;
