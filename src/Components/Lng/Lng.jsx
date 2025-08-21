import React from 'react'
import './Lng.css'
import Lngg from '../../assets/Lng'
import theme_pattern from '../../assets/theme_pattern.svg'


const Lng = () => {
    return (
        <div className='Lng'>
            <div className="title">
                <h1>Technologies</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="lng-container">
                {Lngg.map((lng, index) => {
                    return <div className="element">

                        <img key={index} src={lng.img} alt="" />
                        {/* <h2>{lng.name}</h2> */}
                    </div>

                })}
            </div>
        </div>
    )
}

export default Lng