import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../redux/login/loginActions';
// import { Loader } from 'react-loader';

const SignIn = ({loginAction, loading, error}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        loginAction(username, password);
        setUsername('');
        setPassword('');
        localStorage.setItem('username', username);
    }
   
    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="username">Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                
                <button type="submit" className="btn pink lighten-1 z-depth-0">
                    Sign in 
                     {loading &&
                        <div class="preloader-wrapper small active">
                            <div class="spinner-layer spinner-green-only">
                                <div class="circle-clipper left">
                                    <div class="circle"></div>
                                </div><div class="gap-patch">
                                    <div class="circle"></div>
                                </div><div class="circle-clipper right">
                                    <div class="circle"></div>
                                </div>
                            </div>
                        </div>
                    }
                </button>
                
            </form>
            {error && <div className="card-panel"><span className="red-text lighten-2">Error == {error.message}</span> </div>}
        </div>
    )

}

const mapState = (state) => {
    return {
        loading: state.login.loading,
        error: state.login.error
    }
}

export default connect(mapState, {loginAction})(SignIn)