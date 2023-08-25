import React from 'react'
import "./frontview.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import im1 from "../frontview/images/5.jpg"
import im2 from "../frontview/images/11.jpg"
import im3 from "../frontview/images/12.jpg"
import im4 from "../frontview/images/7.jpg"
import im5 from "../frontview/images/9.jpg"
import im6 from "../frontview/images/8.jpg"


const frontview = () => {
  return (
    <div className='outer'>
    <div className='front_main'>
      <div className='front'>
        <Carousel showArrows={true} showThumbs={false} infiniteLoop useKeyboardArrows autoPlay interval={4000}>
                <div>
                <img className="im1_front_" src={im1} alt="im2" />
                </div>
                <div>
                <img className="im1_front_" src={im2} alt="im2" />
                  
                </div>
                <div>
                <img className="im1_front_" src={im3} alt="im2" />
                  
                </div>
                <div>
                <img className="im1_front_" src={im4} alt="im2" />
                  
                </div>
                <div>
                <img className="im1_front_" src={im5} alt="im2" />
                   
                </div>
                <div>
                <img className="im1_front_" src={im6} alt="im2" />
                 
                </div>
            </Carousel>
    </div>
    </div>
    </div>
  )
}

export default frontview