import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Home from './components/home';
import LoginForm from './components/login-form/login-form';
import Navigation from './components/navigation';
import Profile from './components/profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  loginAndSetState = () => {
    console.log('Logged in from app component');
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(res => console.log(res));

    this.setState({
      loggedIn: true
    });
    console.log(this.state);
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation loggedIn={this.state.loggedIn} />
          <Container>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route
                path="/login"
                component={() => (
                  <LoginForm
                    loginLogic={this.loginAndSetState}
                    isLoggedIn={this.state.loggedIn}
                  />
                )}
              />
              <Route
                path="/profile"
                component={() => <Profile isLoggedIn={this.state.loggedIn} />}
              />
            </Switch>
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
