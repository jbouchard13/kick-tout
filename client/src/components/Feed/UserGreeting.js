import React from 'react';
import Axios from 'axios';
import '../../App.css';

export default class UserGreeting extends React.Component {

  state = {
    userName: "",
  }

  componentDidMount() {
    Axios.get('/api/auth/user_data')
      .then(res => {
        const userName = res.data.firstName;
        this.setState({ userName })
        console.log(res.data.firstName);
      })
  }

  render() {
    return (
      <>
        <h2 className="page-header">Welcome to {this.state.userName}'s Feed Page! </h2>
      </>
    );
  }


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
