import React, { Component } from 'react';
import '../../App.css';

import FavCard from './FavCard';

export class FavoritesBar extends Component {
  render() {
    const style = {
        border: "black solid 2px",
      };
    return (
      <div style={style}>
        <h1>Favorites</h1>
        <FavCard />
      </div>
    );
  }
}



export default FavoritesBar