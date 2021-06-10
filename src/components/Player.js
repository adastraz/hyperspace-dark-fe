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

    const rankJSX = () => {
        switch (player.game) {
            case 'valorant' :
                switch (details.rank) {
                    case 'dia1' :
                        return <img src={Dia1} className='twitch' alt={`rank ${details.rank}`} /> 
                    case 'dia2' :
                        return <img src={Dia2} className='twitch' alt={`rank ${details.rank}`} /> 
                    case 'dia3' :
                        return <img src={Dia3} className='twitch' alt={`rank ${details.rank}`} /> 
                    case 'imm' :
                        return <img src={Imm3} className='twitch' alt={`rank ${details.rank}`} />
                    case 'rad' :
                        return <img src={Rad} className='twitch' alt={`rank ${details.rank}`} />
                }
            case 'rl' :
                switch (details.rank) {
                case 'c1' :
                    return <img src={C1} className='twitch' alt={`rank ${details.rank}`} /> 
                case 'c2' :
                    return <img src={C2} className='twitch' alt={`rank ${details.rank}`} />
                case 'c3' :
                    return <img src={C3} className='twitch' alt={`rank ${details.rank}`} />
                case 'gc1' :
                    return <img src={GC1} className='twitch' alt={`rank ${details.rank}`} /> 
                case 'gc2' :
                    return <img src={GC2} className='twitch' alt={`rank ${details.rank}`} /> 
                case 'gc3' :
                    return <img src={GC3} className='twitch' alt={`rank ${details.rank}`} /> 
                case 'ssl' :
                    return <img src={SSL} className='twitch' alt={`rank ${details.rank}`} /> 
                }
        }
    }

    const agentORCarJSX = agent => {
        switch (player.game) {
            case 'valorant' :
                switch (agent.name) {
                    case 'raze' :
                        return <img src={Raze} alt={`${agent.agent_name}`} className='agents'/> 
                    case 'omen' :
                        return <img src={Omen} alt={`${agent.agent_name}`} className='agents' /> 
                    case 'brimstone' :
                        return <img src={Brimstone} alt={`${agent.agent_name}`} className='agents' /> 
                    case 'breach' :
                        return <img src={Breach} alt={`${agent.agent_name}`} className='agents' /> 
                    case 'viper' :
                        return <img src={Viper} alt={`${agent.agent_name}`} className='agents' /> 
                    case 'killjoy' :
                        return <img src={Killjoy} alt={`${agent.agent_name}`} className='agents' /> 
                    case 'cypher' :
                        return <img src={Cypher} alt={`${agent.agent_name}`} className='agents' /> 
                    case 'yoru' :
                        return <img src={Yoru} alt={`${agent.agent_name}`} className='agents' /> 
                    case 'sova' :
                        return <img src={Sova} alt={`${agent.agent_name}`} className='agents' /> 
                    case 'reyna' :
                        return <img src={Reyna} alt={`${agent.agent_name}`} className='agents' /> 
                    case 'pheonix' :
                        return <img src={Pheonix} alt={`${agent.agent_name}`} className='agents' /> 
                    case 'jett' :
                        return <img src={Jett} alt={`${agent.agent_name}`} className='agents' /> 
                    case 'sage' : 
                        return <img src={Sage} alt={`${agent.agent_name}`} className='agents' /> 
                    case 'skye' :
                        return <img src={Skye} alt={`${agent.agent_name}`} className='agents' /> 
                }
        }
    }

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
                        {rankJSX()}
                    </Imp> :
                    <p>No details to display :/</p>
                }
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
                    {/* <div className='maindetails'> */}
                        {player.game === 'valorant' ?
                            <>
                                <h1 className='detailtitle'>Agents</h1>
                                {agents.length > 0 ? 
                                    <div className='agentflex'>
                                        {agents.map(agent => (
                                            <div className='agentflex2' key={agent.id}>
                                                {agentORCarJSX(agent)}
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
                    {/* </div> */}
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