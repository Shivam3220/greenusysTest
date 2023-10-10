import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Slickslider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true, // Show arrows for navigation
    
    };
    
    return (
      <Slider {...settings} style = {{width:"80%",margin:"100px auto" }}>
        <div>
          <img alt='' src='/Assest/Banglore.png'/>

        </div>
        <div>
        <img alt='' src='/Assest/Chennai.png'/>
        </div>
        <div>
        <img alt='' src='/Assest/Delhi.png'/>
        </div>
        <div>
        
        <img alt='' src='/Assest/Gurgaon.png'/>
        </div>
        <div>
        <img alt='' src='/Assest/Hyderabad.png'/>
        </div>
       
        <div>
        <img alt='' src='/Assest/Delhi.png'/>
        </div>
       
      </Slider>
    );
  }

