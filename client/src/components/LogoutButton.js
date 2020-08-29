import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { Button } from 'react-bootstrap';
import '../App.css';

function LogoutButton(props) {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <Button
        className="m-1"
        onClick={() => {
          logout();
        }}
      >
        Logout
      </Button>
    </div>
  );
}

export default LogoutButton;
