import React, { useState, useEffect } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import API from '../../utils/API';

import './postMgmt.css';
import pinPic from '../../images/greenPin.png';

export default function EditPostForm(props) {
  return (
    <Form className="editPostForm my-5 px-3 pb-3">
      <img className="mx-auto d-block" src={pinPic} style={{backgroundColor: "transparent", height: "auto", width: "75px", padding: '0'}}></img>
      <ToastContainer position='top-right' />
      <div className="formRow1">
      <Form.Group controlId='formGridPostType'>
        <Form.Label style={{fontWeight: "600"}}>Post Type</Form.Label>
        <Form.Control
          name='type'
          value={props.type}
          as='select'
          onChange={props.handleEditOnChange}
        >
          <option>Sell</option>
          <option>Trade</option>
          <option>Trade or Sell</option>

        </Form.Control>
      </Form.Group>
      </div>
      <div className="formRow2">
      <Form.Group controlId='formGridImage'>
        <Form.File
          style={{fontWeight: "600"}}
          id='postImageUpload'
          label='Add Image'
          onChange={props.handleImageOnChange}
        ></Form.File>
      </Form.Group>
      </div>
      <div className="formRow2">
      <Form.Group controlId='formGridName'>
        <Form.Label style={{fontWeight: "600"}}>Item Name</Form.Label>
        <Form.Control
          as='textarea'
          name='name'
          value={props.name}
          placeholder='Enter Item Name'
          onChange={props.handleEditOnChange}
        />
      </Form.Group>
      </div>
      <div className="formRow2">
      <Form.Group controlId='formGridSize'>
        <Form.Label style={{fontWeight: "600"}}>Size</Form.Label>
        <Form.Control
          name='size'
          value={props.size}
          as='select'
          onChange={props.handleEditOnChange}
        >
          <option>4</option>
          <option>4 1/2</option>
          <option>5</option>
          <option>5 1/2</option>
          <option>6</option>
          <option>6 1/2</option>
          <option>7</option>
          <option>7 1/2</option>
          <option>8</option>
          <option>8 1/2</option>
          <option>9</option>
          <option>9 1/2</option>
          <option>10</option>
          <option>10 1/2</option>
          <option>11</option>
          <option>11 1/2</option>
          <option>12</option>
          <option>12 1/2</option>
          <option>13</option>
          <option>13 1/2</option>
          <option>14</option>
          <option>14 1/2</option>
          <option>15</option>
          <option>15 1/2</option>
          <option>16</option>
        </Form.Control>
      </Form.Group>
      </div>
      <div className="formRow2">
      <Form.Group controlId='formGridBrand'>
        <Form.Label style={{fontWeight: "600"}}>Brand</Form.Label>
        <Form.Control
          name='brand'
          value={props.brand}
          placeholder='Enter Item Brand'
          onChange={props.handleEditOnChange}
        />
      </Form.Group>
      </div>
      <div className="formRow2">
      <Form.Group controlId='formGridShoeCondition'>
        <Form.Label style={{fontWeight: "600"}}>Item Condition</Form.Label>
        <Form.Control
          name='shoeCondition'
          value={props.shoeCondition}
          as='select'
          onChange={props.handleEditOnChange}
        >
          <option>Very Poor</option>
          <option>Poor</option>
          <option>Fair</option>
          <option>Good</option>
          <option>Very Good</option>
          <option>Excellent</option>
        </Form.Control>
      </Form.Group>
      </div>
      <div className="formRow2">
      <Form.Group>
        <Form.Label style={{fontWeight: "600"}}>Value $</Form.Label>
        <Form.Control
          name='value'
          value={props.value}
          placeholder='Enter Item Value'
          onChange={props.handleEditOnChange}
        />
        <Form.Text>Please enter numbers only</Form.Text>
      </Form.Group>
      </div>
      <div className="buttonSpacing">
      <Button className="button" type='submit' variant='dark' onClick={props.handleEditSubmit}>
        Submit edits
      </Button>
      <Button type='submit' variant='dark' onClick={props.handleCancel}>
        Cancel changes
      </Button>
      </div>
    </Form>
  );
}
