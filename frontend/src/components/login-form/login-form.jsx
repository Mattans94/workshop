import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'hello world'
    };
  }
  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Din email"
            />
          </FormGroup>
        </Form>
      </div>
    );
  }
}
