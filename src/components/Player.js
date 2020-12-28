import React from 'react'
import { useLocation } from 'react-router-dom'
import ChrisVid from '../styles/imgs/ChrisVid.mp3'
import Twitch from '../styles/imgs/icons8-twitch-64.png'
import Raze from '../styles/imgs/raze.png'
import Omen from '../styles/imgs/omen.PNG'

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
            <div className='sideflex2'>
                <iframe width="420" height="250" className='video'
                    src="https://www.youtube.com/embed/tPoWuqFEYXs?autoplay=1&mute=1&loop=1">
                </iframe>
                <table className='table'>
                    <tr className='tr'>
                        <th className='td'>Agents</th>
                        <th className='td'>Name</th>
                        <th className='td'>Age</th>
                    </tr>
                    <tr className='tr'>
                        <td className='td'><img src={Raze} className='agents' /></td>
                        <td className='td'>Chris</td>
                        <td className='td'>20</td>
                    </tr>
                    <tr className='tr'>
                        <td className='td'><img src={Omen} className='agents' /></td>
                        <td className='td'></td>
                        <td className='td'></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Player