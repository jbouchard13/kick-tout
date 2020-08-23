import React, { useContext } from 'react'
import { AuthContext } from "../AuthContext";
import { Button } from "react-bootstrap";
import "../App.css";

function Feed(props) {
    
    const { logout } = useContext(AuthContext);

    return (
        <div>
            <h1>Feed Page</h1>
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
            props.history.push("/profile");
            }}
            >
            Profile
            </Button>
        </div>
    )
}

export default Feed
