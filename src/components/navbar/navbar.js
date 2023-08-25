import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
const navbar = () => {
  return (
    // <div className="navb">
    //   <ul className='navb-menu'>
    //     <li><AnchorLink href="/head" offset={150} className="home">Home</AnchorLink></li>
    //     <li><AnchorLink href="/abou" offset={150} className="about">AboutUs</AnchorLink></li>
    //     <li><AnchorLink href='/eventsection' offset={150} className="event"> Event</AnchorLink></li>
    //     <li><Link to='/equipment' offset={150} className="equipment">Equipments</Link></li>
    //     <li><Link to='/team' offset={150} className="team">Team</Link></li>
    //     <li><AnchorLink href="/spon" offset={150} className="sponser">Sponsers</AnchorLink></li>
    //     <li><AnchorLink href='/foot' offset={150} className="contact">Contact</AnchorLink></li>
    //   </ul>
    // </div>
    <div className="stic">
      <nav class="navbar navbar-expand-lg sticky-top bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">AICTE-IDEALab</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto">
        <AnchorLink class="nav-link active" aria-current="page" href="/head" offset={150} >Home</AnchorLink>
        <AnchorLink class="nav-link active" href="/abou" offset={150}>AboutUs</AnchorLink>
        <AnchorLink class="nav-link active" href='/eventsection' offset={150} > Event</AnchorLink>
        <Link class="nav-link active" to='/equipment' offset={150} >Equipments</Link>
        <Link class="nav-link active" to='/team' offset={150} >Team</Link>
        <AnchorLink class="nav-link active" href="/spon" offset={150} >Sponsers</AnchorLink>
        <AnchorLink class="nav-link active"href='/foot' offset={150} >Contact</AnchorLink>
        
      </div>
          </div>
        </div>
      </nav>
      
    </div>
  );
};

export default navbar;
