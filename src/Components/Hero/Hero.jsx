import React from 'react'
import './Hero.css'
import profile_img from '../../assets/me.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} class="circle-svg" alt="" />
        <h1><span>I'm Nazim Mestar,</span> frontend developper based in ALG</h1>
        <p>I am a passionate web developer who loves building modern, responsive, and user-friendly applications.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>

    </div>

  )
}

export default Hero