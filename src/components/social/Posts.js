import React, { useState, useEffect } from 'react' 
import axiosWithAuth2 from '../../utils/axiosWithAuth2'
import { Link } from 'react-router-dom'
import { fetchUserLikes, clearError } from '../../actions'
import LoadComments from './LoadComments.js'
import { connect } from 'react-redux'
import ListLikes from './ListLikes.js'

const Posts = props => {
    const [allposts, setAllposts] = useState([])

    useEffect(() => {
        axiosWithAuth2()
            .get('/api/posts')
                .then(res => {
                    setAllposts(res.data)
                    console.log('------TYLER LENGTH HERE------', res.data.length)
                })
                .catch(err => {
                    localStorage.removeItem('token')
                    localStorage.removeItem('cred')
                    localStorage.removeItem('name')
                    props.clearError()
                })
    }, [])

    useEffect(() => {
        if (localStorage.getItem('token') != null){
            props.fetchUserLikes(localStorage.getItem('cred'))
        }
    }, [])

    return (
        <>
            {allposts.map(post => (
                <div className='sidebarflex' key={post.id}>
                    <div className='postssidebar'>
                        {post.is_player ?
                            <Link to={`/player/${post.username}`} className='postlink'>
                                <p className='playerusername code'>{post.username}</p>
                                <p className='date code'>{post.created_at}</p>
                            </Link> :
                            <div className='postlink'>
                                <p className='username code'>{post.username}</p>
                                <p className='date code'>{post.created_at}</p>
                            </div>
                        }
                        
                        <LoadComments post={post} sidebar={true} username={post.username}/>
                        <ListLikes post={post} /> 
                    </div>
                </div> 
            ))}
        </>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        user: state.user,
        friends: state.friends,
        users: state.users,
        posts: state.posts
    }
}

export default connect(mapStateToProps, { fetchUserLikes, clearError })(Posts)