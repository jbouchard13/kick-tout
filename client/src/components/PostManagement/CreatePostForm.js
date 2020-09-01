import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import API from '../../utils/API';

export default function CreatePostForm() {
  //   const [state, setState] = useState({
  //     type: 'Buy',
  //     image: null,
  //     name: '',
  //     size: '4',
  //     brand: '',
  //     shoeCondition: 'Very Poor',
  //     value: '',
  //     UserId: '',
  //   });
  //   const [form, setForm] = useState({
  //     name: '',
  //     size: '4',
  //     brand: '',
  //     shoeCondition: 'Very Poor',
  //     value: '',
  //   });
  const [type, setType] = useState('Buy');
  const [name, setName] = useState('');
  const [size, setSize] = useState('4');
  const [brand, setBrand] = useState('');
  const [shoeCondition, setShoeCondition] = useState('Very poor');
  const [value, setValue] = useState('');
  const [image, setImage] = useState(null);
  const [UserId, setUserId] = useState('');

  useEffect(() => {
    axios.get('/api/auth/user_data').then((response) => {
      console.log(response.data);
      setUserId(response.data.id);
      console.log(UserId);
    });
  }, []);

  const onFormSubmit = async (e) => {
    e.preventDefault();
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
        console.log(response);
        formData.forEach((key, value) => {
          console.log(key, value);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const typeOnChange = (e) => {
    let value = e.target.value;

    setType(value);
    console.log(type);
  };

  const nameOnChange = (e) => {
    let value = e.target.value;

    setName(value);
    console.log(name);
  };

  const sizeOnChange = (e) => {
    let value = e.target.value;

    setSize(value);
    console.log(size);
  };

  const brandOnChange = (e) => {
    let value = e.target.value;

    setBrand(value);
    console.log(brand);
  };

  const conditionOnChange = (e) => {
    let value = e.target.value;

    setShoeCondition(value);
    console.log(shoeCondition);
  };

  const valueOnChange = (e) => {
    let inputValue = e.target.value;

    setValue(inputValue);
    console.log(value);
  };

  const imageOnChange = (e) => {
    setImage(e.target.files[0]);
    console.log(image);
  };

  return (
    <div>
      <Form className='form'>
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
            <option>Buy</option>
            <option>Sell</option>
            <option>Trade</option>
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
            type='text'
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
            <option>Very Poor</option>
            <option>Poor</option>
            <option>Fair</option>
            <option>Good</option>
            <option>Very Good</option>
            <option>Excellent</option>
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
          type='submit'
          variant='dark'
          onClick={(e) => {
            onFormSubmit(e);
          }}
        >
          Create new post
        </Button>
      </Form>
    </div>
  );
}
