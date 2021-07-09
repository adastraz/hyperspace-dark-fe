import styled from 'styled-components'

export const Hyperspace = styled.div`
  display: flex;
  flex-direction: column;
  height: 10rem;
  justify-content: space-between;
`

export const Container = styled.div`
  width: 65%;
  padding: 3rem;
  margin: 5rem;
  // border-radius: 1rem;
  // background: rgb(51,51,51);
  // background: linear-gradient(90deg, rgba(51,51,51,1) 0%, rgba(105,105,105,1) 30%, rgba(105,105,105,1) 50%, rgba(105,105,105,1) 70%, rgba(51,51,51,1) 100%);
`

export const CrewContainer = styled.div`
  padding-top: 5rem;
  margin: 5rem 0;
`

export const Origins = styled.h1`
  font-size: 3rem;
  text-align: center;
  font-weight: bold;
  color: white;
  margin-bottom: 2rem;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 white;
`

export const Crew = styled.h1`
  font-size: 2.5rem;
  color: black;
  font-weight: bold;
  padding-top: 5rem;
  text-align: center;
  // text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 lightblue;
`

export const Desc = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: white;
  padding 0 5rem;
  margin: 2rem 5rem;
`

export const Bio = styled.p`
  font-size: 1.25rem;
  color: black;
  width: 70%;
  text-align: center;
  line-height: 2rem;
`

export const Line = styled.hr`
  background-color: black;
  width: 50%;
  text-align: center;
`

export const Name = styled.h3`
  font-size: 2rem;
  color: white;
  text-shadow: -1px -1px 0 black, 1px -1px 0, -1px 1px 0 black, 1px 1px 0 black;
  text-align: center
`

export const FleetAdmiral = styled.p`
  color: #93e9be;
  text-size: .75rem;
  text-align: center;
  margin-top: .5rem
`
export const Admiral = styled.p`
  color: red;
  text-size: .75rem;
  text-align: center;
  margin-top: .5rem
`
export const Commander = styled.p`
  color: lightblue;
  text-size: .75rem;
  text-align: center;
  margin-top: .5rem;
  // text-shadow: -1px -1px 0 black, 1px -1px 0, -1px 1px 0 black, 1px 1px 0 white;

`

export const CrewCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 7rem;
  overflow:hidden;
  transition:transform 0.3s ease-out; 
  height:auto;
  transform:scaleY(1); 
  transform-origin:top; 
`

export const CrewCardR = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  align-items: center;
  margin: 7em;
`

export const NameCard = styled.div`
  width: 25%;
  display: block;
  margin: 1rem;
`

