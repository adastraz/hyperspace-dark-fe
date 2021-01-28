import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { getStreamers } from '../../actions'
import axiosWithAuth from '../../utils/axiosWithAuth'
import SignIn from '../social/SignIn.js'
import Selector from './Selector.js'

const Sidebar = props => {
    const location = useLocation()
    const [schedule, setSchedule] = useState([])
    const [twitch, setTwitch] = useState([])
    const [schedDis, setSchedDis] = useState(true)
    const [twitchDis, setTwitchDis] = useState(false)
    const streamers = ['squallowl', 'zundga', 'apaq', 'pjtryhard', 'itshafu', 'shroud', 'xqcow', 'pokimane', 'hiko', 'emongg', 'tover0']

    useEffect(() => {
        if(location.pathname === '/valorant') {
            axios.get('http://localhost:3300/api/schedule/valorant/game')
                .then(res => setSchedule(res.data))
                .catch(err => console.log(err))
        }else if(location.pathname === '/rl') {
            axios.get('http://localhost:3300/api/schedule/rl/game')
                .then(res => setSchedule(res.data))
                .catch(err => console.log(err))
        } else{
            axios.get('http://localhost:3300/api/schedule')
                .then(res => setSchedule(res.data))
                .catch(err => console.log(err))
        }
    }, [])

    useEffect(() => {
        //action to get streamers
        // props.live.forEach(ele => ele[0] ? console.log(ele[0].user_name, 'yes') : console.log(ele[0], 'no'))
        axios.get('/auth/api/current_user')
            .then(res => {
                console.log(res)
                localStorage.setItem('twitchaccess', res.data.accessToken)
                localStorage.setItem('twitchID', res.data.user.twitchID)
            })
        props.getStreamers(streamers)
    }, [])

    const redirectFunc = link => {
        const win = window.open(link, '_blank')
        win.focus()
    }

    // const getTwitch = () => {
    //     axios.get('https://twitch-auth-0.herokuapp.com/auth/twitch')
    // }

    return (
        <>  
            <div className='sidebarcontainer'>
                {localStorage.getItem('side') == 'Schedule' ? 
                    <>
                        <Selector title='Schedule'/>
                        {schedule.map(ele => (
                            <div className='games'>  
                                <div className='sideflex2'>
                                    <p className='schedule'>{ele.opp_team}</p>
                                    <p className='schedule'>VS.</p>
                                    <p className='schedule'>Hyperspace Dark</p>
                                </div>
                                <div className='sideflex2'>
                                    <p className='schedule'>{ele.opp_team_score}</p>
                                    <p className='schedule'>-</p>
                                    <p className='schedule'>{ele.hd_score}</p>
                                </div>
                                <div className='datetime'>
                                    <p className='schedule'>{ele.date}</p>
                                    <p className='schedule'>{ele.time}</p>
                                </div>
                            </div>
                        ))} 
                    </>:
                    localStorage.getItem('side') == 'Now-Live' ? 
                    <>
                        <Selector title='Now-Live'/>
                        <a href='/auth/twitch'>Twitch</a>
                        {props.live.length > 0 ? props.live.map(ele => (
                            <div className='games' key={ele[0].user_name} onClick={() => redirectFunc(`https://www.twitch.tv/${ele[0].user_name}`)}>
                                <p>{ele[0].user_name}</p>
                                <div className='sideflex2'>
                                    <p>viewer count</p> 
                                    <p>{ele[0].viewer_count}</p>
                                    <p>game name</p>
                                    <p>{ele[0].game_name}</p>
                                </div>
                                <p>title</p>
                                <p>{ele[0].title}</p>
                            </div> 
                        )): <h1>No one is live</h1>}
                    </> :
                    <>
                        <Selector title='Social'/>
                        <SignIn />
                    </>
                }
            </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        live: state.live,
        side: state.side
    }
}

export default connect(mapStateToProps, { getStreamers })(Sidebar)
