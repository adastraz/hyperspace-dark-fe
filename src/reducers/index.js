import {
    FETCHING_START,
    FETCHING_ERROR,
    DELETE_STREAMERS,
    FETCHING_SUCCESS
} from '../actions'

const initialState = {
    isLoading: false,
    error: null,
    live: []
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
        default: 
            return state
    }
}