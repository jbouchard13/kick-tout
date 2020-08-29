import React from 'react';
import Axios from 'axios';

export default class UserGreeting extends React.Component {
    state = {
        userName: "",
    }

    componentDidMount() {
        Axios.get('/api/auth/user_data')
            .then(res => {
                const userName = res.data.firstName;
                this.setState({userName})
                console.log(res.data.firstName);
            })
    }

    render() {
        return(
            <>
            <p>{this.state.userName}'s Feed</p>
            </>
        );
    }
  
};

