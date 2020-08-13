import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import { useHistory, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './layout/Navbar';
import { Home } from './components/Home';


const App = ({loggedIn, error}) => {

  const history = useHistory();
  useEffect(() => {
    if (loggedIn) {
      history.push('/');
    }
    if (error) {
      history.push('/signin');
    }
  }, [history, loggedIn, error])

  return (
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Redirect to="/signin" />
        </Switch>
      </div>
  );
}

const mapState = (state) => {
  return {
    loggedIn: state.login.loggedIn,
    loading: state.login.loading,
    error: state.login.error
  }
}

export default connect(mapState)(App);
