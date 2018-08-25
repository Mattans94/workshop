import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PublicRoute, PrivateRoute } from 'react-router-with-props';
import { connect } from 'react-redux';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

class App extends Component {
  // login = formData => {
  //   // THIS IS A SIMULATED LOGIN. REMOVE LATER
  //   fetch('http://localhost:4000/api/login')
  //     .then(res => res.json())
  //     .then(res => {
  //       this.setState({
  //         user: res
  //       });
  //     });
  // };

  checkIfLoggedIn = () => {
    const dummyData = {
      email: 'dummy@email.com'
    };
    if (dummyData) {
      this.setState({
        user: dummyData
      });
    }
  };

  register = formData => {
    console.log(formData);
    fetch('http://localhost:4000/api/registration', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(res => {
        if (res && res.success) {
          this.setState({
            user: res.user
          });
        } else {
          console.log('Returning false');
          return false;
        }
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  render() {
    const spinner = (
      <div className="spinner">
        <div className="rect1" />
        <div className="rect2" />
        <div className="rect3" />
        <div className="rect4" />
        <div className="rect5" />
      </div>
    );
    return (
      <Router>
        <Fragment>
          <Navigation />
          <Fragment>
            <Switch>
              <PublicRoute
                path="/login"
                exact
                authed={this.props.isLoggedIn}
                redirectTo="/profil"
                component={Login}
              />
              <PublicRoute
                path="/register"
                authed={this.props.isLoggedIn}
                redirectTo="/profil"
                exact
                component={Register}
              />
              <PrivateRoute
                path="/profil"
                exact
                authed={this.props.isLoggedIn}
                redirectTo="/login"
                text="Vänligen logga in för att se din profil"
                component={Profile}
              />
            </Switch>
          </Fragment>
          {this.props.isLoading ? spinner : ''}
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
    isLoading: state.loading
  };
};

export default connect(mapStateToProps)(App);
