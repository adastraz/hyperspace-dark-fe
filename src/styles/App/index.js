import styled from 'styled-components'

export const SpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
    background: rgb(255,248,248);
    background: linear-gradient(0deg, rgba(255,248,248,1) -50%, rgba(51,51,51,1) 100%);
    @media(max-width: 1500px) {
        display: block;
        margin: 0 auto
    }
`