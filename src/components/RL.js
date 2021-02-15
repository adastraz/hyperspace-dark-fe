import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const RL = () => {
    return (
        <div className='players'>
            <h1 className='lineuptitle'>Dark</h1>
            <div className='lineup'>
                <Link to='/player/Othos' className='name nav'>Othos</Link>
                <Link to='/player/skythegrandmaguy' className='name nav'>skythegrandmaguy</Link>
                <Link to='/player/tragedy.' className='name nav'>tragedy.</Link>
            </div>
            <h1 className='lineuptitle'>Light</h1>
            <div className='lineup'>
                <Link to='/player/ZachLara' className='name nav'>ZachLara</Link>
                <Link to='/player/DeLaMora' className='name nav'>DeLaMora</Link>
                <Link to='/player/sciiar' className='name nav'>sciiar</Link>
            </div>
        </div>
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

export default connect(mapStateToProps, {  })(RL)