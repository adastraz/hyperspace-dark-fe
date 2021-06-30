import styled from 'styled-components'
import { Button } from 'reactstrap'

export const TournyButton = styled(Button)`
  width: 22.5rem;
  background-color: #000a04;
  padding: 0 1rem 1rem 1rem; 
  margin-left: 1rem;
  margin-bottom: 1rem;
  :hover {
    background-color: #696969
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