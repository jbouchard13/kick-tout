import React, { Component } from 'react';
import '../../App.css';
import API from "../../utils/API";
import FavCard from './FavCard';
import axios from 'axios';
import CardDeck from 'react-bootstrap/CardDeck';


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
    return (
      <div>
        <CardDeck>
          {this.state.favorites.map((favorite) => {
            console.log(favorite)
            return (
              <FavCard className="favCard" id={favorite.id} userId={favorite.userId} photoSrc={favorite.photoSrc} />
            )
          })}
        </CardDeck>

      </div>
    );
  }
}


export default FavoritesBar