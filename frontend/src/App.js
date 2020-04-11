import React from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter, Redirect } from 'react-router-dom';
import './App.css';
import { Provider, connect } from 'react-redux';
import { login, logout } from './actions'
import { store, persistor } from './reducers/store';
import { PersistGate } from 'redux-persist/integration/react';
import {logoutService} from './services'


import Home from './home'
import Login from './login'
import Register from './register'
import './App.css';
//import { ProtectedRoute } from './protected.route';

import requireAuth from './auth';


class App extends React.Component {



  componentDidMount () {
    window.onbeforeunload = function () {
      return 'Do you wanna leave bro ?'
    }
    window.onunload = async function  () {
      await logoutService()
      window.localStorage.clear()
    }
  }
  
  AppRoot = () => {


    return (
      <React.Fragment>
        <Switch>
          <Redirect exact path="/" to="/login" />
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/home" component={requireAuth(Home)} />
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/home2" component={Home}></Route>
        </Switch>
      </React.Fragment>
    )
  }



  render() {
    const mapStateFromProps = state => ({
      currentUser: state.user.currentUser
    })

    const RootwithAuth = withRouter(connect(mapStateFromProps, { login, logout })(this.AppRoot))

    return  (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <RootwithAuth />
          </Router>
        </PersistGate>
      </Provider>

    )
  }
}

export default App;

