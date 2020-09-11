import React, { useState, useEffect } from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import API from '../../utils/API';

import './postMgmt.css';

export default function CreatePostForm() {
  // had to separate out all of the state items for some reason
  // not sure why but it works now, code isn't very dry because of it though
  const [type, setType] = useState('Sell');
  const [name, setName] = useState('');
  const [size, setSize] = useState('4');
  const [brand, setBrand] = useState('');
  const [shoeCondition, setShoeCondition] = useState('Very poor');
  const [value, setValue] = useState('');
  const [image, setImage] = useState(null);
  const [UserId, setUserId] = useState('');

  // when component mounts it calls for the user data to get the user id
  useEffect(() => {
    axios.get('/api/auth/user_data').then((response) => {
      setUserId(response.data.id);
    });
  }, []);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const parsedValue = parseInt(value);
    console.log(parsedValue);
    // check if name and brand are filled out
    if (name === '' || brand === '') {
      toast.error('Please fill out all of the fields and try again', {
        autoClose: 5000,
      });
      return;
    }
    // check if value is a number
    if (isNaN(parsedValue) === true) {
      toast.error('Please enter a number for the value', {
        autoClose: 5000,
      });
      return;
    }
    // creates a form object to contain the image when sent to the back end
    const formData = new FormData();
    await formData.append('image', image);
    await formData.append('type', type);
    await formData.append('name', name);
    await formData.append('size', size);
    await formData.append('brand', brand);
    await formData.append('shoeCondition', shoeCondition);
    await formData.append('value', value);

    API.createPost(UserId, formData)
      .then((response) => {
        toast.success('Post created', {
          autoClose: 2000,
        });
        setTimeout(() => {
          window.location.replace('/feed');
        }, 2000);
      })
      .catch((err) => {
        // if error is because of file not being an image
        if (err.response.data.message === 'Invalid image file') {
          toast.error(err.response.data.message);
        } else toast.error('An error occurred');
      });
  };

  // ---------- all of the input changing functions ----------
  const typeOnChange = (e) => {
    let value = e.target.value;

    setType(value);
  };

  const nameOnChange = (e) => {
    let value = e.target.value;

    setName(value);
  };

  const sizeOnChange = (e) => {
    let value = e.target.value;

    setSize(value);
  };

  const brandOnChange = (e) => {
    let value = e.target.value;

    setBrand(value);
  };

  const conditionOnChange = (e) => {
    let value = e.target.value;

    setShoeCondition(value);
  };

  const valueOnChange = (e) => {
    let inputValue = e.target.value;

    setValue(inputValue);
  };

  const imageOnChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <Col sm={10}>
        <Form className='form'>
          <ToastContainer position='top-right' />
          <Form.Group controlId='formGridPostType'>
            <Form.Label>Post Type</Form.Label>
            <Form.Control
              name='type'
              value={type}
              as='select'
              onChange={(e) => {
                typeOnChange(e);
              }}
            >
              <option>Sell</option>
              <option>Trade</option>
              <option>Trade or Sell</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='formGridImage'>
            <Form.File
              id='postImageUpload'
              label='Add Image'
              onChange={(e) => {
                imageOnChange(e);
              }}
            ></Form.File>
          </Form.Group>

          <Form.Group controlId='formGridName'>
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              as='textarea'
              name='name'
              value={name}
              placeholder='Enter Item Name'
              onChange={(e) => {
                nameOnChange(e);
              }}
            />
          </Form.Group>

          <Form.Group controlId='formGridSize'>
            <Form.Label>Size</Form.Label>
            <Form.Control
              name='size'
              value={size}
              onChange={(e) => {
                sizeOnChange(e);
              }}
              as='select'
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

          <Form.Group controlId='formGridBrand'>
            <Form.Label>Brand</Form.Label>
            <Form.Control
              name='brand'
              value={brand}
              placeholder='Enter Item Brand'
              onChange={(e) => {
                brandOnChange(e);
              }}
            />
          </Form.Group>

          <Form.Group controlId='formGridShoeCondition'>
            <Form.Label>Item Condition</Form.Label>
            <Form.Control
              name='shoeCondition'
              value={shoeCondition}
              as='select'
              onChange={(e) => {
                conditionOnChange(e);
              }}
            >
              <option>Excellent</option>
              <option>Very Good</option>
              <option>Good</option>
              <option>Fair</option>
              <option>Poor</option>
              <option>Very Poor</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Value $</Form.Label>
            <Form.Control
              name='value'
              value={value}
              placeholder='Enter Item Value'
              onChange={(e) => {
                valueOnChange(e);
              }}
            />
            <Form.Text>Please enter numbers only</Form.Text>
          </Form.Group>

          <Button
            as='submit'
            variant='dark'
            onClick={(e) => {
              onFormSubmit(e);
            }}
          >
            Create new post
          </Button>
        </Form>
      </Col>
    </div>
  );
}
