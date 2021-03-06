import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    DropdownItem
} from 'reactstrap'
import { 
    addLike, 
    removeLike,
    addLike1, 
    removeLike1,
    deletePost,
    addComment,
    addComment1,
    removeComment,
    removeComment1
} from '../../actions'
import { connect } from 'react-redux'
import axiosWithAuth2 from '../../utils/axiosWithAuth2'
import Close from '../../styles/imgs/close.svg'
import Delete from '../../styles/imgs/delete.svg'
import Check from '../../styles/imgs/check.svg'
import ListLikes from './ListLikes'

import { Post, PostContainer, Header, PostBody, PostDeets, Clip, CloseHelper, Unlike, Like, CommentSection, SidebarPostPost } from '../../styles/Social'

const LoadComments = props => {
    const [current, setCurrent] = useState({})
    const [comments, setComments] = useState([])
    const [modal, setModal] = useState(false)
    const [modald, setModald] = useState(false)
    const toggled = () => setModald(!modald)
    const toggle = () => setModal(!modal)
    const likedPostId = []

    const [newComment, setNewComment] = useState({
        comment: ''
    })

    useEffect(() => {
        axiosWithAuth2()
            .get(`/api/posts/${props.post.id}/post`)
                .then(res => {
                    setCurrent(res.data)
                    axiosWithAuth2()
                        .get(`/api/comments/${props.post.id}/post`)
                            .then(success => setComments(success.data))
                            .catch(err => console.log(err))
                })
                .catch(err => console.log(err))
    }, [])

    props.userLikes.forEach(likedposts => {
        likedPostId.push(likedposts.post_id)
    })

    const handleChanges = e => {
        setNewComment({
            ...newComment,
            [e.target.name]: e.target.value
        })
    }

    const submitComment = e => {
        e.preventDefault()
        props.addComment1({ comment: newComment.comment, comment_username: localStorage.getItem('name'), user_id: localStorage.getItem('cred') }, current.id)
        setComments([
            ...comments, { comment: newComment.comment, comment_username: localStorage.getItem('name'), id: Date.now(), user_id: localStorage.getItem('cred'), is_player: props.user.is_player }])
        setNewComment({ comment: '' })
        setCurrent({ ...current, comment_number: current.comment_number+1 })
    }

    const removeCommentHelper = comment_id => {
        props.removeComment1(comment_id, current.id)
        const newarr = comments.filter(comm => comment_id !== comm.id)
        setComments(newarr)
        setCurrent({ ...current, comment_number: current.comment_number-1 })
    }

    const addLikeHelper = post_id => {
        props.addLike1(localStorage.getItem('name'), localStorage.getItem('cred'), post_id)
        likedPostId.push(post_id)
        setCurrent({ ...current, like_number: current.like_number+1 })
    }

    const removeLikeHelper = post_id => {
        props.removeLike1(localStorage.getItem('name'), localStorage.getItem('cred'), post_id)
        likedPostId.filter(like => post_id !== like)
        setCurrent({ ...current, like_number: current.like_number-1 })
    }

    return (
        <div>
            {props.sidebar ?
                <CommentSection onClick={toggle}>
                    <SidebarPostPost className='showpost code'>{props.post.post}</SidebarPostPost>
                    {props.post.img !== '' ?
                        <Clip>
                            <iframe width="445" height="250" className='postimage2'
                                src={`${props.post.img}?autoplay=1&mute=1&loop=1`}>
                            </iframe>
                        </Clip> : ''
                    }
                </CommentSection> :
                <Button color="danger" onClick={toggle}>Load Comments... [{current.comment_number}]</Button>
            }
            
            <Post isOpen={modal} toggle={toggle}>
                <PostContainer key={current.id} className='explore'>
                    <Header>
                        <PostDeets>
                            <p className='playerusername code'>{props.username}</p>
                            <p className='date code'>{current.created_at}</p>
                            <CloseHelper onClick={toggle}><img src={Close} /></CloseHelper>
                        </PostDeets>
                        <PostBody className='showpost code'>{current.post}</PostBody>
                        {current.img !== '' ? 
                            <Clip>
                                <iframe width="445" height="250" className='postimage2'
                                    src={`${props.post.img}?autoplay=1&mute=1&loop=1`}>
                                </iframe>
                            </Clip> :
                            ''
                        }
                        <ListLikes post={current} />
                        {current.user_id === localStorage.getItem('cred') ?
                            <>
                                <DropdownItem onClick={toggled}><img src={Delete} /></DropdownItem>
                                <Modal isOpen={modald} toggle={toggled}>
                                    <ModalHeader toggle={toggled}>Are you sure?</ModalHeader>
                                    <ModalBody>
                                        <DropdownItem color='danger' onClick={() => props.deletePost(localStorage.getItem('cred'), {postid: current.id})}><img src={Check} /></DropdownItem>
                                        <DropdownItem color='primary' onClick={toggled}><img src={Close} /></DropdownItem>
                                    </ModalBody>
                                </Modal>
                            </> :
                            ''
                        }
                        {!likedPostId.includes(current.id) ? 
                            <Like onClick={() => addLikeHelper(current.id)}>Like</Like> :
                            <Unlike onClick={() => removeLikeHelper(current.id)}>Unlike</Unlike>
                        }

                    </Header>
                        <ModalBody>
                            {comments.map(comment => (
                                <>
                                    {comment.is_player ?
                                        <div key={comment.id} className='comment'>
                                            <Link
                                                to={`/player/${comment.comment_username}`}
                                            >
                                                <p id='playerusername'>{comment.comment_username}</p>
                                            </Link>
                                            <p>{comment.comment}</p>
                                            {comment.comment_username === props.user.username ? 
                                                <img src={Close} onClick={() => removeCommentHelper(comment.id)} /> :
                                                ''
                                            }
                                        </div> :
                                        <div className='comment' key={comment.id}>
                                            <p id='username'>{comment.comment_username}</p>
                                            <p>{comment.comment}</p>
                                            {comment.comment_username === props.user.username ? 
                                                <img src={Close} onClick={() => removeCommentHelper(comment.id)} /> :
                                                ''
                                            }
                                        </div>
                                    }
                                </>
                            ))}
                        </ModalBody>
                        <ModalFooter>
                            <form onSubmit={submitComment} className='commentcomment'>
                                <textarea
                                    className='commentcomment'
                                    id='comment'
                                    name='comment'
                                    value={newComment.comment}
                                    placeholder='Comment on post'
                                    onChange={handleChanges}
                                />
                                <Clip><button type='submit' className='button type3'>Post Comment</button></Clip>
                            </form>
                        </ModalFooter>
                    </PostContainer>
            </Post>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        user: state.user,
        posts: state.posts,
        userLikes: state.userLikes
    }
}

export default connect(mapStateToProps, { addLike, removeLike, removeLike1, addLike1, addComment, addComment1, removeComment, removeComment1, deletePost })(LoadComments)