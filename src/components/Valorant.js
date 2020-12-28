import React from 'react'
import { Link } from 'react-router-dom'

const Valorant = () => {
    return (
        <div className='players'>
            <h1 className='lineuptitle'>Dark</h1>
            <div className='lineup'>
                <Link to='/player/Zundga' className='name nav'>Zundga</Link> 
                <Link to='/player/PJ Tryhard' className='name nav'>PJ Tryhard</Link>
                <Link to='/player/LohtuS' className='name nav'>LohtuS</Link>
                <Link to='/player/BigOleNik' className='name nav'>BigOleNik</Link>
                <Link to='/player/ISHMUCKLESI' className='name nav'>ISHMUCKLESI</Link>
            </div>
            <h1 className='lineuptitle'>Light</h1>
            <div className='lineup'>
                <Link to='/player/Batteries' className='name nav'>Batteries</Link> 
                <Link to='/player/Ancient Bandit' className='name nav'>Ancient Bandit</Link>
                <Link to='/player/Spiffy' className='name nav'>Spiffy</Link>
                <Link to='/player/Dreamy' className='name nav'>Dreamy</Link>
            </div>
        </div>
    )
}

export default Valorant