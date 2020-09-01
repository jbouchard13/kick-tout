import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import CreatePostForm from '../components/PostManagement/CreatePostForm';
import Navigation from '../components/Navigation/Navigation';

export default function CreatePost() {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <Navigation />
      <h1>Create a new post</h1>
      <CreatePostForm />
    </div>
  );
}
