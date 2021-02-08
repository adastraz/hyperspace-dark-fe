import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Valorant = () => {
    return (
        <div className='players'>
            <h1 className='lineuptitle'>Dark</h1>
            <div className='lineup'>
                <Link to='/player/Nave' className='name nav'>Nave</Link> 
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
                <Link to='/player/Dreamy' className='name nav'>Skeletto</Link>
                <Link to='/player/Zundga' className='name nav'>Zundga</Link>
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

export default connect(mapStateToProps, {  })(Valorant)