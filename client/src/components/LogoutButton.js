import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { Button } from 'react-bootstrap';
import '../App.css';



function LogoutButton() {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <Button
        className="m-1 bg-white text-dark"
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
