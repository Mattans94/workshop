import React, { Component } from 'react';

export default class Register extends Component {
  state = {
    email: '',
    password: '',
    confirmPass: '',
    age: '',
    firstName: '',
    lastName: ''
  };

  handleSubmit = () => {
    this.props.register(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSumbit}>
        <div className="form-group row">
          <label htmlFor="email" className="col-sm-2 col-form-label">
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
          <label htmlFor="firstName" className="col-sm-2 col-form-label">
            Förnamn
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Förnamn"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="lastName" className="col-sm-2 col-form-label">
            Efternamn
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Efternamn"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="age" className="col-sm-2 col-form-label">
            Ålder
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="age"
              placeholder="Ålder"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Lösenord
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Lösenord"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="confirmPass" className="col-sm-2 col-form-label">
            Bekräfta lösenord
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="confirmPass"
              placeholder="Bekräfta lösenord"
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
