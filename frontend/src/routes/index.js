import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from '../components/home';
import LoginForm from '../components/login-form/login-form';
import Navigation from '../components/navigation';
import { Container } from 'reactstrap';

export default () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={LoginForm} />
        </Switch>
      </Container>
    </div>
  </BrowserRouter>
);
