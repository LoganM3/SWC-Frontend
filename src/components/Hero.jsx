
import "bootstrap/dist/css/bootstrap.css";
import {Carousel} from "react-bootstrap";
import '../styles/Hero.css'
import React from "react";


function Hero(){
return (
    <div className='container'>
      <Carousel className='hero' /*variant="dark"*/ >
      <Carousel.Item>
        <img
        className="img"
        src= 'Logo1.png'
        alt="the boys"
        />
      </Carousel.Item>
      <Carousel.Item interval={1200}>
          <img
            className="img"
            src="connor pics_front board (6 of 9).jpg"
            alt="van"
          />
        </Carousel.Item>
        <Carousel.Item interval={1200}>
          <img
            className="img"
            src="Tom_vibing (4 of 4).jpg"
            alt=""
          />
        </Carousel.Item>
      </Carousel>
    </div>
)
}



export default Hero;