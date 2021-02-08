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

    const followerNum = []

    props.following.forEach(follow => {
        followerNum.push(follow.username)
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
            ...comments, { comment: newComment.comment, comment_username: localStorage.getItem('name'), id: Date.now(), user_id: localStorage.getItem('cred') }])
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
                <Button id='sidelc' onClick={toggle}>
                    <p className='showpost code'>{props.post.post}</p>
                    {props.post.img != '' ?
                        <img className='postimage2' src={props.post.img} /> : ''
                    }
                </Button> :
                <Button color="danger" onClick={toggle}>Load Comments... [{current.comment_number}]</Button>
            }
            
            <Modal isOpen={modal} toggle={toggle}>
                <div key={current.id} className='explore'>
                    <ModalHeader>
                        <p>{props.username}</p>
                        <p>{current.post}</p>
                        <p>{current.location}</p>
                        <p>{current.created_at}</p>
                        {current.img != '' ? 
                            <img src={current.img} className='postimage'/> :
                            ''
                        }
                        <ListLikes post={current} />
                        {current.user_id == localStorage.getItem('cred') ?
                            <>
                                <DropdownItem onClick={toggled}><img src={Delete} /></DropdownItem>
                                <Modal isOpen={modald} toggle={toggled}>
                                    <ModalHeader toggle={toggled}>Are you sure?</ModalHeader>
                                    <ModalBody>
                                        <Button color='danger' onClick={() => props.deletePost(localStorage.getItem('cred'), {postid: current.id})}><img src={Check} /></Button>
                                        <Button color='primary' onClick={toggled}><img src={Close} /></Button>
                                    </ModalBody>
                                </Modal>
                            </> :
                            ''
                        }
                        {!likedPostId.includes(current.id) ? 
                            <a className='like' onClick={() => addLikeHelper(current.id)}>Like</a> :
                            <a className='unlike' onClick={() => removeLikeHelper(current.id)}>Unlike</a>
                        }

                    </ModalHeader>
                        <ModalBody>
                            {comments.map(comment => (
                                <>
                                    {/* {followerNum.includes(comment.comment_username) ? 
                                        <div key={comment.id}>
                                            <Link
                                            to={`/friend/${comment.user_id}`}>
                                                {comment.comment_username}
                                            </Link>
                                            <p>{comment.comment}</p>
                                        </div> :*/}
                                    {comment.is_player ?
                                        <div key={comment.id} className='comment'>
                                            <Link
                                                to={`/player/${comment.comment_username}`}
                                            >
                                                <p id='playerusername'>{comment.comment_username}</p>
                                            </Link>
                                            <p>{comment.comment}</p>
                                        </div> :
                                        <div className='comment' key={comment.id}>
                                            <p id='username'>{comment.comment_username}</p>
                                            <p>{comment.comment}</p>
                                        </div>
                                    }
                                </>
                            ))}
                        </ModalBody>
                        <ModalFooter>
                            <form onSubmit={submitComment}>
                                <textarea
                                    className='commentcomment'
                                    id='comment'
                                    name='comment'
                                    value={newComment.comment}
                                    placeholder='Comment on post'
                                    onChange={handleChanges}
                                />
                                <button type='submit'>Post Comment</button>
                            </form>
                        </ModalFooter>
                    </div>
            </Modal>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        user: state.user,
        // following: state.following,
        // users: state.users,
        posts: state.posts,
        userLikes: state.userLikes
    }
}

export default connect(mapStateToProps, { addLike, removeLike, removeLike1, addLike1, addComment, addComment1, removeComment, removeComment1 })(LoadComments)