import React from 'react'
import { Link } from 'react-router-dom'

const RL = () => {
    return (
        <div className='players'>
            <h1 className='lineuptitle'>Dark</h1>
            <div className='lineup'>
                <Link to='/player/SquallOwl' className='name nav'>SquallOwl</Link>
                <Link to='/player/skythegrandmaguy' className='name nav'>skythegrandmaguy</Link>
                <Link to='/player/maxime' className='name nav'>maxime</Link>
            </div>
            <h1 className='lineuptitle'>Light</h1>
            <div className='lineup'>
                <Link to='/player/APAQ' className='name nav'>APAQ</Link>
                <Link to='/player/Haydes' className='name nav'>Haydes</Link>
                <Link to='/player/Sly' className='name nav'>Sly</Link>
            </div>
        </div>
    )
}

export default RL