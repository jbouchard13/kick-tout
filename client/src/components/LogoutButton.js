import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { Button } from 'react-bootstrap';
import '../App.css';



function LogoutButton() {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <Button
        onClick={() => {
          logout();
        }}
        variant="dark">
        Logout
      </Button>
    </div>
  );
}

export default LogoutButton;
