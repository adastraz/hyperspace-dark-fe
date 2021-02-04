import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import ChrisVid from '../styles/imgs/ChrisVid.mp3'
import Twitch from '../styles/imgs/icons8-twitch-64.png'
import Raze from '../styles/imgs/raze.png'
import Omen from '../styles/imgs/omen.PNG'
import Diamond2 from '../styles/imgs/diamond2.png'

const Player = () => {
    const location = useLocation()

    const redirectFunc = link => {
        const win = window.open(link, '_blank')
        win.focus()
    }

    // const ytarr = ['https://www.youtube.com/embed/Uqnu9EAoSwA', 'https://www.youtube.com/embed/tPoWuqFEYXs']

    // const [ytplay, setYtplay] = useState(0)

    return (
        <div className='playercont'>
            <div className='playerhead'>
                <h1 className='spiffy'>{location.pathname.slice(8, location.pathname.length)}</h1>
                <img src={Twitch} className='twitch' onClick={() => redirectFunc('https://www.twitch.tv/spiffy25')} />
                <img className='youtube' onClick={() => redirectFunc('https://www.youtube.com/channel/UCWHQov7eR9N1vHq6jq9gWwQ')} src="https://img.icons8.com/dusk/64/000000/youtube--v2.png"/>
                <img src={Diamond2} className='twitch' />
            </div>
            <div className='sideflex2'>
                <iframe width="420" height="250" className='video'
                    src={`https://www.youtube.com/embed/tPoWuqFEYXs?autoplay=1&mute=1&loop=1`}>
                </iframe>
                {/* <iframe width="420" height="250" className='video'
                    src={`${ytarr[ytplay]}?autoplay=1&mute=1&loop=1`}>
                </iframe> */}
                {/* <button onClick={() => setYtplay(ytplay+1)}>+</button>
                <button onClick={() => setYtplay(ytplay-1)}>-</button> */}
                <div>
                    <div>
                        <h1>Agents</h1>
                        <img src={Omen} className='agents' />
                        <img src={Raze} className='agents' />
                    </div>
                    <div>
                        <h1>Other Games</h1>
                        <img src='https://www.ssbwiki.com/images/b/b6/Super_Smash_Bros._for_Nintendo_Switch.svg' className='agents' />
                    </div>
                    <div>
                        <h1>Favorite Content Creators</h1>
                        <div>
                            <img src='https://yt3.ggpht.com/ytc/AAUvwng9TBop2ptnnJjbwIcuOKKYI4oHIVqqzW431RbOXg=s88-c-k-c0x00ffffff-no-rj' className='agents' />
                            <p>FlexNinja</p>
                        </div>
                        <div>
                            <img src='https://yt3.ggpht.com/ytc/AAUvwnhBy7IUg907xKlZtotxZII_gJs8tn0VgF0XKhNj=s176-c-k-c0x00ffffff-no-rj-mo' className='agents' />
                            <p>Flights</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player