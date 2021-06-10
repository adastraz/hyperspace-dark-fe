import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Twitch from '../styles/imgs/icons8-twitch-64.png'
import axios from 'axios'
import { connect } from 'react-redux'
import { addAgent, deleteAgent, addYtlink, deleteYtlink, addCreator, deleteCreator, addOthergame, deleteOthergame, editUser } from '../actions'

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

import Dia1 from '../styles/imgs/dia2.png'
import Dia2 from '../styles/imgs/dia2.png'
import Dia3 from '../styles/imgs/dia3.png'
import Imm3 from '../styles/imgs/imm3.png'
import Rad from '../styles/imgs/radiant.png'
//add rl ranks
import C1 from '../styles/imgs/c1.png'
import C2 from '../styles/imgs/c2.png'
import C3 from '../styles/imgs/c3.png'
import GC1 from '../styles/imgs/gc1.png'
import GC2 from '../styles/imgs/gc2.png'
import GC3 from '../styles/imgs/gc3.png'
import SSL from '../styles/imgs/ssl.png'

import { PlayerDiv, PlayerDeets, Clips, PlayerHead, Username, Imp } from '../styles/Players'

const Player = props => {
    const location = useLocation()
    const { name } = useParams()
    const [player, setPlayer] = useState({})
    const [details, setDetails] = useState({})
    const [agents, setAgents] = useState([])
    const [creators, setCreators] = useState([])
    const [othergames, setOthergames] = useState([])
    const [ytlinks, setYtlinks] = useState([])
    const [carpics, setCarpics] = useState([])

    const [ytformdis, setYtformdis] = useState(false)
    const [ytform, setYtform] = useState({ youtubelinks: '' })
    const [agentformdis, setAgentformdis] = useState(false)
    const [agentform, setAgentform] = useState({ agent_name: '' })
    const [othergameformdis, setOthergameformdis] = useState(false)
    const [othergameform, setOthergameform] = useState({ name: '', img_link: '' })
    const [creatorformdis, setCreatorformdis] = useState(false)
    const [creatorform, setCreatorform] = useState({ name: '', img: '', link: '' })
    // const [editformdis, setEditformdis] = useState(false)
    // const [editform, setEditform] = useState({ rank: '' })

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
                } else if (res.data[0].game === 'rl') {
                    axios.get(`https://hdsocial.herokuapp.com/api/viewuser/${res.data[0].id}/details/rl`)
                        .then(res2 => {
                            setDetails(res2.data.user_details)
                            setCarpics(res2.data.user_carpics)
                            setCreators(res2.data.user_creators)
                            setOthergames(res2.data.user_othergames)
                            setYtlinks(res2.data.user_ytlinks)
                            console.log(details)
                        })
                }
            })
    }, [])

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
        setYtlinks([...ytlinks, { ...ytform } ])
        props.addYtlink({ ...ytform, user_id: props.user.id }, props.user.id)
        setYtform({ youtubelinks: '' })
        setYtformdis(false)
    }

    const handleChangesagent = e => {
        setAgentform({
            ...agentform,
            [e.target.name]: e.target.value.toLowerCase()
        })
    }

    const submitAgent = e => {
        e.preventDefault()
        setAgents([...agents, { ...agentform, id: agents.length+1 } ])
        props.addAgent({ ...agentform, user_id: props.user.id }, props.user.id)
        setAgentform({ agent_name: '' })
        setAgentformdis(false)
    }

    const handleChangesothergame = e => {
        setOthergameform({
            ...othergameform,
            [e.target.name]: e.target.value
        })
    }

    const submitOthergame = e => {
        e.preventDefault()
        setOthergames([...othergames, { ...othergameform, id: othergames.length+1 } ])
        props.addOthergame({ ...othergameform, user_id: props.user.id }, props.user.id)
        setOthergameform({ name: '', img_link: '' })
        setOthergameformdis(false)
    }

    const handleChangescreator = e => {
        setCreatorform({
            ...creatorform,
            [e.target.name]: e.target.value
        })
    }

    const submitCreator = e => {
        e.preventDefault()
        setCreators([...creators, { ...creatorform, id: creators.length+1 }])
        props.addCreator({ ...creatorform, user_id: props.user.id }, props.user.id)
        setCreatorform({ name: '', img: '' })
        setCreatorformdis(false)
    }

    // const handleChangesEdit = e => {
    //     setEditform({
    //         ...editform,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // const submitEdit = e => {
    //     e.preventDefault()
    //     props.editUser(editform, props.user.id)
    //     setEditformdis(!editformdis)
    //     setEditform({ rank: '' })
    // }

    const deleteDetail = (type, id) => {
        if (type === 'youtube') {
            const newarr = ytlinks.filter(ytlink => id !== ytlink.id)
            props.deleteYtlink(id)
            setYtlinks(newarr)
        } else if (type === 'agent') {
            const newarr = agents.filter(agent => id !== agent.id)
            props.deleteAgent(id)
            setAgents(newarr)
        } else if (type === 'othergame') {
            const newarr = othergames.filter(othergame => id !== othergame.id)
            props.deleteOthergame(id)
            setOthergames(newarr)
        } else {
            const newarr = creators.filter(creator => id !== creator.id)
            props.deleteCreator(id)
            setCreators(newarr)
        }
    }

    const [ytplay, setYtplay] = useState(0)

    return (
        <PlayerDiv>
            <PlayerHead>
                <Username className='spiffy'>{player.username}</Username>
                {details ? 
                    <Imp>
                        {details.twitch_link !== null ?
                            <img src={Twitch} alt='twitch logo' className='twitch' onClick={() => redirectFunc(details.twitch_link)} /> :
                            ''
                        }
                        {details.youtube_link !== null ?
                            <img className='youtube' alt='youtube logo' onClick={() => redirectFunc(details.youtube_link)} src="https://img.icons8.com/dusk/64/000000/youtube--v2.png"/> :
                            ''
                        }
                        {player.game === 'valorant' ?
                            <>
                                {details.rank === 'dia1' ?
                                    <img src={Dia1} className='twitch' alt={`rank ${details.rank}`} /> :
                                details.rank === 'dia2' ?
                                    <img src={Dia2} className='twitch' alt={`rank ${details.rank}`} /> :
                                details.rank === 'dia3' ?
                                    <img src={Dia3} className='twitch' alt={`rank ${details.rank}`} /> :
                                details.rank === 'imm' ?
                                    <img src={Imm3} className='twitch' alt={`rank ${details.rank}`} /> : 
                                    <img src={Rad} className='twitch' alt={`rank ${details.rank}`} />                      
                                }
                            </> :
                        player.game === 'rl' ?
                            <>
                                {details.rank === 'c1' ?
                                    <img src={C1} className='twitch' alt={`rank ${details.rank}`} /> :
                                details.rank === 'c2' ?
                                    <img src={C2} className='twitch' alt={`rank ${details.rank}`} /> :
                                details.rank === 'c3' ?
                                    <img src={C3} className='twitch' alt={`rank ${details.rank}`} /> :
                                details.rank === 'gc1' ?
                                    <img src={GC1} className='twitch' alt={`rank ${details.rank}`} /> : 
                                details.rank === 'gc2' ?
                                    <img src={GC2} className='twitch' alt={`rank ${details.rank}`} /> : 
                                details.rank === 'gc3' ?
                                    <img src={GC3} className='twitch' alt={`rank ${details.rank}`} /> : 
                                    <img src={SSL} className='twitch' alt={`rank ${details.rank}`} />                      
                                }
                            </> :
                            ''
                        }
                    </Imp> :
                    <p>No details to display :/</p>
                }
                {/* {props.user.username === name ? 
                    <button onClick={() => setEditformdis(!editformdis)}>Edit Rank</button> :
                    ''
                }
                {editformdis ? 
                    <form onSubmit={submitEdit}>
                        <input 
                            type='text'
                            name='rank'
                            id='rank'
                            onChange={handleChangesEdit}
                            placeholder='rank (imm1, rad, dia3, etc)'
                            className='input'
                        />
                        <button type='submit'>finish</button>
                    </form> :
                    ''
                } */}
            </PlayerHead>
            <PlayerDeets>
                {ytlinks.length > 0 ? 
                    <Clips>
                        <iframe width="500" height="250" className='video'
                            src={`${ytlinks[ytplay].youtubelinks}?autoplay=1&mute=1&loop=1`}>
                        </iframe>
                        {props.user.username === name ?
                            <button onClick={() => deleteDetail('youtube', ytlinks[ytplay].id)}>delete</button> :
                            ''
                        }
                    </Clips> : 
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
                            className='input'
                        />
                        <button type='submit'>send</button>
                    </form> : 
                    ''
                }
                <div>
                    <div className='maindetails'>
                        {player.game === 'valorant' ?
                            <>
                                <h1 className='detailtitle'>Agents</h1>
                                {agents.length > 0 ? 
                                    <div className='agentflex'>
                                        {agents.map(agent => (
                                            <div className='agentflex2' key={agent.id}>
                                                {agent.agent_name === 'raze' ?
                                                    <img src={Raze} alt={`${agent.agent_name}`} className='agents'/> :
                                                agent.agent_name === 'omen' ?
                                                    <img src={Omen} alt={`${agent.agent_name}`} className='agents' /> :
                                                agent.agent_name === 'brimstone' ?
                                                    <img src={Brimstone} alt={`${agent.agent_name}`} className='agents' /> :
                                                agent.agent_name === 'breach' ?
                                                    <img src={Breach} alt={`${agent.agent_name}`} className='agents' /> :
                                                agent.agent_name === 'viper' ?
                                                    <img src={Viper} alt={`${agent.agent_name}`} className='agents' /> :
                                                agent.agent_name === 'killjoy' ?
                                                    <img src={Killjoy} alt={`${agent.agent_name}`} className='agents' /> :
                                                agent.agent_name === 'cypher' ?
                                                    <img src={Cypher} alt={`${agent.agent_name}`} className='agents' /> :
                                                agent.agent_name === 'yoru' ?
                                                    <img src={Yoru} alt={`${agent.agent_name}`} className='agents' /> :
                                                agent.agent_name === 'sova' ?
                                                    <img src={Sova} alt={`${agent.agent_name}`} className='agents' /> :
                                                agent.agent_name === 'reyna' ?
                                                    <img src={Reyna} alt={`${agent.agent_name}`} className='agents' /> :
                                                agent.agent_name === 'pheonix' ?
                                                    <img src={Pheonix} alt={`${agent.agent_name}`} className='agents' /> :
                                                agent.agent_name === 'jett' ?
                                                    <img src={Jett} alt={`${agent.agent_name}`} className='agents' /> :
                                                agent.agent_name === 'sage' ? 
                                                    <img src={Sage} alt={`${agent.agent_name}`} className='agents' /> :
                                                    <img src={Skye} alt={`${agent.agent_name}`} className='agents' /> 
                                                }
                                                {props.user.username === name ?
                                                    <button onClick={() => deleteDetail('agent', agent.id)}>delete</button> :
                                                    ''
                                                }
                                            </div>
                                        )) }
                                    </div> : 
                                    <p>No agents listed</p>
                                }
                                {props.user.username === name ?
                                    <button className={agentformdis ? '' : 'agentbutton'} onClick={() => setAgentformdis(!agentformdis)}>Add agents</button> :
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
                                            className='input'
                                        />
                                        <button type='submit'>send</button>
                                    </form> : 
                                    ''
                                }
                            </> : 
                            <>
                                {/* RL car pic stuff here!!! */}
                            </>
                        }
                        
                    </div>
                    <div className='maindetails2'>
                        <h1 className='detailtitle'>Other Games</h1>
                        {othergames.length > 0 ? 
                            <div className='agentflex'>
                                {othergames.map(game => (
                                    <div className='agentflex2' key={game.id}>
                                        <img src={game.img_link} alt={`${game.name}`} className='agents' />
                                        {/* <p>{game.name}</p> */}
                                        {props.user.username === name ?
                                            <button onClick={() => deleteDetail('othergame', game.id)}>delete</button> :
                                            ''
                                        }
                                    </div>
                                ))} 
                            </div> :
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
                                    className='input'
                                />
                                <input  
                                    type='text'
                                    id='img_link'
                                    name='img_link'
                                    onChange={handleChangesothergame}
                                    placeholder='Img address link (logo)'
                                    className='input'
                                />
                                <button type='submit'>send</button>
                            </form> : 
                            ''
                        }
                    </div>
                    <div className='maindetails2'>
                        <h1 className='detailtitle'>Favorite Content Creators</h1>
                        {creators.length > 0 ?
                            creators.map(creator => (
                                <div className='maindetails2' key={creator.id}>
                                    <img onClick={() => redirectFunc(creator.link)} alt={`${creator.name}`} src={creator.img} className='agents'/>
                                    <p onClick={() => redirectFunc(creator.link)}>{creator.name}</p>
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
                                    className='input'
                                />
                                <input  
                                    type='text'
                                    id='img'
                                    name='img'
                                    onChange={handleChangescreator}
                                    placeholder='Img address link (profile img)'
                                    className='input'
                                />
                                <input  
                                    type='text'
                                    id='link'
                                    name='link'
                                    onChange={handleChangescreator}
                                    placeholder='Link to creator'
                                    className='input'
                                />
                                <button type='submit'>send</button>
                            </form> : 
                            ''
                        }
                    </div>
                </div>
            </PlayerDeets>
        </PlayerDiv>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        user: state.user,
        posts: state.posts
    }
}

export default connect(mapStateToProps, { addAgent, deleteAgent, addYtlink, deleteYtlink, addCreator, deleteCreator, addOthergame, deleteOthergame, editUser })(Player)