import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../styles/imgs/Hyperspace_logo-HD.png'
import Valorant from '../styles/imgs/valorant-logo.png'
import RL from '../styles/imgs/rl-logo.png'
import Helmet from '../styles/imgs/Hyperspace_logo-Helmet-2.png'
import { connect } from 'react-redux'
import history from '../utils/history'

const Header = props => {
    const [dis, setDis] = useState(false)
    const [dis2, setDis2] = useState(false)
    const location = useLocation()

    const redirect = () => {
        history.push('/store')
        window.location.reload()
    }
    return (
        <div className='header'>
            <div className='title'>
                <Link to='/'>
                    <img className='mainlogo' src={Logo} />
                </Link>
                <Link to='/' className='hd'>
                    <h1 className='hd'>Hyperspace Dark</h1>
                </Link>
            </div>
            <div className='discord'>
                <a href='https://discord.gg/dXUFew7Gvn' target="_blank">
                    <img src={Helmet} className='helmet' />
                </a>
                <p className='msgdisc'>Join our discord!</p>
            </div>
            <div className='gamelogo'>
                <Link 
                    to='/valorant' className='nav' onMouseOver={() => setDis(!dis)}
                    onMouseOut={() => setDis(!dis)}>
                        <img src={Valorant} className='logo' />
                        {/* <h3 className={!dis ? 'hidden' : 'yes'}>Players</h3> */}
                </Link>
                <Link 
                    to='/rl' className='nav' onMouseOver={() => setDis2(!dis2)}
                    onMouseOut={() => setDis2(!dis2)}>
                        <img src={RL} className='logo rllogo' />
                        {/* <h3 className={!dis2 ? 'hidden' : 'yes'}>Players</h3> */}
                </Link>
                <button onClick={() => redirect()}>Store</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        // cart: state.cart
    }
}

export default connect(mapStateToProps, {})(Header)