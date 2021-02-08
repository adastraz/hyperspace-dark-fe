import React from 'react'
import { connect } from 'react-redux'

const Welcome = () => {
    return (
        <>
            <h1>Welcome</h1>
        </>
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

export default connect(mapStateToProps, {  })(Welcome)