import axios from 'axios';
export const AUTH_LOGIN_BEGIN = 'AUTH_LOGIN_BEGIN';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_ERROR = 'AUTH_LOGIN_ERROR';

export const loginAction = (username, password) => dispatch => {

    dispatch({ type: AUTH_LOGIN_BEGIN });
    axios.post('http://104.248.25.178:8081/api/authenticate', {
        username: username,
        password: password
    }).then(res => {
        dispatch({ type: AUTH_LOGIN_SUCCESS, payload: res });
        localStorage.setItem('token', res.data.jwttoken)
    }).catch(err => dispatch({ type: AUTH_LOGIN_ERROR, payload: err }))
};