import React, { useState } from 'react' 
import {
  Hyperspace,
  Container,
  Origins,
  Desc,
  Bio,
  Name,
  CrewCard,
  CrewCardR,
  NameCard,
  FleetAdmiral,
  Admiral,
  Commander,
  CrewContainer,
  Crew,
  Line
} from '../styles/About'

const About = () => {
  const [isbio, setIsbio] = useState(false)

  const CrewMembers = [
    {
      name: 'Tover',
      bio: "My name is Richie AKA Tover, I'm one of the founders of HD. I have a long history of eSports experience that led me to want to develop my own org and find like minded individuals to do so with. I have a passion for FPS games and dabble in other areas. My main areas of focus for the org are eSports development, finances, and business relations. I've loved watching this org grow and blossom into what it is now and I hope to help inspire everyone else to give their all to continue on the path we have all started down.",
      rank: 'fa'
    },
    {
      name: 'BraveLittleTank',
      bio: "My name is Jake, aka BraveLittleTank. I am a Co-Owner and General Manager of Hyperspace Dark. While I have a hand in everything going on at HD, my focus is on the eSports side of things helping create, manage, and help grow our existing and future eSports teams. My goal is to help everyone that comes through HD as a player, coach, admin, or fan to have a positive experience and that we have helped them become a better person online or offline in some way. Together as one, we forge our way #IntoTheDark",
      rank: 'fa'
    },
    {
      name: 'Tethys',
      bio: "Hey I am Tethys, and I am one of the founders of HD. I work with a focus on the development of our organization and the growth of our community! I have a long background in Gaming, starting primarily with FPS shooters and starting the whole addiction off on an NES and PS2. Im an Avid Star Wars fan, and nerd in all categories, and love to create a fun atmosphere at Hyperspace Dark where everyone feels welcomed and Valued. We hope to develop our Organization to fit the needs and wants of our valued gamers and hope to share all our good vibes with everyone who joins our community!",
      rank: 'fa'
    },
    {
      name: 'IndigoFlamingo',
      bio: "Indigoflamingo coming in hot. Interested in competition, lore or casual play of anything pokemon? I'm your man. Im always looking to delve deeper in the expansive world of pokemon... and im taking it to Hyperspace! Come chat, trade and enter giveaways all hosted and administrated by me. Please reach out if you wanna talk anything pokemon. See you around!",
      rank: 'a'
    },
    {
      name: 'Veo',
      bio: "Yo. I'm Veo and i'm the head admin for the HD discord. I've got 5 years under my belt running discord servers, and even more running other online communities. I'm here to help grow and shape the community discord server and turn this into the awesome group of gamers it was meant to be! My inbox is always open for new ideas and possibilities, so hmu if you want to talk about the discord or play some rocket league!",
      rank: 'a'
    },
    {
      name: 'StevyJoe',
      bio: "Stevyjoe is what I use for my in game name, I tried my hand at playing competitive Valorant for a while but since graduating college, I decided to focus on doing graphic design. Im so glad to be a part of Hyperspace. If you need anything, or have ideas for some graphics,  feel free to hit me up!",
      rank: 'c'
    },
    {
      name: 'SquallOwl',
      bio: "My IGN is SquallOwl but everyone calls me either Owl or Drew, I started at HD as a player for the Rocket League team and have over time moved into a managerial role for the team! My aim is to keep the team as organized as possible and to help them along their journey to becoming top level players in anyways possible. I've always been big into competitive gaming and soccer, which has made rocket league the perfect game for me, although I'm also a fan of other games such as Apex Legends, Outer Wilds, osu, and many more.",
      rank: 'c'
    },
    {
      name: 'Astro',
      bio: "Hello and welcome to my very first public website to be used by human users! You can call me Astro, or Tyler. Like many young adults, I opted out of traditional education to pursue code school, which has given me the tools to build the site you see from the ground up. Some of my favorite interests that led me to programming are gaming, Star Wars, and robots! Hope you enjoy the site!",
      rank: 'c'
    },
  ]

  const [viewCrew, setViewCrew] = useState(undefined)

  const viewer = member => {
    setViewCrew(member)
    setIsbio(true)
  }

  const Rank = (member, button) => {
    switch(member.rank) {
      case 'fa' :
        return (
          <NameCard className={button ? 'button type3': ''} onClick={() => viewer(member)} key={member.name}>
            <Name>{member.name}</Name>
            <FleetAdmiral>Fleet-Admiral</FleetAdmiral>
          </NameCard>
        )
      case 'a' :
        return (
          <NameCard className={button ? 'button type3': ''} onClick={() => viewer(member)} key={member.name}>
            <Name>{member.name}</Name>
            <Admiral>Admiral</Admiral>
          </NameCard>
        )
      default :
        return (
          <NameCard className={button ? 'button type3': ''} onClick={() => viewer(member)} key={member.name}>
            <Name>{member.name}</Name>
            <Commander>Commander</Commander>
          </NameCard>
        )
    }
  }

  return (
    <>
      <Container>
        <Hyperspace>
          <Origins>Origins of Hyperspace</Origins>
          <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Desc>
        </Hyperspace>
        <CrewContainer>
          <Line />
          <Crew>⚓Admirals and Commanders⚓</Crew>
          <div className='nonactivebio'>
            {viewCrew && isbio ?
              <CrewCard className={isbio ? 'activebio': 'nonactivebio'} onClick={() => setIsbio(!isbio)}>
                {Rank(viewCrew, false)}
                <Bio>{viewCrew.bio}{viewCrew.name === 'Astro' ? <a className='tywes' href='https://tywes.com' rel="noreferrer" target='_blank'> Here is a link to my personal site! :)</a> : ''}</Bio> 
              </CrewCard> :
              ''
            }
            <div className='crewmatebuttons'>
              {
                CrewMembers.map(mem => (
                  Rank(mem, true)
                ))
              }
            </div>
          </div>
        </CrewContainer>
      </Container>
    </>
  )
}

