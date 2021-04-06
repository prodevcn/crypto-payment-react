import {FETCHING, FETCHED, ERROR} from '../constants/action';

export default function reducer (
    state = {

    }, action) {
        switch(action.type) {
            case ERROR: {
                return {
                    ...state,
                    isError: true,
                    errMsg: action.payload
                }
            }
            case FETCHING: {
                return {
                    ...state,
                    fetching: true,
                }
            }
            case FETCHED: {
                return {
                    ...state,
                    fetching: false
                }
            }
            default: {
                return state;
            }
        }
    } 