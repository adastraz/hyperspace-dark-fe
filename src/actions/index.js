import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth.js'
import axiosWithAuth2 from '../utils/axiosWithAuth2.js'
import history from '../utils/history.js'
export const FETCHING_START = 'FETCHING_START'
export const FETCHING_ERROR = 'FETCHING_ERROR'
export const DELETE_STREAMERS = 'DELETE_STREAMERS'
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS'
export const FETCHING_SUCCESS_LOGIN = 'FETCHING_SUCCESS_LOGIN'
export const CLEAR_ERROR = 'CLEAR_ERROR'
export const FETCHING_SUCCESS_USERS = 'FETCHING_SUCCESS_USERS'
export const DELETE_POSTS = 'DELETE_POSTS'
export const FETCHING_SUCCESS_POSTS = 'FETCHING_SUCCESS_POSTS'
export const FETCHING_SUCCESS_USERLIKES = 'FETCHING_SUCCESS_USERLIKES'
export const FETCHING_SUCCESS_REDIRECT = 'FETCHING_SUCCESS_REDIRECT'
export const FETCHING_SUCCESS_FOLLOWING = 'FETCHING_SUCCESS_FOLLOWING'
export const SET_NOWLIVE = 'SET_NOWLIVE'
export const SET_SOCIAL = 'SET_SOCIAL'
export const SET_SCHED = 'SET_SCHED'
export const ADD_ITEM = 'ADD_ITEM'
export const CHANGE_BALANCE = 'CHANGE_BALANCE'


// addLike, removeLike, removeLike1, addLike1, addComment, addComment1, removeComment, removeComment1, deletePost

export const getStreamers = streamers => dispatch => {
    dispatch({ type: FETCHING_START })
    dispatch({ type: DELETE_STREAMERS })
    const data = []
    streamers.forEach(ele => {
        axiosWithAuth().get(`/?user_login=${ele}`)
            .then(res => res.data.data[0].user_name ? data.push(res.data.data) : console.log(res.data.data))
            .catch(err => dispatch({ type: CLEAR_ERROR }))
    })
    dispatch({ type: FETCHING_SUCCESS, payload: data })
}

// export const addItem = (item, quantity) => dispatch => {
//     dispatch({ type: FETCHING_START })
//     var i 
//     for (i = 0; i < quantity; i++) {
//         dispatch({ type: ADD_ITEM, payload: item })
//     }
// }
// 
// export const changeBal = (cash, op) => dispatch => {
//     dispatch({ type: FETCHING_START })
//     dispatch({type: CHANGE_BALANCE, payload: { cash: cash, op: op }})
// }

export const setNowlive = () => dispatch => {
    dispatch({ type: FETCHING_START })
    localStorage.setItem('side', 'Now-Live')
    dispatch({ type: SET_SCHED })
}

export const setSocial = () => dispatch => {
    dispatch({ type: FETCHING_START })
    localStorage.setItem('side', 'Social')
    dispatch({ type: SET_SCHED })
}

export const setSched = () => dispatch => {
    dispatch({ type: FETCHING_START })
    localStorage.setItem('side', 'Schedule')
    dispatch({ type: SET_SCHED })
}

export const login = creds => dispatch => {
    dispatch ({ type: FETCHING_START })
    axios
        .post('https://hdsocial.herokuapp.com/api/auth/login', creds)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('cred', res.data.user.id)
                localStorage.setItem('name', res.data.user.username)
                window.location.reload()
                dispatch({ type: FETCHING_SUCCESS_LOGIN, payload: res.data.user })
            })
            .catch(err => dispatch({ type: FETCHING_ERROR, payload: err }))
}

