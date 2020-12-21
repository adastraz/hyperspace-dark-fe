import {
    FETCHING_START,
    FETCHING_ERROR,
    DELETE_STREAMERS,
    FETCHING_SUCCESS,
    FETCHING_SUCCESS_LOGIN,
    CLEAR_ERROR, 
    FETCHING_SUCCESS_USERLIKES
} from '../actions'

const initialState = {
    isLoading: false,
    error: null,
    live: [],
    user: {},
    following: [],
    users: [],
    posts: [],
    userLikes: [],
    loggedin: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_START:
            return {
                ...state,
                isLoading: true
            }
        case DELETE_STREAMERS:
            return {
                ...state,
                live: []
            }
        case FETCHING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                live: action.payload
            }
        case FETCHING_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            }
        case FETCHING_SUCCESS_LOGIN:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                loggedin: true
            }
        case FETCHING_SUCCESS_USERLIKES:
            return {
                ...state,
                isLoading: false,
                userLikes: action.payload
            }
        case FETCHING_SUCCESS: 
            return {
                ...state,
                isLoading: false
            }
        default: 
            return state
    }
}