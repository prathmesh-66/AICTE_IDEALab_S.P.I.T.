import React from "react";
import "./footer.css";
import im2 from "./images/spit_white.png";

function footer() {
  return (
    <div className="foot_extra">
      <div id="foot"  className="footer">
      <div className="footer_class">
        <div className="footer_start">
          <div>
            <img className="foot_spit_logo" src={im2} alt="im2" />
          </div>
        </div>

        <div className="footer_main">
          <div className="aicte">AICTE IDEALab </div>
          <div className="college">Sardar Patel Institute of Technology </div>
          <div className="adress">
            Bhavan's Campus, Munshi Nagar, Andheri (West), Mumbai 400058{" "}
          </div>
          <div className="email">Email: idealab@spit.ac.in </div>
        </div>
        
        </div>
      <div className="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.6460493396557!2d72.83354047514898!3d19.12317758209115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d90e067ba9%3A0x16268e5d6bca2e6a!2sBharatiya%20Vidya%20Bhavan&#39;s%20Sardar%20Patel%20Institute%20of%20Technology%20(SPIT)!5e0!3m2!1sen!2sin!4v1688624482034!5m2!1sen!2sin"  style={{"border":0 }}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
      
    </div>
    <div className="footer_last_footer">
          Copyrights © 2023 | AICTE-IDEALab @ S.P.I.T.  
        
        
    </div>
    </div>
  );
}

export default footer;
