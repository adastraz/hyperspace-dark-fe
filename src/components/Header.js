import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../styles/imgs/Hyperspace_logo-HD.png'
import Valorant from '../styles/imgs/valorant-logo.png'
import RL from '../styles/imgs/rl-logo.png'
import Helmet from '../styles/imgs/Hyperspace_logo-Helmet-2.png'
import Discord from '../styles/imgs/discord.png'
import Facebook from '../styles/imgs/facebook.png'
import Twitter from '../styles/imgs/twitter.png'
import Instagram from '../styles/imgs/instagram.png'
import { connect } from 'react-redux'
import history from '../utils/history'
import { HD, 
    SocialDiv, 
    TopDown, 
    FlexCenter, 
    FlexCenterMain, 
    FlexCenter2, 
    HeaderDiv, 
    DiscordImg, 
    SocialImgs, 
    DiscordDiv2, 
    HelmetImg, 
    RLlogo, 
    RegLogo2, 
    RLlogo2, 
    MainLogo, 
    ConditionalNav, 
    ConditionalNavToggler, 
    NavDiv, 
    FlexCenterColumn, 
    FlexCenterTop, 
    GameLink, 
    StoreButton, 
    StoreButton2, 
    UL 
} from '../styles/Header'
import { NavItem } from 'reactstrap'
import Sidebar from './sidebar/Sidebar'

const Header = () => {
    const [dis, setDis] = useState(false)
    const [dis2, setDis2] = useState(false)
    // const location = useLocation()

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
        <div>
            <HeaderDiv>
                <div>
                    <FlexCenterMain>
                        <TopDown to='/'>
                            <MainLogo src={Logo} />
                        </TopDown>
                        <TopDown to='/' className='nav'>
                            <HD>Hyperspace Dark</HD>
                        </TopDown>
                    </FlexCenterMain>
                </div>

                {/*  */}
                    <ConditionalNav color="faded" light>
                        <ConditionalNavToggler onClick={toggleNavbar} />
                        <UL isOpen={!collapsed} navbar>
                        <NavDiv navbar>
                            <FlexCenterColumn>
                                <NavItem>
                                    <DiscordDiv2 onClick={redirectFunc}>
                                        <a href='https://discord.gg/dXUFew7Gvn' rel="noreferrer" target="_blank">
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
                    <SocialDiv>
                        <a href='https://discord.gg/dXUFew7Gvn' rel="noreferrer" target="_blank">
                            <DiscordImg src={Discord}/>
                        </a>
                        <a href='https://www.facebook.com/HyperspaceDark/' rel="noreferrer" target="_blank">
                            <SocialImgs src={Facebook}/>
                        </a>
                        <a href='https://www.instagram.com/hyperspacedark/' rel="noreferrer" target="_blank">
                            <SocialImgs src={Instagram}/>
                        </a>
                        <a href='https://twitter.com/HyperspaceDark' rel="noreferrer" target="_blank">
                            <SocialImgs src={Twitter}/>
                        </a>
                    </SocialDiv>
                <FlexCenter2>
                    {/* <Link 
                        to='/valorant' className='nav' onMouseOver={() => setDis(!dis)}
                        onMouseOut={() => setDis(!dis)}>
                            <RegLogo src={Valorant} /> */}
                            {/* <h3 className={!dis ? 'hidden' : 'yes'}>Players</h3> */}
                    {/* </Link> */}
                </FlexCenter2>
            </HeaderDiv>
            {/* <HDLine /> */}
            <FlexCenter className='gradi'>
                <Link 
                    to='/rl' className='nav' onMouseOver={() => setDis2(!dis2)}
                    onMouseOut={() => setDis2(!dis2)}>
                        <RLlogo src={RL} />
                </Link>
                <StoreButton className='button type3' id='store' onClick={() => redirect()}>Store</StoreButton>
                <Link to='/about'><StoreButton className='button type3' id='abtcrew'>About</StoreButton></Link>
                <a href="https://forms.gle/xStHU4aEVnnwaEYe6" rel="noreferrer" target="_blank"><StoreButton className='button type3' id='join'>Join our Crew</StoreButton></a>
            </FlexCenter>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, {  })(Header)