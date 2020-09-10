import React from 'react';
import Axios from 'axios';
import '../../App.css';

export default class UserGreeting extends React.Component {
  state = {
    userName: '',
  };

  componentDidMount() {
    Axios.get('/api/auth/user_data').then((res) => {
      const userName = res.data.firstName;
      this.setState({ userName });
    });
  }

  render() {
    return (
      <>
        <h2 className='page-header'>
          Welcome to your Feed Page {this.state.userName}!{' '}
        </h2>
      </>
    );
  }
}
