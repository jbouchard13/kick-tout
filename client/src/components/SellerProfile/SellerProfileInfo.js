import React, { Component } from 'react';
import { Form, Col } from 'react-bootstrap';

export class SellerProfileInfo extends Component {
  render() {
    return (
      <div>
        <Form className='form'>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>First Name: {this.props.firstName}</Form.Label>
            </Form.Group>

            <Form.Group as={Col} controlId='formGridPassword'>
              <Form.Label>Last Name: {this.props.lastName}</Form.Label>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridEmailAddress'>
              <Form.Label>Email: {this.props.email}</Form.Label>
            </Form.Group>

            <Form.Group as={Col} controlId='formGridAddress1'>
              <Form.Label>Location: {this.props.location}</Form.Label>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId='exampleForm.ControlTextarea1'>
            <Form.Label>About Me: {this.props.bio}</Form.Label>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default SellerProfileInfo;
