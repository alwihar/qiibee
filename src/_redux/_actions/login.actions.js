export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

export const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    };
}

export const loginError = (message) => {
    return {
        type: LOGIN_ERROR,
        payload: message
    };
}

export const logOut = () => {
    return {
        type: LOGOUT
    };
}

