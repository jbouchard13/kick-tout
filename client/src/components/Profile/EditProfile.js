import React, { Component } from 'react';
import { Button, Form, Col } from 'react-bootstrap';

export class EditProfile extends Component {
  render() {
    return (
      <div>
        <Form className='form'>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name='firstName'
                value={this.props.firstName}
                type='text'
                onChange={this.props.handleOnChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridPassword'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name='lastName'
                value={this.props.lastName}
                type='text'
                onChange={this.props.handleOnChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId='formGridEmail'>
            <Form.Label>Contact Email</Form.Label>
            <Form.Control
              name='email'
              value={this.props.email}
              type='text'
              onChange={this.props.handleOnChange}
            />
          </Form.Group>

          <Form.Group controlId='formGridAddress1'>
            <Form.Label>Location</Form.Label>
            <Form.Control placeholder='Where ya from?' />
          </Form.Group>

          <Form.Group controlId='exampleForm.ControlTextarea1'>
            <Form.Label>About me</Form.Label>
            <Form.Control
              as='textarea'
              rows='3'
              value={this.props.bio}
              name='bio'
              onChange={this.props.handleOnChange}
            />
          </Form.Group>

          <Button
            type='submit'
            variant='dark'
            onClick={this.props.handleSubmit}
          >
            Update Profile
          </Button>
        </Form>
      </div>
    );
  }
}

export default EditProfile;
