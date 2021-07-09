import styled from 'styled-components'
import { Button } from 'reactstrap'

export const TournyButton = styled(Button)`
  width: 22.5rem;
  background: rgb(45,253,160);
  background: radial-gradient(circle, rgba(45,253,160,0.6418942577030813) 0%, rgba(0,0,0,0.8911939775910365) 100%);
  padding: 0 1rem 1rem 1rem; 
  margin-left: 1rem;
  margin-bottom: 1rem;
  :hover {
    // background-color: #696969
    color: black;
    background: rgb(163,34,195);
    background: radial-gradient(circle, rgba(163,34,195,0.8995973389355743) 0%, rgba(45,253,160,0.87718837535014) 100%);
  }
`

export const TournyName = styled.h1`
  font-size: 1rem;
  border-bottom: 1px solid white;
`

export const OrgImg = styled.img`
  width: 3.5rem;
  border-radius: 1rem;
`

export const TournyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center
`