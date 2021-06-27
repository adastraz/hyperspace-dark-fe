import styled from 'styled-components'

export const SpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #333333;
    @media(max-width: 1500px) {
        display: block;
        margin: 0 auto
    }
`