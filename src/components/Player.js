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
        axios.get(`https://hdsocial.herokuapp.com/api/viewuser/${name}/username`)
            .then(res => {
                setPlayer(res.data[0])
                if (res.data[0].game === 'valorant') {
                    axios.get(`https://hdsocial.herokuapp.com/api/viewuser/${res.data[0].id}/details/valorant`)
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
                {details ?
                    details.twitch_link !== null ?
                        <img src={Twitch} className='twitch' onClick={() => redirectFunc(details.twitch_link)} /> :
                        ''
                    :
                    ''
                }
                {details ?
                    details.youtube_link !== null ?
                        <img className='youtube' onClick={() => redirectFunc(details.youtube_link)} src="https://img.icons8.com/dusk/64/000000/youtube--v2.png"/> :
                        ''
                    :
                    ''
                }
                {details ? 
                    <img src={Diamond2} className='twitch' alt={details.rank} /> :
                    ''
                }
            </div>
            <div className='sideflex2'>
                {ytlinks.length > 0 ? 
                    <iframe width="500" height="250" className='video'
                        src={`${ytlinks[ytplay].youtubelinks}?autoplay=1&mute=1&loop=1`}>
                    </iframe> : 
                    <p>No vidoes listed</p>
                }
                {props.user.username === name ?
                    <button>Add youtube links</button> :
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
                        {agents.length > 0 ? 
                            agents.map(agent => (
                                <>
                                    <p>{agent.agent_name}</p>
                                </>
                            )) : 
                        <p>No agents listed</p>
                        }
                        {props.user.username === name ?
                            <button>Add agents</button> :
                            ''
                        }
                    </div>
                    <div>
                        <h1>Other Games</h1>
                        {othergames.length > 0 ? 
                            othergames.map(game => (
                                <>
                                    <p>{othergames.name}</p>
                                    <img src={othergames.img_link} />
                                </>
                            )) :
                            <p>No games listed</p>
                        }
                        {props.user.username === name ?
                            <button>Add games</button> :
                            ''
                        }
                    </div>
                    <div>
                        <h1>Favorite Content Creators</h1>
                        {creators.length > 0 ?
                            creators.map(creator => (
                                <div onClick={() => redirectFunc(creator.link)}>
                                    <p>{creator.name}</p>
                                    <img src={creator.img} />
                                </div>
                            )) :
                            <p> No favorite creators listed</p>
                        }
                        {props.user.username === name ?
                            <button>Add creators</button> :
                            ''
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        user: state.user,
        // friends: state.friends,
        // users: state.users,
        posts: state.posts
    }
}

export default connect(mapStateToProps, {  })(Player)