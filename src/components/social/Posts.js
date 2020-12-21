import React, { useState, useEffect } from 'react' 
import axiosWithAuth2 from '../../utils/axiosWithAuth2'
import { Link } from 'react-router-dom'
import { fetchUserLikes } from '../../actions'
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
                    console.log(res)
                })
    }, [])

    useEffect(() => {
        if (localStorage.getItem('token') != null){
            props.fetchUserLikes(localStorage.getItem('cred'))
            // props.getFollowing(id)
        }
    }, [])
    return (
        <>
            {allposts.map(post => (
                <div className='sidebarflex' key={post.id}>
                    <div className='postssidebar'>
                        {/* {post.user_id == props.user.id ? 
                            <Link to={`/profile/${post.user_id}`}>
                                <p className='sidebar'>{post.username}</p>
                            </Link> :
                        usersFollowing.includes(post.user_id) ?
                            <Link to={`/friend/${post.user_id}`}>
                                <p className='sidebar'>{post.username}</p>
                            </Link> : */}
                        <Link to={`/player/${post.username}`}>
                            <p className='sidebar'>{post.username}</p>
                        </Link>
                        {/* } */}
                        <LoadComments post={post} sidebar={true} username={post.username}/>
                        <ListLikes post={post} /> 
                        <p>{post.created_at}</p>
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

export default connect(mapStateToProps, { fetchUserLikes })(Posts)