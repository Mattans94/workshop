import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
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
    this.props.setLoading(true);
    fetch('http://localhost:4000/api/login')
      .then(res => res.json())
      .then(res => {
        setTimeout(() => {
          this.props.setLoading(false);
          this.props.login(res);
        }, 1000);
      });
  };

  render() {
    return (
      <div className="container login-container">
        <form onSubmit={this.handleSumbit} className="loginForm">
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
          <button className="btn btn-block" type="submit">
            Logga in
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch({ type: 'LOGIN', payload: user }), //Send form data later on
    setLoading: value => dispatch({ type: 'SET_LOADING', payload: value })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
