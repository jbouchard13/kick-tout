import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import '../../App.css'

import pinPic from '../../images/pinTack.png';

export default function PostCard(props) {
  return (

    <Col className="mb-5" sm={12} md={6} lg={3}>
      <Card className="postCard">
      <Card.Text className="mx-auto"><img src={pinPic} style={{backgroundColor: "#fcfba7", height: "50px", width: "75px", padding: '0'}}></img></Card.Text>
        <Card.Img variant='top' src={props.photoSrc} />
        <Card.Body>
          <Card.Text className="font-weight-bolder">{props.name}</Card.Text>
        </Card.Body>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item p-0'>
            <Button className='btn btn-dark btn-block' data-postid={props.postId} onClick={props.handleEdit}>
              Edit
          </Button>
          </li>
          <li className='list-group-item p-0'>
            <Button className='btn btn-danger btn-block' data-postid={props.postId} onClick={props.handleDelete}>
              Delete
          </Button>
          </li>
        </ul>
      </Card>
    </Col>
  );
}


