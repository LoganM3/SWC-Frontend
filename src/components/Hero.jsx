
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
        src= 'boys.jpg'
        alt="the boys"
        />
      </Carousel.Item>
      <Carousel.Item interval={1200}>
          <img
            className="img"
            src="van.jpeg"
            alt="van"
          />
        </Carousel.Item>
        <Carousel.Item interval={1200}>
          <img
            className="img"
            src="wave.jpeg"
            alt=""
          />
        </Carousel.Item>
      </Carousel>
    </div>
)
}



export default Hero;