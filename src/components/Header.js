import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../styles/imgs/Hyperspace_logo-HD.png'
import Valorant from '../styles/imgs/valorant-logo.png'
import RL from '../styles/imgs/rl-logo.png'
import Helmet from '../styles/imgs/Hyperspace_logo-Helmet-2.png'

const Header = () => {
    return (
        <div className='header'>
            <div className='title'>
                <Link to='/'><img className='mainlogo' src={Logo} /></Link>
                <h1>Hyperspace Dark</h1>
            </div>
            <div className='discord'>
                <a href='https://discord.gg/dXUFew7Gvn' target="_blank"><img src={Helmet} className='helmet' /></a>
                <p className='msgdisc'>Join our discord!</p>
            </div>
            <div className='gamelogo'>
                <Link to='/valorant' className='nav'><img src={Valorant} className='logo' /></Link>
                <Link to='/rl' className='rlnav'><img src={RL} className='logo' /></Link>
            </div>
        </div>
    )
}

export default Header