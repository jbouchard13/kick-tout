import React, { Component } from 'react';
import '../../App.css';
import API from "../../utils/API";
import FavCard from './FavCard';
import API from "../../utils/API";
const userId = 6
export class FavoritesBar extends Component {
  constructor(props) {
    super(props)
    this.state = { favorites: [] }
  }
  componentDidMount() {
    API.getFavorites(userId).then((favorites) => {
      this.setState({ favorites: favorites.data })
    })
  }

  render() {
    const style = {
      // border: "black solid 2px",
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