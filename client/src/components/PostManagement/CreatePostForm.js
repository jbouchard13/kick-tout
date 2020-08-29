import React, { useState } from 'react';
import axios from 'axios';

export default function CreatePostForm() {
  const [state, setState] = useState({
    image: null,
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    console.log(e.target.files[0]);
    const formData = new FormData();

    formData.append('test', e.target.files[0]);
    formData.forEach((value, key) => {
      console.log(value, key);
    });
    axios
      .post('/api/upload', formData)
      .then((response) => {
        console.log(response);
        alert('file uploaded');
        setState({
          image: response,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h1>File Upload</h1>
      <input type='file' name='myImage' onChange={onChange} />
      <button type='submit'>Upload</button>
    </form>
  );
}
