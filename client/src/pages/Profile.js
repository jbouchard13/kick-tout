import React, { useContext } from 'react'
import { AuthContext } from "../AuthContext";
import { Button } from "react-bootstrap";
import "../App.css";

function Profile(props) {

  const { logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Profile Page</h1>
      <Button
        className="m-1"
        onClick={() => {
          logout();
        }}
      >
        Logout
          </Button>
      <Button
        className="m-1"
        onClick={e => {
          e.preventDefault();
          props.history.push("/feed");
        }}
      >
        Feed
            </Button>
      <Button
        className="m-1"
        onClick={e => {
          e.preventDefault();
          props.history.push("/editprofile");
        }}
      >
        Edit Profile
            </Button>
    </div>
  )
}

export default Profile
