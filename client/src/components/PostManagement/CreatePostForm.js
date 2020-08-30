import React, { useState } from 'react';
import axios from 'axios';

export default function CreatePostForm() {
  const [state, setState] = useState({
    image: null,
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('postImage', state.image);
    // formData.append('api_key', '389643679416671');

    axios.post('/api/upload', formData).then((response) => {
      console.log(response);
    });
    // axios
    //   .post('https://api.cloudinary.com/v1_1/kicktout/image/upload', formData)
    //   .then((response) => {
    //     console.log(response.data);
    //     alert('file uploaded');
    //   })
    //   .catch((err) => {
    //     console.log('error:', err);
    //   });
  };

  const onChange = (e) => {
    console.log(e.target.files[0]);
    setState({
      image: e.target.files[0],
    });
  };

  return (
    <form>
      <h1>File Upload</h1>
      <input type='file' name='myImage' onChange={onChange} />
      <button type='submit' onClick={onFormSubmit}>
        Upload
      </button>
    </form>
  );
}
