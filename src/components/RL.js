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
                <Link to='/player/killer' className='name nav'>killer</Link>
            </div>
            <h1 className='lineuptitle'>Light</h1>
            <div className='lineup'>
                <Link to='/player/Zach Lara' className='name nav'>Zach Lara</Link>
                <Link to='/player/De La Mora' className='name nav'>De La Mora</Link>
                <Link to='/player/Sly' className='name nav'>Sly</Link>
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