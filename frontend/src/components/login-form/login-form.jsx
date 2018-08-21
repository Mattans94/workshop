import React, { Component } from 'react';
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';
import { Redirect } from 'react-router-dom';
Redirect;

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'hello world'
    };
  }

  render = () => {
    // Protect routes from people already logged in
    if (this.props.isLoggedIn) return <Redirect to="/profile" />;

    return (
      <div>
        <Form>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="examplePassword" sm={2}>
              Password
            </Label>
            <Col sm={10}>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </Col>
          </FormGroup>
          <Button color="primary" onClick={this.props.loginLogic}>
            Logga in
          </Button>
        </Form>
      </div>
    );
  };
}
