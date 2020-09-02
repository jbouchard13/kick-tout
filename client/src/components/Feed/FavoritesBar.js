import React, { Component } from 'react';
import '../../App.css';
import API from "../../utils/API";
import FavCard from './FavCard';
import axios from 'axios';

// const userId = 6
export class FavoritesBar extends Component {
  constructor(props) {
    super(props)
    this.state = { favorites: [] }
  }
  componentDidMount() {
    axios.get('/api/auth/user_data').then((response) => {
      console.log(response.data.id);
      API.getFavorites(response.data.id).then((favorites) => {
        this.setState({ favorites: favorites.data })
      })
    });
  }

    
   

  render() {
    const style = {
    };
    return (
      <div style={style}>
        <h1>Favorites</h1>
        {this.state.favorites.map((favorite) => {
          console.log(favorite)
          return (
            <FavCard id={favorite.id} userId={favorite.userId} photoSrc={favorite.photoSrc} />
          )
        })}
      </div>
    );
  }
}


export default FavoritesBar