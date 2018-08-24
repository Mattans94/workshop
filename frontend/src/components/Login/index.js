import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
  // Props: login

  state = {
    email: '',
    password: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSumbit = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  render() {
    if (this.props.user) {
      return <Redirect to="/" />;
    }

    return (
      <form onSubmit={this.handleSumbit}>
        <div className="form-group row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Din mail"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <button className="btn btn-primary" type="submit">
          Logga in
        </button>
      </form>
    );
  }
}
