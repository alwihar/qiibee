const initialState = {
    mainUser: '',
    loggedIn : false,
    errorMessage: ''
};

export default function login(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                loggedIn: true,
                mainUser: action.payload
            };
        case 'LOGIN_ERROR':
            return {
                ...state,
                errorMessage: action.payload
            };
        case 'LOGOUT':
            return {
                ...state,
                loggedIn: false,
                mainUser: ''
            };
        default:
            return state
    }
}