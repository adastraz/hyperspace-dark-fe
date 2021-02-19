import styled from 'styled-components'
import { Font, Color } from '../'
import { DropdownToggle } from 'reactstrap'

export const Container = styled.div`
    width: 25%;
    height: 70%;
    text-align: center;
    border-radius: 2rem;
    position: fixed;
    overflow-y: auto;
    right: 0;
    background-color: black;
    margin-right: 1rem;
    margin-bottom: 2rem;
    padding: 1rem;
    border: 10px double mediumpurple
`

export const SelectorTitle = styled(DropdownToggle)`
    margin-top: 1.5rem;
    background-color: black;
    color:mediumpurple;
    border: 3px solid black;
    font-family: 'Syncopate', sans-serif;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    :hover {
        border: 3px solid white;
        color: black;
        background-color: mediumpurple
    }
`

export const SignInput = styled.input`
    width: 15rem;
    margin: .3rem
`

export const RouteButtonDiv = styled.div`
    display: flex;
    justify-content: center;
`

export const RouteButton = styled.button`
    background-color: black;
    padding: 1rem;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    :focus{
        outline: none
    }
`