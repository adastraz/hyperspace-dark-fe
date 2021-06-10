import styled from 'styled-components'

export const PlayerContainer = styled.div`
    width: 100%;
    margin: 2rem
`

export const PlayersDiv = styled.div`
    margin: 0rem 3rem -20rem 3rem;
    display: flex;
    // flex-direction: column;
    justify-content: space-around;
    width: 70%;
    // height: 25rem;
    @media(max-width: 1500px) {
        margin: 0 auto;
        width: 90%;
    }
    @media(max-width: 850px) {
        flex-direction: column;
    }
`

export const PlayerDiv = styled.div`
    margin: 4rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-evenly;
    width: 70%;
    @media(max-width: 1500px) {
        margin: 0 auto;
        width: 90%;
    }
    @media(max-width: 1000px) {
        margin-bottom: 4rem;
    }
`

export const Divider = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: space-evenly;
    @media(max-width: 1500px) {
        margin: 0 auto;
    }
    @media(max-width: 850px) {
        margin: 0
    }
`

export const Lineup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 10rem 0;
    font-family: 'Rajdhani', sans-serif;
    @media(max-width: 850px) {
        margin: 4rem 0;
    }
`

export const Lineup2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 10rem 0;
    font-family: 'Rajdhani', sans-serif;
    @media(max-width: 850px) {
        margin: 4rem 0
    }
`

export const PlayerDeets = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    @media(max-width: 850px) {
        flex-direction: column;
    }
`

export const Clips = styled.div`
    @media(max-width: 850px) {
        display: flex;
        justify-content: center
    }
`

export const PlayerHead = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
    @media(max-width: 710px) {
        flex-direction: column;
        align-items: center
    }
`

export const Username = styled.h1`
    color: #edaddd;
    font-family: 'Luckiest Guy', cursive;
    font-size: 5rem;
    @media(max-width: 710px) {
        margin-bottom: 1rem
    }
`

export const Imp = styled.div`
    margin-bottom: 3rem;
    @media(max-width: 710px) {
        margin-bottom: 1rem;
    }
`