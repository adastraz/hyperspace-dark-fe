import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth.js'
import history from '../utils/history.js'
export const FETCHING_START = 'FETCHING_START'
export const FETCHING_ERROR = 'FETCHING_ERROR'
export const DELETE_STREAMERS = 'DELETE_STREAMERS'
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS'

export const getStreamers = streamers => dispatch => {
    dispatch({ type: FETCHING_START })
    dispatch({ type: DELETE_STREAMERS })
    const data = []
    streamers.forEach(ele => {
        axiosWithAuth().get(`/?user_login=${ele}`)
            .then(res => res.data.data[0].user_name ? data.push(res.data.data) : console.log(res.data.data))
            .catch(err => dispatch({ type: FETCHING_ERROR, payload: err }))
    })
    dispatch({ type: FETCHING_SUCCESS, payload: data })
}