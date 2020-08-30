import React from "react";
import Dropdown from 'react-bootstrap/Dropdown'

export default function Filter() {
  return <>
    <Dropdown className="filter">
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        Filter by
  </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Buy</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Sell</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Trade</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

  </>;
};