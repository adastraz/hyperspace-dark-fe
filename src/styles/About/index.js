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
  border-radius: 1rem;
  // background: rgb(163,34,195);
  // background: radial-gradient(circle, rgba(163,34,195,0.8995973389355743) 0%, rgba(45,253,160,0.87718837535014) 100%);
  // background: rgb(45,253,160);
  // background: radial-gradient(circle, rgba(45,253,160,0.6418942577030813) 0%, rgba(0,0,0,0.8911939775910365) 100%);
`

export const CrewContainer = styled.div`
  padding-top: 5rem;
  margin: 5rem 0;
`

export const Origins = styled.h1`
  font-size: 3rem;
  text-align: center;
  font-weight: bold;
  color: mediumpurple;
  margin-bottom: 2rem;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 white;
`

export const Crew = styled.h1`
  font-size: 2.5rem;
  color: black;
  font-weight: bold;
  padding-top: 5rem;
  text-align: center;
  text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 lightblue;
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
  color: white;
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
  margin-top: .5rem
`

export const CrewCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 7rem;
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

