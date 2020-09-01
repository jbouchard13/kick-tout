import axios from 'axios';

export default {
  // path to get user
  getUser: (id) => {
    return axios.get(`/api/users/${id}`);
  },

  // path to get posts
  getAllPosts: () => {
    return axios.get('/api/posts');
  },

  // path to get all posts made by the user
  getPostsByUser: (userId) => {
    return axios.get(`/api/posts/${userId}`);
  },

  // path to get posts by search
  getPostsByQuery: (query) => {
    return axios.get(`/api/posts/search/${query}`);
  },

  // path for posting posts
  createPost: (userId, newPost) => {
    return axios.post(`/api/posts/${userId}`, newPost);
  },

  // path for updating existing posts
  updatePost: (postId, userId, updatedInfo) => {
    return axios.put(`/api/posts/${postId}/${userId}`, updatedInfo);
  },

  // path for deleting posts
  deletePost: (postId, userId) => {
    return axios.delete(`/api/posts/${postId}/${userId}`);
  },

  // path for getting all of user's favorite posts
  getFavorites: (userId) => {
    return axios.get(`/api/favorites/${userId}`);
  },

  // path for adding to user's favorite posts
  addFavorite: (postId, userId) => {
    return axios.post(`/api/favorites/${postId}/${userId}`);
  },

  // path for deleting posts from user's favorites
  deleteFavorite: (postId, userId) => {
    return axios.delete(`/api/favorites/${postId}/${userId}`);
  },

  // path for getting user's collection data
  getCollection: (userId) => {
    return axios.get(`/api/collections/${userId}`);
  },

  // path for adding new collection data
  addToCollection: (userId, collectionData) => {
    return axios.post(`/api/collections/${userId}`, collectionData);
  },

  // path for updating a collection entry
  updateCollectionItem: (collectionId, userId, updatedData) => {
    return axios.put(`/api/collections/${collectionId}/${userId}`, updatedData);
  },

  // path for deleting collection entry
  deleteCollectionItem: (collectionId, userId) => {
    return axios.delete(`/api/collections/${collectionId}/${userId}`);
  },

  // path for getting user profile info
  getProfile: (userId) => {
    return axios.get(`/api/profiles/${userId}`);
  },

  // path for creating new user profile (should be done when a new user is created)
  createProfile: (userId) => {
    return axios.post(`/api/profiles/${userId}`);
  },

  // path for updating user profile
  updateProfile: (userId, profileData) => {
    return axios.put(`/api/profiles/${userId}`, profileData);
  },
};
