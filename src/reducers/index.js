import {
    FETCHING_START,
    FETCHING_ERROR,
    DELETE_STREAMERS,
    FETCHING_SUCCESS,
    FETCHING_SUCCESS_LOGIN,
    CLEAR_ERROR, 
    FETCHING_SUCCESS_USERLIKES,
    SET_NOWLIVE,
    SET_SOCIAL,
    SET_SCHED,
    ADD_ITEM,
    CHANGE_BALANCE
} from '../actions'

const initialState = {
    isLoading: false,
    error: null,
    // live: [],
    user: {},
    // following: [],
    // users: [],
    posts: [],
    userLikes: [],
    loggedin: false,
    side: 'Social'
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
                error: null,
                isLoading: false
            }
        case CHANGE_BALANCE:
            if (action.payload.op === '+'){
                return {
                    ...state,
                    isLoading: false,
                    bal: state.bal+action.payload.cash
                }
            } else {
                return {
                    ...state,
                    isLoading: false,
                    bal: state.bal-action.payload.cash
                }
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
        case ADD_ITEM:
            return{
                ...state,
                isLoading: false,
                cart: [...state.cart, action.payload]
            }
        case FETCHING_SUCCESS: 
            return {
                ...state,
                isLoading: false
            }
        case SET_SOCIAL:
            return {
                ...state,
                isLoading: false,
                side: 'Social'
            }
        case SET_NOWLIVE:
            return {
                ...state,
                isLoading: false,
                side: 'Now-Live'
            }
        case SET_SCHED:
            return {
                ...state,
                isLoading: false,
                side: localStorage.getItem('side')
            }
        default: 
            return state
    }
}