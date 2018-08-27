import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark navbar-trans">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/register" exact>
                Hem
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            {this.props.user === null ? (
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Logga in
                </NavLink>
              </li>
            ) : (
              ''
            )}
            {this.props.user === null ? (
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Registrera
                </NavLink>
              </li>
            ) : (
              ''
            )}
            {this.props.user ? (
              <li className="nav-item">
                <NavLink className="nav-link" to="/profil">
                  {this.props.user.firstName}
                </NavLink>
              </li>
            ) : (
              ''
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

/**
 * @param withRouter
 * @description To make nav links work properly, e.g the active class.
 * @description This occurs only with Redux connected!
 */
export default withRouter(connect(mapStateToProps)(Navigation));
