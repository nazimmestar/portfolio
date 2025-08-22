import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import myimg from '../../assets/myimg.svg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt=""/>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={myimg} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a Computer Science graduate and front-end developer skilled in the MERN stack. I also have experience in Graphic Design, which helps me create modern and user-friendly digital experiences.</p>
                        <p>Beyond web development, I also have knowledge in Big Data, Data Warehousing, and Decision-making Systems. As part of my academic journey, I worked on a project about VM migration and optimization in cloud computing.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>Java</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>Python</p><hr style={{ width: "60%" }} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About