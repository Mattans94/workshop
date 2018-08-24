import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Register from './components/Register';
import './css/style.css';

class App extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    // this.checkIfLoggedIn();
  }

  login = formData => {
    this.setState({
      user: formData
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
        this.setState(res);
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
        <div>
          <Navigation user={this.state.user} />
          {this.state.user ? (
            <p>
              You are:{' '}
              {`${this.state.user.firstName} ${this.state.user.lastName}`}
            </p>
          ) : (
            ''
          )}
          <div className="container">
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
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
