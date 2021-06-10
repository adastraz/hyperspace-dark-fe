import React, { useState, useEffect } from 'react' 
import axiosWithAuth2 from '../../utils/axiosWithAuth2'
import { Link } from 'react-router-dom'
import { fetchUserLikes, clearError, fetchUser, postPost, deletePost } from '../../actions'
import LoadComments from './LoadComments.js'
import { connect } from 'react-redux'
import ListLikes from './ListLikes.js'

import { SidebarPost, PostButton } from '../../styles/Social'

const Posts = props => {
    const [allposts, setAllposts] = useState([])
    const [postpost, setPostpost] = useState(false)
    const [img, setImg] = useState(false)
    const [newPost, setNewPost] = useState({
        post: '',
        location: '',
        img: ''
    })
    var d = new Date

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
        if (localStorage.getItem('token') !== null){
            props.fetchUser(localStorage.getItem('cred'))
            props.fetchUserLikes(localStorage.getItem('cred'))
        }
    }, [])

    const handleChanges = e => {
        setNewPost({
            ...newPost,
            [e.target.name]: e.target.value
        })
    }
//year month day hour minute
    const submitForm = e => {
        e.preventDefault()
        props.postPost(props.user.id, {...newPost, user_id: props.user.id})
        setAllposts([
            { post: newPost.post, id: allposts.length+1, created_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}T${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${d.getMilliseconds()}Z`, username: props.user.username, is_player: props.user.is_player }, ...allposts
        ])
        setNewPost({ post: ''})
        setPostpost(false)
    }

    const logout = () => {
        localStorage.removeItem('cred')
        localStorage.removeItem('token')
        localStorage.removeItem('name')
        window.location.reload()
    }

    return (
        <>
            <img src="https://img.icons8.com/dusk/64/000000/exit.png" className='logoutbutton' onClick={() => logout()}/>
            {props.user.is_player || props.user.team === 'admin' ? 
                <PostButton onClick={() => setPostpost(!postpost)}>Post</PostButton> :
                ''
            }
            {postpost ? 
                <form onSubmit={submitForm} className='postform'>
                    <textarea
                        id='post'
                        name='post'
                        value={newPost.post}
                        placeholder="What's on your mind?"
                        onChange={handleChanges}
                        className='postpost'
                    />
                    {/* {!location ? 
                        <p onClick={() => setLocation(!img)}>Location</p> :
                        <>
                            <input
                                className='locationlocation'
                                id='location'
                                type='text'
                                name='location'
                                value={newPost.location}
                                placeholder='Location'
                                onChange={handleChanges}
                            />
                            <button onClick={() => setLocation(!location)}>Cancel</button>
                        </>
                    }
                    */}
                    {!img ? 
                        <p onClick={() => setImg(!img)}>Embedded Ytlink</p> :
                        <>
                            <input
                                className='locationlocation'
                                id='img'
                                type='text'
                                name='img'
                                value={newPost.img}
                                placeholder='YT embedded link'
                                onChange={handleChanges}
                            />
                            {newPost.img != '' ?
                                <>
                                    <iframe width="500" height="250" className='video'
                            src={`${newPost.img}?autoplay=1&mute=1&loop=1`}>
                        </iframe>
                                </> :
                                ''
                            }
                            <button onClick={() => setImg(!img)}>Cancel</button>
                        </>
                    } 
                    <button type='submit'>Post</button>
                </form> :
                ''
            }
            {allposts.map(post => (
                <SidebarPost key={post.id}>
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
                </SidebarPost> 
            ))}
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

export default connect(mapStateToProps, { fetchUserLikes, clearError, fetchUser, postPost, deletePost })(Posts)