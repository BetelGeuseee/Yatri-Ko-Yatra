import React from 'react'
import Button from './Button'
import '../App.css'
import './components_css/HeroSection.css'
const HeroSection = ()=>{

 return(<div className='hero-container'>
    <video src='/videos/video.mp4' autoPlay loop muted />
    <h1>YATRI KO YATRA</h1>
    <p>Explore Nepal</p>
    <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
            Get Started
        </Button>
       
    </div>
 </div>)
}

export default HeroSection