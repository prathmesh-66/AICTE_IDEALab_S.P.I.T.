import React from 'react'
import Frontview from "../frontview/frontview";
import Eventsection from "../Event/eventsection"
import AboutSe from "../About/about_section"
import Help from "../sponsers/help"
import Navbar from "../navbar/navbar"


const home = () => {
  return (
    <div >
      <Navbar/>
      <Frontview/>
      <AboutSe/>
      <Eventsection/>
      <Help/>
    </div>
  )
}

export default home