export const register = creds => dispatch => {
    dispatch({ type: FETCHING_START })
    axios
        .post('https://hdsocial.herokuapp.com/api/auth/register', creds)
            .then(res => {
                dispatch({ type: FETCHING_SUCCESS })
                dispatch({ type: FETCHING_START })
                axios 
                    .post('https://hdsocial.herokuapp.com/api/auth/login', creds)
                        .then(res => {
                            localStorage.setItem('token', res.data.token)
                            localStorage.setItem('cred', res.data.user.id)
                            localStorage.setItem('name', res.data.user.username)
                            window.location.reload()
                            dispatch({ type: FETCHING_SUCCESS_LOGIN, payload: res.data.user })
                        })
                        .catch(err => dispatch({ type: FETCHING_ERROR, payload: err }))
            })
            .catch(err => dispatch({ type: FETCHING_ERROR, payload: err }))
}

export const fetchUser = id => dispatch => {
    dispatch({ type: FETCHING_START })
    axiosWithAuth2()
        .get(`/api/users/${id}`)
            .then(res => {
                console.log('fetch user', res)
                dispatch({ type: FETCHING_SUCCESS_LOGIN, payload: res.data })
            })
            .catch(err => dispatch({ type: FETCHING_ERROR, payload: err }))
}

export const fetchUserLikes = userid => dispatch => {
    dispatch({ type: FETCHING_START })
    axiosWithAuth2()
        .get(`/api/likes/${userid}/user`)
            .then(res => {
                dispatch({ type: FETCHING_SUCCESS_USERLIKES, payload: res.data})
            })
            .catch(err => dispatch({ type: FETCHING_ERROR, payload: err }))
}

export const postPost = (userid, post) => dispatch => {
    dispatch({ type: FETCHING_START })
    axiosWithAuth2()
        .post(`/api/posts/${userid}`, post)
            .then(res => {
                dispatch({ type: FETCHING_SUCCESS })
            })
}

export const deletePost = (userid, postid) => dispatch => {
    dispatch({ type: FETCHING_START })
    axiosWithAuth2()
        .delete(`/api/posts/${userid}`, { data: postid })
            .then(res => {
                dispatch({ type: FETCHING_SUCCESS })
                window.location.reload()
            })
            .catch(err => dispatch({ type: FETCHING_ERROR, payload: err }))
}

export const addLike = (user, post_id) => dispatch => {
    dispatch({ type: FETCHING_START })
    axiosWithAuth2()
        .post(`/api/posts/${post_id}/like`, {like_username: user.username, user_id: user.id})
            .then(res => {
                dispatch({ type: FETCHING_SUCCESS })
                dispatch({ type: FETCHING_START })
                axiosWithAuth2()
                    .get(`/api/likes/${user.id}/user`)
                        .then(res => {
                            dispatch({ type: FETCHING_SUCCESS_USERLIKES, payload: res.data})
                            window.location.reload()
                        })
                        .catch(err => dispatch({ type: FETCHING_ERROR, payload: err }))
            })
            .catch(err => dispatch({ type: FETCHING_ERROR, payload: err }))
}

// export const followUsername = (userid, friendid) => dispatch => {
//     dispatch({ type: FETCHING_START })
//     axiosWithAuth2()
//         .post(`/api/friends/${userid}/byusername`, friendid)
//             .then(res => {
//                 dispatch({ type: FETCHING_SUCCESS })
//                 dispatch({ type: FETCHING_START })
//                 axiosWithAuth2()
//                     .get(`/api/friends/${userid}`)
//                         .then(res => {
//                             dispatch({ type: FETCHING_SUCCESS_FOLLOWING, payload: res.data })
//                         })
//                         .catch(err => dispatch({ type: FETCHING_ERROR, payload: err }))
//                         })
//             .catch(err => dispatch({ type: FETCHING_ERROR, payload: err }))
// }
// 
// export const unfollowUsername = (userid, friendid) => dispatch => {
//     dispatch({ type: FETCHING_START })
//     axiosWithAuth2()
//         .delete(`/api/friends/${userid}/byusername`, { data: friendid })
//             .then(res => {
//                 dispatch({ type: FETCHING_SUCCESS })
//                 dispatch({ type: FETCHING_START })
//                 axiosWithAuth2()
//                     .get(`/api/friends/${userid}`)
//                         .then(res => {
//                             dispatch({ type: FETCHING_SUCCESS_FOLLOWING, payload: res.data })
//                         })
//                         .catch(err => dispatch({ type: FETCHING_ERROR, payload: err }))
//                         })
//             .catch(err => dispatch({ type: FETCHING_ERROR, payload: err }))
// }

