import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Twitch from '../styles/imgs/icons8-twitch-64.png'
import Diamond2 from '../styles/imgs/diamond2.png'
import axios from 'axios'
import { connect } from 'react-redux'

import Raze from '../styles/imgs/raze.png'
import Yoru from '../styles/imgs/yoru.png'
import Cypher from '../styles/imgs/cypher.png'
import Viper from '../styles/imgs/viper.png'
import Breach from '../styles/imgs/breach.png'
import Pheonix from '../styles/imgs/pheonix.png'
import Jett from '../styles/imgs/jett.png'
import Reyna from '../styles/imgs/reyna.png'
import Sova from '../styles/imgs/sova.png'
import Killjoy from '../styles/imgs/killjoy.png'
import Omen from '../styles/imgs/omen.PNG'
import Sage from '../styles/imgs/sage.png'
import Skye from '../styles/imgs/skye.png'
import Brimstone from '../styles/imgs/brimstone.png'

const Player = props => {
    const location = useLocation()
    const { name } = useParams()
    const [player, setPlayer] = useState({})
    const [details, setDetails] = useState({})
    const [agents, setAgents] = useState([])
    const [creators, setCreators] = useState([])
    const [othergames, setOthergames] = useState([])
    const [ytlinks, setYtlinks] = useState([])

    const [ytformdis, setYtformdis] = useState(false)
    const [ytform, setYtform] = useState({ youtubelinks: '' })
    const [agentformdis, setAgentformdis] = useState(false)
    const [agentform, setAgentform] = useState({ agent_name: '' })
    const [othergameformdis, setOthergameformdis] = useState(false)
    const [othergameform, setOthergameform] = useState({ name: '', img_link: '' })
    const [creatorformdis, setCreatorformdis] = useState(false)
    const [creatorform, setCreatorform] = useState({ name: '', img: '' })

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

    // useEffect(() => {
    //     console.log({
    //         details: details,
    //         creators: creators,
    //         player: player,
    //         othergames: othergames,
    //         ytlinks: ytlinks,
    //         agents: agents
    //     })
    // }, [])

    const redirectFunc = link => {
        const win = window.open(link, '_blank')
        win.focus()
    }

    const handleChangesyt = e => {
        setYtform({
            ...ytform,
            [e.target.name]: e.target.value
        })
    }

    const submitYt = e => {
        e.preventDefault()
        setYtlinks([...ytlinks, { ...ytform, id: ytlinks.length+1 } ])
        //addYtlink({ ...ytform, user_id: props.user.id }, props.user.id)
        setYtform({ youtubelinks: '' })
        setYtformdis(false)
        // console.log(ytlinks)
    }

    const handleChangesagent = e => {
        setAgentform({
            ...agentform,
            [e.target.name]: e.target.value.toLowerCase()
        })
        console.log(agentform)
    }

    const submitAgent = e => {
        e.preventDefault()
        setAgents([...agents, { ...agentform, id: agents.length+1 } ])
        //addYtlink({ ...ytform, user_id: props.user.id }, props.user.id)
        setAgentform({ agent_name: '' })
        setAgentformdis(false)
        console.log(agents)
    }

    const handleChangesothergame = e => {
        setOthergameform({
            ...othergameform,
            [e.target.name]: e.target.value.toLowerCase()
        })
        console.log(othergameform)
    }

    const submitOthergame = e => {
        e.preventDefault()
        setOthergames([...othergames, { ...othergameform, id: othergames.length+1 } ])
        //addYtlink({ ...ytform, user_id: props.user.id }, props.user.id)
        setOthergameform({ name: '', img_link: '' })
        setOthergameformdis(false)
        console.log(othergames)
    }

    const handleChangescreator = e => {
        setCreatorform({
            ...creatorform,
            [e.target.name]: e.target.value.toLowerCase()
        })
        console.log(creatorform)
    }

    const submitCreator = e => {
        e.preventDefault()
        setCreators([...creators, { ...creatorform, id: creators.length+1 }])
        //addYtlink({ ...ytform, user_id: props.user.id }, props.user.id)
        setCreatorform({ name: '', img: '' })
        setCreatorformdis(false)
        console.log(creators)
    }

    const deleteDetail = (type, id) => {
        if (type === 'youtube') {
            console.log('youtube')
        } else if (type === 'agent') {
            const newarr = agents.filter(agent => id !== agent.id)
            setAgents(newarr)
        } else if (type === 'othergame') {
            const newarr = othergames.filter(othergame => id !== othergame.id)
            setOthergames(newarr)
        } else {
            const newarr = creators.filter(creator => id !== creator.id)
            setCreators(newarr)
        }
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
                    <>
                        <iframe width="500" height="250" className='video'
                            src={`${ytlinks[ytplay].youtubelinks}?autoplay=1&mute=1&loop=1`}>
                        </iframe>
                        {props.user.username === name ?
                            <button onClick={() => deleteDetail('youtube', ytlinks[ytplay].id)}>delete</button> :
                            ''
                        }
                    </> : 
                    <p>No vidoes listed</p>
                }
                {props.user.username === name ?
                    <button onClick={() => setYtformdis(!ytformdis)}>Add youtube links</button> :
                    ''
                }
                {ytformdis ?
                    <form onSubmit={submitYt}>
                        <input  
                            type='text'
                            id='youtubelinks'
                            name='youtubelinks'
                            onChange={handleChangesyt}
                            placeholder='Embedded youtube link'
                        />
                        <button type='submit'>send</button>
                    </form> : 
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
                                    {agent.agent_name === 'raze' ?
                                        <img src={Raze} className='agents'/> :
                                    agent.agent_name === 'omen' ?
                                        <img src={Omen} className='agents' /> :
                                    agent.agent_name === 'brimstone' ?
                                        <img src={Brimstone} className='agents' /> :
                                    agent.agent_name === 'breach' ?
                                        <img src={Breach} className='agents' /> :
                                    agent.agent_name === 'viper' ?
                                        <img src={Viper} className='agents' /> :
                                    agent.agent_name === 'killjoy' ?
                                        <img src={Killjoy} className='agents' /> :
                                    agent.agent_name === 'cypher' ?
                                        <img src={Cypher} className='agents' /> :
                                    agent.agent_name === 'yoru' ?
                                        <img src={Yoru} className='agents' /> :
                                    agent.agent_name === 'sova' ?
                                        <img src={Sova} className='agents' /> :
                                    agent.agent_name === 'reyna' ?
                                        <img src={Reyna} className='agents' /> :
                                    agent.agent_name === 'pheonix' ?
                                        <img src={Pheonix} className='agents' /> :
                                    agent.agent_name === 'jett' ?
                                        <img src={Jett} className='agents' /> :
                                    agent.agent_name === 'sage' ? 
                                        <img src={Sage} className='agents' /> :
                                        <img src={Skye} className='agents' /> 
                                    }
                                    {props.user.username === name ?
                                        <button onClick={() => deleteDetail('agent', agent.id)}>delete</button> :
                                        ''
                                    }
                                </>
                            )) : 
                        <p>No agents listed</p>
                        }
                        {props.user.username === name ?
                            <button onClick={() => setAgentformdis(!agentformdis)}>Add agents</button> :
                            ''
                        }
                        {agentformdis ?
                            <form onSubmit={submitAgent}>
                                <input  
                                    type='text'
                                    id='agent_name'
                                    name='agent_name'
                                    onChange={handleChangesagent}
                                    placeholder='Agent name'
                                />
                                <button type='submit'>send</button>
                            </form> : 
                            ''
                        }
                    </div>
                    <div>
                        <h1>Other Games</h1>
                        {othergames.length > 0 ? 
                            othergames.map(game => (
                                <>
                                    <img src={game.img_link} className='agents' />
                                    <p>{game.name}</p>
                                    {props.user.username === name ?
                                        <button onClick={() => deleteDetail('othergame', game.id)}>delete</button> :
                                        ''
                                    }
                                </>
                            )) :
                            <p>No games listed</p>
                        }
                        {props.user.username === name ?
                            <button onClick={() => setOthergameformdis(!othergameformdis)}>Add games</button> :
                            ''
                        }
                        {othergameformdis ?
                            <form onSubmit={submitOthergame}>
                                <input  
                                    type='text'
                                    id='name'
                                    name='name'
                                    onChange={handleChangesothergame}
                                    placeholder='Game name'
                                />
                                <input  
                                    type='text'
                                    id='img_link'
                                    name='img_link'
                                    onChange={handleChangesothergame}
                                    placeholder='Img address link (logo)'
                                />
                                <button type='submit'>send</button>
                            </form> : 
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
                                    {props.user.username === name ?
                                        <button onClick={() => deleteDetail('creator', creator.id)}>delete</button> :
                                        ''
                                    }
                                </div>
                            )) :
                            <p> No favorite creators listed</p>
                        }
                        {props.user.username === name ?
                            <button onClick={() => setCreatorformdis(!creatorformdis)}>Add creators</button> :
                            ''
                        }
                        {creatorformdis ?
                            <form onSubmit={submitCreator}>
                                <input  
                                    type='text'
                                    id='name'
                                    name='name'
                                    onChange={handleChangescreator}
                                    placeholder='Creator name'
                                />
                                <input  
                                    type='text'
                                    id='img'
                                    name='img'
                                    onChange={handleChangescreator}
                                    placeholder='Img address link (profile img)'
                                />
                                <button type='submit'>send</button>
                            </form> : 
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