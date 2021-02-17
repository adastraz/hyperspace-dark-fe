import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../styles/imgs/Hyperspace_logo-HD.png'
import Valorant from '../styles/imgs/valorant-logo.png'
import RL from '../styles/imgs/rl-logo.png'
import Helmet from '../styles/imgs/Hyperspace_logo-Helmet-2.png'
import { connect } from 'react-redux'
import { HD, TopDown, FlexCenter, HeaderDiv, DiscordDiv, HelmetImg, RegLogo, RLlogo, RegLogo2, RLlogo2, MainLogo, ConditionalNav, ConditionalNavToggler, NavDiv, FlexCenterColumn, FlexCenterTop } from '../styles/Header'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

const Header = props => {
    const [dis, setDis] = useState(false)
    const [dis2, setDis2] = useState(false)
    const location = useLocation()

    // const redirect = () => {
    //     history.push('/store')
    //     window.location.reload()
    // }
    const [collapsed, setCollapsed] = useState(true)

    const toggleNavbar = () => setCollapsed(!collapsed)
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
                    <ConditionalNavToggler onClick={toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!collapsed} navbar>
                    <NavDiv navbar>
                        <FlexCenterColumn>
                            <NavItem>
                                <a href='https://discord.gg/dXUFew7Gvn' target="_blank">
                                    <HelmetImg src={Helmet} />
                                </a>
                                <p className='msgdisc'>Join our discord!</p>
                            </NavItem>
                            <NavItem>
                            <FlexCenterTop>
                                <Link 
                                    to='/valorant' className='nav' onMouseOver={() => setDis(!dis)}
                                    onMouseOut={() => setDis(!dis)}>
                                        <RegLogo2 src={Valorant} />
                                        {/* <h3 className={!dis ? 'hidden' : 'yes'}>Players</h3> */}
                                </Link>
                                <Link 
                                    to='/rl' className='nav' onMouseOver={() => setDis2(!dis2)}
                                    onMouseOut={() => setDis2(!dis2)}>
                                        <RLlogo2 src={RL} />
                                        {/* <h3 className={!dis2 ? 'hidden' : 'yes'}>Players</h3> */}
                                </Link>
                                {/* <button onClick={() => redirect()}>Store</button> */}
                            </FlexCenterTop>
                            </NavItem>
                        </FlexCenterColumn>
                    </NavDiv>
                    </Collapse>
                </ConditionalNav>
            {/*  */}

            <DiscordDiv>
                <a href='https://discord.gg/dXUFew7Gvn' target="_blank">
                    <HelmetImg src={Helmet} />
                </a>
                <p className='msgdisc'>Join our discord!</p>
            </DiscordDiv>
            <FlexCenter>
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
                {/* <button onClick={() => redirect()}>Store</button> */}
            </FlexCenter>
        </HeaderDiv>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, {  })(Header)