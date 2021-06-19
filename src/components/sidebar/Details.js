import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
// import axios from 'axios'
import { connect } from 'react-redux'
import { getStreamers, addTournament } from '../../actions'
import axiosWithAuth2 from '../../utils/axiosWithAuth2'
import SignIn from '../social/SignIn.js'
import Selector from './Selector.js'
import Tournament from './Tournament.js'

const Details = props => {
    const location = useLocation()
    const [schedule, setSchedule] = useState([])
    // const [twitch, setTwitch] = useState([])
    // const [schedDis, setSchedDis] = useState(true)
    // const [twitchDis, setTwitchDis] = useState(false)
    // const streamers = ['squallowl', 'zundga', 'apaq', 'pjtryhard', 'itshafu', 'shroud', 'xqcow', 'pokimane', 'hiko', 'emongg', 'tover0']
    const [addCluster, setAddCluster] = useState(false)
    const [newTournament, setNewTournament] = useState({ 
        name: '',
        img: '',
        start_date: '',
        start_time: '',
        livestream_link: '',
        game: '',
        link: ''
    })

    const handleChanges = e => {
        setNewTournament({
            ...newTournament,
            [e.target.name]: e.target.value
        })
    }

    const [livestreamLink, setLivestreamlink] = useState({ livestream_link: '' })

    const handleChangesLL = e => {
        setLivestreamlink({
            ...livestreamLink,
            [e.target.name]: e.target.value
        })
    }

    const submitTourny = () => {
        schedule.push(newTournament)
        livestreamLink.livestream_link.length > 10 ? props.addTournament({...newTournament, ...livestreamLink}) : props.addTournament(newTournament) 
        setNewTournament({ 
            name: '',
            img: '',
            start_date: '',
            start_time: '',
            game: '',
            link: ''
        })
        setAddCluster(false)
    }

    useEffect(() => {
        if(location.pathname === '/valorant') {
            axiosWithAuth2()
                .get('/api/tournaments/valorant/game')
                    .then(res => setSchedule(res.data))
                    .catch(err => console.log(err))
        } else if (location.pathname === '/rl') {
            axiosWithAuth2()
                .get('/api/tournaments/rl/game')
                    .then(res => setSchedule(res.data))
                    .catch(err => console.log(err))
        }else {
            axiosWithAuth2()
                .get('/api/tournaments')
                    .then(res => setSchedule(res.data))
                    .catch(err => console.log(err))
        }
    }, [location])

    // useEffect(() => {
        //action to get streamers
        // props.live.forEach(ele => ele[0] ? console.log(ele[0].user_name, 'yes') : console.log(ele[0], 'no'))

        // axios.get('/auth/api/current_user')
        //     .then(res => {
        //         console.log(res)
        //         localStorage.setItem('twitchaccess', res.data.accessToken)
        //         localStorage.setItem('twitchID', res.data.user.twitchID)
        //     })
        // props.getStreamers(streamers)
    // }, [])

    // const redirectFunc = link => {
    //     const win = window.open(link, '_blank')
    //     win.focus()
    // }

    // const getTwitch = () => {
    //     axios.get('https://twitch-auth-0.herokuapp.com/auth/twitch')
    // }

    return (
        <>
            {localStorage.getItem('side') === 'Schedule' ? 
                    <>
                        <Selector title='Schedule'/>
                        {props.user.team === 'admin' ?
                            <button onClick={() => setAddCluster(!addCluster)}>Add Tournament</button> :
                            <></>
                        }
                        {addCluster ?
                            <form onSubmit={submitTourny}>
                                <input 
                                    type='text'
                                    placeholder='Name of Tournament'
                                    id='name'
                                    name='name'
                                    onChange={handleChanges}
                                    value={newTournament.name}
                                />
                                <input 
                                    type='text'
                                    placeholder='Img link Tournament Organizer'
                                    id='img'
                                    name='img'
                                    onChange={handleChanges}
                                    value={newTournament.img}
                                />
                                {newTournament.img.length > 5 ?
                                    <img src={newTournament.img} alt='test of the input'/> :
                                    ''
                                }
                                <input 
                                    type='date'
                                    placeholder='Friday, March 20 2021'
                                    id='start_date'
                                    name='start_date'
                                    onChange={handleChanges}
                                    value={newTournament.start_date}
                                />
                                <input 
                                    type='time'
                                    id='start_time'
                                    name='start_time'
                                    onChange={handleChanges}
                                    value={newTournament.start_time}
                                />
                                <input 
                                    type='text'
                                    placeholder='Link to Twitch'
                                    id='livestream_link'
                                    name='livestream_link'
                                    onChange={handleChangesLL}
                                    value={livestreamLink.livestream_link}
                                />
                                <input 
                                    type='text'
                                    placeholder='rl or valorant ?'
                                    id='game'
                                    name='game'
                                    onChange={handleChanges}
                                    value={newTournament.game}
                                />
                                <input 
                                    type='text'
                                    placeholder='Tournament Link'
                                    id='link'
                                    name='link'
                                    onChange={handleChanges}
                                    value={newTournament.link}
                                />
                                <button type='submit'>Submit</button>
                            </form> :
                            <></>
                        }
                        {schedule.map(ele => (
                            <Tournament tournament={ele} key={ele.id} />
                        ))} 
                    </> :
                    // localStorage.getItem('side') === 'Now-Live' ? 
                    // <>
                    //     <Selector title='Now-Live'/>
                    //     <a href='/auth/twitch'>Twitch</a>
                    //     {props.live.length > 0 ? props.live.map(ele => (
                    //         <div className='games' key={ele[0].user_name} onClick={() => redirectFunc(`https://www.twitch.tv/${ele[0].user_name}`)}>
                    //             <p>{ele[0].user_name}</p>
                    //             <div className='sideflex2'>
                    //                 <p>viewer count</p> 
                    //                 <p>{ele[0].viewer_count}</p>
                    //                 <p>game name</p>
                    //                 <p>{ele[0].game_name}</p>
                    //             </div>
                    //             <p>title</p>
                    //             <p>{ele[0].title}</p>
                    //         </div> 
                    //     )): <h1>No one is live</h1>}
                    // </> :
                    <>
                        <Selector title='Social'/>
                        <SignIn />
                    </>
                }
        </>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        // live: state.live,
        side: state.side,
        user: state.user
    }
}

export default connect(mapStateToProps, { getStreamers, addTournament })(Details)