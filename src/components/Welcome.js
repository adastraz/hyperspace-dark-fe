import React from 'react'
import { connect } from 'react-redux'

const Welcome = () => {
    return (
        <>
            
        </>
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

export default connect(mapStateToProps, {  })(Welcome)