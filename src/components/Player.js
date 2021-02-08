import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Twitch from '../styles/imgs/icons8-twitch-64.png'
import Raze from '../styles/imgs/raze.png'
import Omen from '../styles/imgs/omen.PNG'
import Diamond2 from '../styles/imgs/diamond2.png'
import axios from 'axios'
import { connect } from 'react-redux'

const Player = props => {
    const location = useLocation()
    const { name } = useParams()
    const [player, setPlayer] = useState({})
    const [details, setDetails] = useState({})
    const [agents, setAgents] = useState([])
    const [creators, setCreators] = useState([])
    const [othergames, setOthergames] = useState([])
    const [ytlinks, setYtlinks] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3300/api/viewuser/${name}/username`)
            .then(res => {
                setPlayer(res.data[0])
                if (res.data[0].game === 'valorant') {
                    axios.get(`http://localhost:3300/api/viewuser/${res.data[0].id}/details/valorant`)
                        .then(res2 => {
                            setDetails(res2.data.user_details)
                            setAgents(res2.data.user_agents)
                            setCreators(res2.data.user_creators)
                            setOthergames(res2.data.user_othergames)
                            setYtlinks(res2.data.user_ytlinks)
                        })
                }
            })
    }, [])

    useEffect(() => {
        console.log({
            details: details,
            creators: creators,
            player: player,
            othergames: othergames,
            ytlinks: ytlinks,
            agents: agents
        })
    }, [])

    const redirectFunc = link => {
        const win = window.open(link, '_blank')
        win.focus()
    }

    // const ytarr = ['https://www.youtube.com/embed/Uqnu9EAoSwA', 'https://www.youtube.com/embed/tPoWuqFEYXs']

    const [ytplay, setYtplay] = useState(0)

    return (
        <div className='playercont'>
            <div className='playerhead'>
                <h1 className='spiffy'>{player.username}</h1>
                {details.twitch_link !== null ? 
                    <img src={Twitch} className='twitch' onClick={() => redirectFunc(details.twitch_link)} /> :
                    ''
                }
                {details.youtube_link !== null ? 
                    <img className='youtube' onClick={() => redirectFunc(details.youtube_link)} src="https://img.icons8.com/dusk/64/000000/youtube--v2.png"/> :
                    ''
                }
                {details.rank !== null ? 
                    <img src={Diamond2} className='twitch' alt={details.rank} /> :
                    ''
                }
            </div>
            <div className='sideflex2'>
                {ytlinks.length > 0 ? 
                    <iframe width="500" height="250" className='video'
                        src={`${ytlinks[ytplay].youtubelinks}?autoplay=1&mute=1&loop=1`}>
                    </iframe> : 
                    ''
                }
                {/* <iframe width="420" height="250" className='video'
                    src={`${ytarr[ytplay]}?autoplay=1&mute=1&loop=1`}>
                </iframe> */}
                {/* <button onClick={() => changeVid('+')}>+</button>
                <button onClick={() => changeVid('-')}>-</button> */}
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