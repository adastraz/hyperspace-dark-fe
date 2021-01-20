import React from 'react' 
import Logo from '../styles/imgs/Hyperspace_logo-HD.png'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <img className='mainlogo2' src={Logo} />
                <h1 className='hd2'>Hyperspace Dark</h1>
                <div className='footerBlock'>
                    <div className="footerContentDiv">
                        <h5>Resources</h5>
                        <h6>FAQ</h6>
                        <h6>Contact Us</h6>
                        <h6>Support</h6>
                    </div>

                    <div className="footerContentDiv">
                        <h5>Follow Us</h5>
                        <h6>Twitter</h6>
                        <h6>Facebook</h6>
                        <h6>Instagram</h6>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Footer