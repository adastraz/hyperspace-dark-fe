import styled from 'styled-components'
import { Font } from '../'
import Background from '../imgs/background.jpg'

export const BGIMG = styled.img`
    width: 80%;
    // padding: 3rem;
    margin: 2.5rem 0 5rem 0;
    border: 10px double black;
    border-radius: 1rem;
    opacity: 1;
    transition: opacity .25s ease-in-out;
    -moz-transition: opacity .25s ease-in-out;
    -webkit-transition: opacity .25s ease-in-out;
    :hover {
        opacity: 0.5;
    }
`

export const Container = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 8rem;
`

export const Title = styled.h1`
    text-decoration: none;
    color: black;
    // margin-left: 7rem;
    font-family: 'Syncopate', sans-serif;
    font-weight: bold;
    color: white;
    font-size: 3rem;
    padding: 1.5rem 7rem;
    background-position: left bottom;
    background-image: url('https://cdn.discordapp.com/attachments/798998238383439903/799007026831294564/discord-1.jpg');
    // border: 5px solid blue;
    border-radius: 2rem;
`

export const Line = styled.hr`
    width: 40%;
    color: yellow
`

export const NewsBut = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    justify-content: space-around;
    align-items: center;
    margin: 3rem 0;
    min-height: 10rem;
`

export const Head = styled.h1`
    padding-bottom: 1rem;
    font-weight: bold;
    font-size: 1.75rem;
    padding-top: 2rem;
`

export const PTag = styled.p`
    padding: 2rem;
    color: black;
    font-size: 1.5rem;
`