import { AUTH_LOGIN_BEGIN, AUTH_LOGIN_ERROR, AUTH_LOGIN_SUCCESS } from "./loginActions";

const initialState = {
    loading: false,
    error: null,
    user: [],
    loggedIn: false
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_LOGIN_BEGIN:
            return {
                ...state,
                loading: true,
                loggedIn: false
            };
        case AUTH_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: null,
                loggedIn: true
            };
        case AUTH_LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                loggedIn: false
            };
        default:
            return state
    }
};