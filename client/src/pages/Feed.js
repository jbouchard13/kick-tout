import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { AuthContext } from "../AuthContext";
import { Button } from "react-bootstrap";
import "../App.css";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Feed(props) {
  const history = useHistory();
  const displayHistoryMessage = () => {
    if (history.location.state &&
      history.location.state.hasOwnProperty('message')
    ) {
      console.log("saved")
       toast.success(history.location.state.message);
    }
  }

  useEffect(() => {
    displayHistoryMessage();
  }, []);
    
    const { logout } = useContext(AuthContext);

    return (
        <div>
          <ToastContainer />
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
