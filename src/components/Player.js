import React from 'react'
import { useLocation } from 'react-router-dom'
import ChrisVid from '../styles/imgs/ChrisVid.mp3'
import Twitch from '../styles/imgs/icons8-twitch-64.png'

const Player = () => {
    const location = useLocation()

    const redirectFunc = link => {
        const win = window.open(link, '_blank')
        win.focus()
    }

    return (
        <div className='playercont'>
            <div className='playerhead'>
                <h1 className='spiffy'>{location.pathname.slice(8, location.pathname.length)}</h1>
                <img src={Twitch} className='twitch' onClick={() => redirectFunc('https://www.twitch.tv/spiffy25')} />
                <img className='youtube' onClick={() => redirectFunc('https://www.youtube.com/channel/UCWHQov7eR9N1vHq6jq9gWwQ')} src="https://img.icons8.com/dusk/64/000000/youtube--v2.png"/>
            </div>
            <iframe width="420" height="250"
                src="https://www.youtube.com/embed/tPoWuqFEYXs?autoplay=1&mute=1&loop=1">
            </iframe>
        </div>
    )
}

export default Player