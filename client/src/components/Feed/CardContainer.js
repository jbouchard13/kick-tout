import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import ShoeCard from "../ShoeCard/ShoeCard"

export default function CardContainer() {
  const style = {
    border: "black solid 2px",
  };
  return (
    <div style={style}>
      <CardDeck>
        <ShoeCard />
        <ShoeCard />
        <ShoeCard />
      </CardDeck>
    </div>
  );
}
