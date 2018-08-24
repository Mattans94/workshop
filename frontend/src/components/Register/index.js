import React, { Component } from 'react';

export default class Register extends Component {
  state = {
    email: '',
    password: '',
    confirmPass: '',
    age: '',
    firstName: '',
    lastName: '',
    invalidForm: true
  };

  inputStyle = {
    invalid: {
      border: '2px solid red'
    },
    valid: {
      border: '2px solid green'
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.register(this.state);
  };

  handleChange = e => {
    console.log('Changed!', e.target.id);
    this.setState({
      [e.target.id]: e.target.value
    });
    this.validation(e);
  };

  validation = e => {
    const patterns = {
      email: /^([a-z\d]+)@([a-z\d]+)\.([a-z\d]{2,8})([\.a-z\d]{2,8})?$/i,
      firstName: /^[a-zåäöA-ZÅÄÖ]{2,20}$/,
      lastName: /^[a-zåäöA-ZÅÄÖ]{2,20}$/,
      age: /^[\d]{1,2}$/,
      password: /^[\w\s@-]{6,20}$/,
      confirmPass: new RegExp('^' + this.state.password + '$')
    };

    const regex = patterns[e.target.id];

    if (regex.test(e.target.value)) {
      e.target.className = 'form-control valid';
    } else {
      e.target.className = 'form-control invalid';
    }

    // Loop through and check if all fields are valid
    let invalidInputs = document.querySelectorAll('input.invalid');
    let validInputs = document.querySelectorAll('input.valid');

    if (invalidInputs.length) {
      // If we have any invalid input field, set invalidForm to true
      this.setState({
        ...this.state,
        invalidForm: true
      });
    } else if (validInputs.length === Object.keys(this.state).length - 1) {
      // If we have as many valid fields as we have state properties - 1, set invalidForm to false
      this.setState({
        ...this.state,
        invalidForm: false
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="registerForm">
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
        <button
          disabled={this.state.invalidForm}
          className="btn btn-primary"
          type="submit"
        >
          Logga in
        </button>
      </form>
    );
  }
}
