import styled from 'styled-components'
import { Font } from '../'
import { Link } from 'react-router-dom'
import { Navbar, NavbarToggler, Nav } from 'reactstrap'

export const HD = styled.h1`
    font-family: ${Font.main};
    text-decoration: none;
    color: black;
    font-size: ${Font.size.header};
    @media(max-width: 1800px) {
        font-size: 2rem;
    }
    @media(max-width: 1500px) {
        margin-top: 5rem;
        margin-left: 5rem;
        font-size: ${Font.size.header}
    }
`

export const StoreButton = styled.button`
    font-family: ${Font.main};
    padding .3rem .5rem;
    width: 7rem;
    @media(max-width: 1500px) {
        display: none;
    }
`

export const StoreButton2 = styled.button`
    font-family: ${Font.main};
    padding .3rem .5rem;
    width: 7rem;
    margin-bottom: 3rem
`

export const TopDown = styled(Link)`
    margin: auto 0;
    text-decoration: none !important;
`

export const FlexCenter = styled.div`
    display: flex;
    text-align: center;
    jusitfy-content: space-evenly
`
export const FlexCenterColumn = styled.div`
    display: flex;
    text-align: center;
    margin: 0 auto;
    flex-direction: column
`
export const FlexCenterTop = styled.div`
    display: flex;
    text-align: center;
    jusitfy-content: space-between;
    margin: 4rem 0;
`

export const HeaderDiv = styled.div`
    display: flex;
    margin-top: 1rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media (max-width: 1500px) {
        flex-direction: column;
        justify-content: space-evenly;
    }
`

export const GameLink = styled(Link)`
    width: 25rem;
    padding-left: 4rem
`

export const DiscordDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgb(0,41,122);
    background: linear-gradient(0deg, rgba(0,41,122,1) 0%, rgba(245,249,248,1) 21%, rgba(149,58,164,1) 47%, rgba(210,34,183,1) 72%, rgba(253,187,45,1) 90%);
    border-radius: 3rem;
    padding: 1.25rem;
    border: 1rem double white;
    @media(max-width: 1500px) {
        display: none
    }
`

export const DiscordDiv2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgb(0,41,122);
    background: linear-gradient(0deg, rgba(0,41,122,1) 0%, rgba(245,249,248,1) 21%, rgba(149,58,164,1) 47%, rgba(210,34,183,1) 72%, rgba(253,187,45,1) 90%);
    border-radius: 3rem;
    margin: 1.5rem 2.5rem 0 auto;
    padding: 1.25rem;
    border: 1rem double white;
`

export const HelmetImg = styled.img`
    width: 100px;
    position: relative;
    left: .5rem
    // @media(max-width: 1500px) {
    //     position: absolute;
    //     padding: 2rem auto;
    // }
`

export const RLlogo = styled.img`
    margin: -3.5rem 3rem;
    max-width: 150px;
    @media(max-width: 1500px) {
        display: none
    }
`

export const RegLogo = styled.img`
    max-width: 150px;
    max-height: 25px;
    margin: .80rem 3rem .2rem 3rem;
    @media(max-width: 1500px) {
        display: none
    }
`

export const MainLogo = styled.img`
    max-width: 150px;
    margin: auto 1.5rem;
    @media(max-width: 1800px) {
        max-width: 100px;
    }
    @media(max-width: 1500px) {
        margin-top: 5rem;
        max-width: 150px;
    }
`

export const RegLogo2 = styled.img`
    max-width: 150px;
    max-height: 25px;
    margin: .80rem 3rem .2rem 3rem;
`

export const RLlogo2 = styled.img`
    margin: -3.5rem 3rem;
    max-width: 150px;
    
`

export const ConditionalNav = styled(Navbar)`
    display: none;
    text-align: center;
    margin: 5rem auto;
    @media(max-width: 1500px) {
        display: block;
    }
`

export const ConditionalNavToggler = styled(NavbarToggler)`
    display: none;
    text-align: center;
    align-items: center;
    @media(max-width: 1500px) {
        display: block
    }
`

export const NavDiv = styled(Nav)`
    display: flex;
    justify-content: space-evenly;
    height: 65rem;
    align-items: center;
    width: 50rem
`