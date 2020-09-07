import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import API from '../../utils/API';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = (props) => {
  const history = useHistory();

  const emptyUser = {
    firstNameInput: '',
    lastNameInput: '',
    emailInput: '',
    passwordInput: '',
  };

  const [formData, setFormData] = useState(emptyUser);
  // const [credsAreInvalid, setCredsAreInvalid] = useState('')
  const [firstNameColor, setFirstNameColor] = useState('');
  const [lastNameColor, setLastNameColor] = useState('');
  const [emailColor, setEmailColor] = useState('');
  const [passwordColor, setPasswordColor] = useState('');

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // TODO: investigate handleFormSubmit refactor
    // Is it necessary to set a static object here just to post the user?
    // can the formData state be validated and posted directly?
    let newUser = {
      firstName: formData.firstNameInput,
      lastName: formData.lastNameInput,
      email: formData.emailInput,
      password: formData.passwordInput,
    };
    if (validateUserInput(newUser)) {
      postNewUser(newUser);
      setFormData(emptyUser);
    } else {
      toast.error('Invalid Credentials');
    }
  };

  // validateUserInput checks the formData for any missing values and
  // then highlights the fields that are invalid
  const validateUserInput = ({ firstName, lastName, email, password }) => {
    let isValid = true;

    if (!firstName) {
      setFirstNameColor('text-danger');
      isValid = false;
    } else {
      setFirstNameColor('');
    }

    if (!lastName) {
      setLastNameColor('text-danger');
      isValid = false;
    } else {
      setLastNameColor('');
    }

    if (!email) {
      setEmailColor('text-danger');
      isValid = false;
    } else {
      setEmailColor('');
    }

    if (!password) {
      setPasswordColor('text-danger');
      isValid = false;
    } else {
      setPasswordColor('');
    }

    return isValid;
  };

  const postNewUser = (newUser) => {
    Axios.post('/api/auth/signup', newUser)
      .then((createdUser) => {
        history.push('/', {
          message: 'Account Successfully Created!',
        });
        // when a new user is created, a new blank profile is created for them as well
        API.createProfile(createdUser.data.id).then((res) => {
          console.log(res.data.message);
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <ToastContainer />
      <Form.Group controlId='inputFirstName'>
        <Form.Label className={firstNameColor}>First Name</Form.Label>
        <Form.Control
          name='firstNameInput'
          type='text'
          placeholder=''
          value={formData.firstNameInput}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId='inputLastName'>
        <Form.Label className={lastNameColor}>Last Name</Form.Label>
        <Form.Control
          name='lastNameInput'
          type='text'
          placeholder=''
          value={formData.lastNameInput}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId='emailInput'>
        <Form.Label className={emailColor}>Email Address</Form.Label>
        <Form.Control
          name='emailInput'
          type='email'
          placeholder='Enter email'
          value={formData.emailInput}
          onChange={handleInputChange}
        />
        <Form.Text className='text-muted'>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId='inputPassword'>
        <Form.Label className={passwordColor}>Password</Form.Label>
        <Form.Control
          name='passwordInput'
          type='password'
          placeholder='Password'
          value={formData.passwordInput}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant='primary' type='submit' variant='dark'>
        Submit
      </Button>
      <Button
        className='m-1'
        onClick={(e) => {
          e.preventDefault();
          props.history.push('/');
        }}
        variant='dark'
      >
        Home
      </Button>
    </Form>
  );
};

export default Signup;
