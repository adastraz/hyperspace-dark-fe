import React, { useState } from 'react'
import Logo from '../styles/imgs/Hyperspace_logo-HD.png'
import Valorant from '../styles/imgs/valorant-logo.png'
import RL from '../styles/imgs/rl-logo.png'
// import Helmet from './styles/imgs/Hyperspace_logo-Helmet-2.png'

const Header = () => {
    return (
        <div className='header'>
            <div className='title'>
                <img className='mainlogo' src={Logo} />
                <h1>Hyperspace Dark</h1>
            </div>
            <div className='gamelogo'>
                <img src={Valorant} className='logo' />
                <img src={RL} className='logo' />
            </div>
        </div>
    )
}

export default Header