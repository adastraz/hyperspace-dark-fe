import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../styles/imgs/Hyperspace_logo-HD.png'
import Valorant from '../styles/imgs/valorant-logo.png'
import RL from '../styles/imgs/rl-logo.png'
import Helmet from '../styles/imgs/Hyperspace_logo-Helmet-2.png'
import { connect } from 'react-redux'
import history from '../utils/history'
import { HD, TopDown, FlexCenter, FlexCenter2, HeaderDiv, DiscordDiv, DiscordDiv2, HelmetImg, RegLogo, RLlogo, RegLogo2, RLlogo2, MainLogo, ConditionalNav, ConditionalNavToggler, NavDiv, FlexCenterColumn, FlexCenterTop, GameLink, StoreButton, StoreButton2, UL } from '../styles/Header'
import { Collapse, NavItem } from 'reactstrap'
import Sidebar from './sidebar/Sidebar'

const Header = props => {
    const [dis, setDis] = useState(false)
    const [dis2, setDis2] = useState(false)
    const location = useLocation()

    const redirect = () => {
        history.push('/store')
        window.location.reload()
    }
    const [collapsed, setCollapsed] = useState(true)

    const toggleNavbar = () => setCollapsed(!collapsed)

    const redirectFunc = () => {
        const win = window.open('https://discord.gg/dXUFew7Gvn', '_blank')
        win.focus()
    }

    return (
        <HeaderDiv>
            <FlexCenter>
                <TopDown to='/'>
                    <MainLogo src={Logo} />
                </TopDown>
                <TopDown to='/' className='nav'>
                    <HD>Hyperspace Dark</HD>
                </TopDown>
            </FlexCenter>

            {/*  */}
                <ConditionalNav color="faded" light>
                    <ConditionalNavToggler onClick={toggleNavbar} />
                    <UL isOpen={!collapsed} navbar>
                    <NavDiv navbar>
                        <FlexCenterColumn>
                            <NavItem>
                                <DiscordDiv2 onClick={redirectFunc}>
                                    <a href='https://discord.gg/dXUFew7Gvn' target="_blank">
                                        <HelmetImg src={Helmet} />
                                    </a>
                                    <p className='msgdisc'>Join our discord!</p>
                                </DiscordDiv2>
                            </NavItem>
                            <NavItem>
                                <FlexCenterTop>
                                    <GameLink 
                                        to='/valorant' className='nav' 
                                        onClick={toggleNavbar}
                                        onMouseOver={() => setDis(!dis)}
                                        onMouseOut={() => setDis(!dis)}>
                                            <RegLogo2 src={Valorant} />
                                            {/* <h3 className={!dis ? 'hidden' : 'yes'}>Players</h3> */}
                                    </GameLink>
                                    <GameLink 
                                        to='/rl' className='nav' 
                                        onClick={toggleNavbar}
                                        onMouseOver={() => setDis2(!dis2)}
                                        onMouseOut={() => setDis2(!dis2)}>
                                            <RLlogo2 src={RL} />
                                            {/* <h3 className={!dis2 ? 'hidden' : 'yes'}>Players</h3> */}
                                    </GameLink>
                                </FlexCenterTop>
                                <StoreButton2 className='button type3' onClick={() => redirect()}>Store</StoreButton2>
                            </NavItem>
                            <NavItem>
                                <Sidebar small={true} />
                            </NavItem>
                        </FlexCenterColumn>
                    </NavDiv>
                    </UL>
                </ConditionalNav>
            {/*  */}

            <DiscordDiv onClick={redirectFunc}>
                <a href='https://discord.gg/dXUFew7Gvn' target="_blank">
                    <HelmetImg src={Helmet} />
                </a>
                <p className='msgdisc'>Join our discord!</p>
            </DiscordDiv>
            <FlexCenter2>
                <Link 
                    to='/valorant' className='nav' onMouseOver={() => setDis(!dis)}
                    onMouseOut={() => setDis(!dis)}>
                        <RegLogo src={Valorant} />
                        {/* <h3 className={!dis ? 'hidden' : 'yes'}>Players</h3> */}
                </Link>
                <Link 
                    to='/rl' className='nav' onMouseOver={() => setDis2(!dis2)}
                    onMouseOut={() => setDis2(!dis2)}>
                        <RLlogo src={RL} />
                        {/* <h3 className={!dis2 ? 'hidden' : 'yes'}>Players</h3> */}
                </Link>
                <StoreButton className='button type3' onClick={() => redirect()}>Store</StoreButton>
            </FlexCenter2>
        </HeaderDiv>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, {  })(Header)