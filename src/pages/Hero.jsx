
import Navigation from '../components/Navigation';
import React, { useState, useEffect } from 'react';


function Hero({mainTitle, secondTitle, myImg, heroImg, mentorPage}){
    


    const imgStyle={
        display: mentorPage ? "none" : "inline-block"
    }
    const heroImgStyle={
        width: mentorPage ? "70%" : "100%",
        margin:'0 auto'
        
    }
    const heroImgBoxStyle={
        boxShadow: mentorPage ? "none" : ""
    }
    return(
        <div className="hero">
            < div className='hero-top'>
             <Navigation/>
            <div className="hero-content">
                <h1>{mainTitle}</h1>
                <p> {secondTitle}</p>
            </div>
            </div>
            <div className="my-img" style={imgStyle}>
                <img src={myImg} alt="hero" />
            </div>
            <div className="hero-img" style={heroImgStyle}>
                <img src={heroImg} style={heroImgBoxStyle} alt="hero" />
            </div>
        </div>
    )
}
export default Hero;