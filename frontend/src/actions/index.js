import * as actionTypes from './actionTypes';

export const login = user => {
    return {
        type: actionTypes.LOG_IN,
        payload: {
            currentUser: user
        }
    }
}

export const logout = () => {

    return {
        type: actionTypes.LOG_OUT,
        payload: {
            currentUser: null
        }
    }
}


