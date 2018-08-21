import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    // Protect routes from people already logged in
    if (!this.props.isLoggedIn) return <Redirect to="/" />;

    return (
      <div>
        <p>Profile page!</p>
      </div>
    );
  };
}
