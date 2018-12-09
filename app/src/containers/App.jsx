/**
 * App Container
 * Wrapper container to introduce Redux Store and Routes
 */

/**
 * Node Modules
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

/**
 * Page Componenets
 */

import DbTest from '../pages/DbTest';
import Education from '../pages/Education';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Research from '../pages/Research';
import Work from '../pages/Work';
import Register from '../pages/Register';
import Login from '../pages/Login';

/**
 * Components
 */

import Navbar from '../components/Navbar';
import {PrivateRoute} from '../components';

/**
 * Actions
 */

import {alertActions} from '../actions';

/**
 * App class to load React component
 * @type {Object}
 */
class App extends Component {

  constructor(props) {
    super(props);

    const {dispatch} = this.props;
  }

  /**
   * React render method
   * @return {[type]} [description]
   */
  render() {
    const {alert} = this.props;
    return (
      <Router>
        <div>
          <Navbar />
          {alert &&
            <div className = {`alert ${alert.type}`}>
              {alert.message}
            </div>}
          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route path = "/projects" component = {Projects}/>
            <Route path = "/work" component = {Work}/>
            <Route path = "/research" component = {Research}/>
            <Route path = "/education" component = {Education}/>
            <Route path = "/dbtest" component = {DbTest}/>
            <Route path = "/register" component = {Register} />
            <Route path = "/login" component = {Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  alert: state.alert,
});

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