export const removeLike = (user, post_id) => dispatch => {
    dispatch({ type: FETCHING_START })
    axiosWithAuth2()
        .delete(`/api/posts/${post_id}/like`, {data: {like_username: user.username}})
            .then(res => {
                dispatch({ type: FETCHING_SUCCESS })
                dispatch({ type: FETCHING_START })
                axiosWithAuth2()
                    .get(`/api/likes/${user.id}/user`)
                        .then(res => {
                            dispatch({ type: FETCHING_SUCCESS_USERLIKES, payload: res.data})
                            window.location.reload()
                        })
                        .catch(err => dispatch({ type: FETCHING_ERROR, payload: err }))
            })
            .catch(err => dispatch({ type: FETCHING_ERROR, payload: err }))
}

export const addLike1 = (username, id, post_id) => dispatch => {
    dispatch({ type: FETCHING_START })
    axiosWithAuth2()
        .post(`/api/posts/${post_id}/like`, {like_username: username, user_id: id})
            .then(res => {
                dispatch({ type: FETCHING_SUCCESS })
                dispatch({ type: FETCHING_START })
                axiosWithAuth2()
                    .get(`/api/likes/${id}/user`)
                        .then(res => {
                            dispatch({ type: FETCHING_SUCCESS_USERLIKES, payload: res.data})
                        })
                        .catch(err => dispatch({ type: FETCHING_ERROR, payload: err }))
            })
            .catch(err => dispatch({ type: FETCHING_ERROR, payload: err }))
}

// export const getFollowing = id => dispatch => {
//     dispatch({ type: FETCHING_START })
//     axiosWithAuth2()
//         .get(`/api/friends/${id}`)
//             .then(res => {
//                 dispatch({ type: FETCHING_SUCCESS_FOLLOWING, payload: res.data })
//             })
//             .catch(err => dispatch({ type: FETCHING_ERROR, payload: err }))
// }

export const removeLike1 = (username, id, post_id) => dispatch => {
    dispatch({ type: FETCHING_START })
    axiosWithAuth2()
        .delete(`/api/posts/${post_id}/like`, {data: {like_username: username}})
            .then(res => {
                dispatch({ type: FETCHING_SUCCESS })
                dispatch({ type: FETCHING_START })
                axiosWithAuth2()
                    .get(`/api/likes/${id}/user`)
                        .then(res => {
                            dispatch({ type: FETCHING_SUCCESS_USERLIKES, payload: res.data})
                        })
                        .catch(err => dispatch({ type: FETCHING_ERROR, payload: err }))
            })
            .catch(err => dispatch({ type: FETCHING_ERROR, payload: err }))
}

export const addComment = (comment, post_id) => dispatch => {
    dispatch({ type: FETCHING_START })
    axiosWithAuth2()
        .post(`/api/posts/${post_id}/comment`, comment)
            .then(res => {
                dispatch({ type: FETCHING_SUCCESS })
                window.location.reload()
                })
            .catch(err => dispatch({ type: FETCHING_ERROR, payload: err }))
}

export const addComment1 = (comment, post_id) => dispatch => {
    dispatch({ type: FETCHING_START })
    axiosWithAuth2()
        .post(`/api/posts/${post_id}/comment`, comment)
            .then(res => {
                dispatch({ type: FETCHING_SUCCESS })
                })
            .catch(err => dispatch({ type: FETCHING_ERROR, payload: err }))
}

