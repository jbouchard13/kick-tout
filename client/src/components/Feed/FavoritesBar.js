import React, { Component } from 'react';
import '../../App.css';
import API from '../../utils/API';
import FavCard from './FavCard';
import axios from 'axios';
import CardDeck from 'react-bootstrap/CardDeck';
import SellerProfile from '../../pages/SellerProfile';

export class FavoritesBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      viewProfile: false,
      sellerId: '',
    };
  }

  componentDidMount() {
    axios.get('/api/auth/user_data').then((response) => {
      API.getFavorites(response.data.id).then((favorites) => {
        this.setState({ favorites: favorites.data });
      });
    });
  }

  handleViewProfile = (e) => {
    let id = e.target.dataset.userid;
    console.log(id);
    this.setState({ sellerId: id, viewProfile: true });
  };

  handleBackToFavs = () => {
    this.setState({ viewProfile: false });
  };

  render() {
    return (
      <div>
<<<<<<< HEAD
        <CardDeck className="justify-content-center">
          {this.state.favorites.map((favorite) => {
            console.log(favorite)
            return (
              <FavCard className="favCard" id={favorite.id} userId={favorite.userId} photoSrc={favorite.photoSrc} />
            )
          })}
        </CardDeck>

=======
        {!this.state.viewProfile && (
          <CardDeck>
            {this.state.favorites.map((favorite) => {
              return (
                <FavCard
                  key={favorite.id}
                  className='favCard'
                  name={favorite.name}
                  id={favorite.id}
                  userId={favorite.UserId}
                  photoSrc={favorite.photoSrc}
                  handleViewProfile={this.handleViewProfile}
                />
              );
            })}
          </CardDeck>
        )}
        {this.state.viewProfile && (
          <SellerProfile
            sellerId={this.state.sellerId}
            handleBackToFeed={this.handleBackToFavs}
          />
        )}
>>>>>>> 9479c43941c567a7571c344749f111f09a75553d
      </div>
    );
  }
}

export default FavoritesBar;
