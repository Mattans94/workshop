import React, { Component } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => {
      isOpen: !prevState.isOpen;
    });
    console.log(this.state.isOpen);
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/" exact activeClassName="active" tag={RRNavLink}>
                  Hem
                </NavLink>
              </NavItem>
              {true ? ( // Change this later to hide when logged in
                <NavItem>
                  <NavLink
                    to="/login"
                    exact
                    activeClassName="active"
                    tag={RRNavLink}
                  >
                    Login
                  </NavLink>
                </NavItem>
              ) : (
                ''
              )}
              <NavItem>
                <NavLink
                  to="/profile"
                  exact
                  activeClassName="active"
                  tag={RRNavLink}
                >
                  Profile
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