export const removeComment = (commentid, post_id) => dispatch => {
    dispatch({ type: FETCHING_START })
    axiosWithAuth2()
        .delete(`/api/posts/${post_id}/comment`, {data: {comment_id: commentid}})
            .then(res => {
                dispatch({ type: FETCHING_SUCCESS })
                window.location.reload()
                })
            .catch(err => dispatch({ type: FETCHING_ERROR, payload: err }))
}

export const removeComment1 = (commentid, post_id) => dispatch => {
    dispatch({ type: FETCHING_START })
    axiosWithAuth2()
        .delete(`/api/posts/${post_id}/comment`, {data: {comment_id: commentid}})
            .then(res => {
                dispatch({ type: FETCHING_SUCCESS })
                })
            .catch(err => dispatch({ type: FETCHING_ERROR, payload: err }))
}

export const addAgent = (agent, id) => dispatch => {
    dispatch({ type: FETCHING_START })
    axiosWithAuth2()
        .post(`/api/users/${id}/details/agent`, agent)
            .then(res => {
                dispatch({ type: FETCHING_SUCCESS })
            })
            .catch(err => dispatch({ type: FETCHING_ERROR, payload: err }))
}

export const addYtlink = (ytlink, id) => dispatch => {
    dispatch({ type: FETCHING_START })
    axiosWithAuth2()
        .post(`/api/users/${id}/details/ytlink`, ytlink)
            .then(res => {
                dispatch({ type: FETCHING_SUCCESS })
            })
            .catch(err => dispatch({ type: FETCHING_ERROR, payload: err }))
}

export const addCreator = (creator, id) => dispatch => {
    dispatch({ type: FETCHING_START })
    axiosWithAuth2()
        .post(`/api/users/${id}/details/creator`, creator)
            .then(res => {
                dispatch({ type: FETCHING_SUCCESS })
            })
            .catch(err => dispatch({ type: FETCHING_ERROR, payload: err }))
}

export const addOthergame = (othergame, id) => dispatch => {
    dispatch({ type: FETCHING_START })
    axiosWithAuth2()
        .post(`/api/users/${id}/details/othergame`, othergame)
            .then(res => {
                dispatch({ type: FETCHING_SUCCESS })
            })
            .catch(err => dispatch({ type: FETCHING_ERROR, payload: err }))
}

export const deleteAgent = id => dispatch => {
    dispatch({ type: FETCHING_START })
    axiosWithAuth2()
        .delete(`/api/users/${id}/delete/agent`, { data: id })
            .then(res => {
                dispatch({ type: FETCHING_SUCCESS })
            })
            .catch(err => dispatch({ type: FETCHING_ERROR, payload: err }))
}

export const deleteCreator = id => dispatch => {
    dispatch({ type: FETCHING_START })
    axiosWithAuth2()
        .delete(`/api/users/${id}/delete/creator`, { data: id })
            .then(res => {
                dispatch({ type: FETCHING_SUCCESS })
            })
            .catch(err => dispatch({ type: FETCHING_ERROR, payload: err }))
}

export const deleteYtlink = id => dispatch => {
    dispatch({ type: FETCHING_START })
    axiosWithAuth2()
        .delete(`/api/users/${id}/delete/ytlinks`, { data: id })
            .then(res => {
                dispatch({ type: FETCHING_SUCCESS })
            })
            .catch(err => dispatch({ type: FETCHING_ERROR, payload: err }))
}

export const deleteOthergame = id => dispatch => {
    dispatch({ type: FETCHING_START })
    axiosWithAuth2()
        .delete(`/api/users/${id}/delete/othergames`, { data: id })
            .then(res => {
                dispatch({ type: FETCHING_SUCCESS })
            })
            .catch(err => dispatch({ type: FETCHING_ERROR, payload: err }))
}

export const clearError = () => dispatch => {
    dispatch({ type: CLEAR_ERROR })
}