import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import {connect} from 'react-redux'

const SignedOutLinks = ({ loggedIn }) => {
    const username = localStorage.getItem('username');
    const history = useHistory();
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        history.push('/signin')
    }

    return (
        <ul className="right">
            <li><NavLink to="/signup">Sign Up</NavLink></li>
            <li onClick={handleLogout}><NavLink to={loggedIn ? '/' : '/signin'}>{loggedIn ? 'Logout' : 'Login'}</NavLink></li>
            {loggedIn && <li className="pink lighten-1">{username}</li>}
        </ul>
    )
}

const mapState = (state) => {
    return {
        loggedIn: state.login.loggedIn
    }
}

export default connect(mapState)(SignedOutLinks)