export default About


// <CrewCard>
//             <NameCard>
//               <Name>Tover</Name>
//               <FleetAdmiral>Fleet-Admiral</FleetAdmiral>
//             </NameCard>
//             <Bio>My name is Richie AKA Tover, I'm one of the founders of HD. I have a long history of eSports experience that led me to want to develop my own org and find like minded individuals to do so with. I have a passion for FPS games and dabble in other areas. My main areas of focus for the org are eSports development, finances, and business relations. I've loved watching this org grow and blossom into what it is now and I hope to help inspire everyone else to give their all to continue on the path we have all started down.</Bio>
//           </CrewCard>
//           <CrewCardR>
//             <NameCard>
//               <Name>Tethys</Name>
//               <FleetAdmiral>Fleet-Admiral</FleetAdmiral>
//             </NameCard>
//             <Bio>Hey I am Tethys, and I am one of the founders of HD. I work with a focus on the development of our organization and the growth of our community! I have a long background in Gaming, starting primarily with FPS shooters and starting the whole addiction off on an NES and PS2. Im an Avid Star Wars fan, and nerd in all categories, and love to create a fun atmosphere at Hyperspace Dark where everyone feels welcomed and Valued.</Bio>
//           </CrewCardR>
//           <CrewCard>
//             <NameCard> 
//               <Name>BraveLittleTank</Name>
//               <FleetAdmiral>Fleet-Admiral</FleetAdmiral>
//             </NameCard>
//             <Bio>My name is Jake, aka BraveLittleTank. I am a Co-Owner and General Manager of Hyperspace Dark. While I have a hand in everything going on at HD, my focus is on the eSports side of things helping create, manage, and help grow our existing and future eSports teams. My goal is to help everyone that comes through HD as a player, coach, admin, or fan to have a positive experience and that we have helped them become a better person online or offline in some way. Together as one, we forge our way #IntoTheDark</Bio>
//           </CrewCard>
//           <CrewCardR>
//             <NameCard>
//               <Name>Veo</Name>
//               <Admiral>Admiral</Admiral>
//             </NameCard>
//             <Bio>Yo. I'm Veo and i'm the head admin for the HD discord. I've got 5 years under my belt running discord servers, and even more running other online communities. I'm here to help grow and shape the community discord server and turn this into the awesome group of gamers it was meant to be! My inbox is always open for new ideas and possibilities, so hmu if you want to talk about the discord or play some rocket league!</Bio>
//           </CrewCardR>
//           <CrewCard>
//             <NameCard>
//               <Name>IndigoFlamingo</Name>
//               <Admiral>Admiral</Admiral>
//             </NameCard>
//             <Bio>IndigoFlamingo Coming in hot. Interested in competition, lore or casual play of anything pokemon? I'm your man. Im always looking to delve deeper in the expansive world of pokemon... and im taking it to Hyperspace! Come chat, trade and enter giveaways all hosted and administrated by me. Please reach out if you wanna talk anything pokemon. See you around!</Bio>
//           </CrewCard>
//           <CrewCardR>
//             <NameCard>
//               <Name>StevyJoe</Name>
//               <Commander>Commander</Commander>
//             </NameCard>
//             <Bio>Stevyjoe is what I use for my in game name, I tried my hand at playing competitive Valorant for a while but since graduating college, I decided to focus on doing graphic design. Im so glad to be a part of Hyperspace. If you need anything, or have ideas for some graphics,  feel free to hit me up!</Bio>
//           </CrewCardR>
//           <CrewCard>
//             <NameCard>
//               <Name>SquallOwl</Name>
//               <Commander>Commander</Commander>
//             </NameCard>
//             <Bio>My IGN is SquallOwl but everyone calls me either Owl or Drew, I started at HD as a player for the Rocket League team and have over time moved into a managerial role for the team! My aim is to keep the team as organized as possible and to help them along their journey to becoming top level players in anyways possible. I've always been big into competitive gaming and soccer, which has made rocket league the perfect game for me</Bio>
//           </CrewCard>
//           <CrewCardR>
//             <NameCard>
//               <Name>Astro</Name>
//               <Commander>Commander</Commander>
//             </NameCard>
//             <Bio>Hello and welcome to my very first public website to be used by human users! You can call me Astro, or Tyler. Like many young adults, I opted out of traditional education to pursue code school, which has given me the tools to build the site you see from the ground up. Some of my favorite interests that led me to programming are gaming, Star Wars, and robots! Hope you enjoy the site! :) <a className='tywes' href='https://tywes.com' rel="noreferrer" target='_blank'>Here's a link to my portfolio.</a></Bio>
//           </CrewCardR>