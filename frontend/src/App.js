import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

class App extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    // this.checkIfLoggedIn();
  }

  login = formData => {
    // THIS IS A SIMULATED LOGIN. REMOVE LATER
    fetch('http://localhost:4000/api/login')
      .then(res => res.json())
      .then(res => {
        this.setState({
          user: res
        });
      });
  };

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

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Navigation user={this.state.user} />
          <Fragment>
            <Switch>
              <Route
                path="/login"
                exact
                component={() => (
                  <Login login={this.login} user={this.state.user} />
                )}
              />
              <Route
                path="/register"
                exact
                component={() => (
                  <Register user={this.state.user} register={this.register} />
                )}
              />
              <Route
                path="/profil"
                exact
                component={() => <Profile user={this.state.user} />}
              />
            </Switch>
          </Fragment>
        </Fragment>
      </Router>
    );
  }
}

export default App;
