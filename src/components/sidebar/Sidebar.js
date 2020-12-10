import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const Sidebar = () => {
    const location = useLocation()
    const [schedule, setSchedule] = useState([])

    useEffect(() => {
        if(location.pathname === '/valorant') {
            axios.get('http://localhost:3300/api/schedule/valorant/game')
                .then(res => setSchedule(res.data))
        }else if(location.pathname === '/rl') {
            axios.get('http://localhost:3300/api/schedule/rl/game')
                .then(res => setSchedule(res.data))
        } else{
            axios.get('http://localhost:3300/api/schedule')
                .then(res => setSchedule(res.data))
        }
    }, [location.pathname])
    return (
        <>  
            <div className='sidebarcontainer'>
                <h1 className='schedule'>Schedule</h1>
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
            </div>
        </>
    )
}

export default Sidebar