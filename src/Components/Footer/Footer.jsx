import React from 'react'
import './Footer.css'
import insta from '../../assets/instaicon.svg'
import lnkd from '../../assets/lnkd.svg'


const Footer = () => {
    return (
        <div className="hr">
            <hr />
            <div className='footer'>
                <div className="footer-left">
                    <div className="icon">
                        <a href="https://www.instagram.com/nazimmestar/?hl=fr" target='_blanck'><img src={insta} alt="" /></a>
                    </div>
                    <div className="icon">
                        <a href="https://www.linkedin.com/in/nazim-mestar-21021229b/" target='_blanck'><img src={lnkd} alt="" /></a>
                    </div>
                </div>

                <div className="footer-right">
                    <p>© 2025 Nazim Mestar. All rights reserved.</p>
                </div>


            </div>
        </div>
    )
}

export default Footer

