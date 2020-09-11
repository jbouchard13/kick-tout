import React, { Component } from 'react';
import { Form, Col } from 'react-bootstrap';
import "../../App.css";

export class SellerProfileInfo extends Component {
  render() {
    return (
      <div>
        <Form className='form'>
        <div style={{borderBottom: '1px solid #6fa8f2'}}>
          <Form.Row>
            <Form.Group className="mb-0" as={Col} controlId='formGridEmail'>
              <Form.Label>First Name: {this.props.firstName}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-0" as={Col} controlId='formGridPassword'>
              <Form.Label>Last Name: {this.props.lastName}</Form.Label>
            </Form.Group>
          </Form.Row>
          </div>
          <div style={{borderBottom: '1px solid #6fa8f2'}}>
          <Form.Row>
            <Form.Group className="mb-0 mt-2" as={Col} controlId='formGridEmailAddress'>
              <Form.Label>Email: {this.props.email}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-0 mt-2" as={Col} controlId='formGridAddress1'>
              <Form.Label>Location: {this.props.location}</Form.Label>
            </Form.Group>
          </Form.Row>
          </div>
          <div style={{borderBottom: '1px solid #6fa8f2'}}>
          <Form.Group className="mb-0 mt-2" controlId='exampleForm.ControlTextarea1'>
            <Form.Label>About Me: {this.props.bio}</Form.Label>
          </Form.Group>
          </div>
        </Form>
      </div>
    );
  }
}

export default SellerProfileInfo;
