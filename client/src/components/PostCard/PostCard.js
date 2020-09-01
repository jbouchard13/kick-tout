import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function PostCard(props) {
  return (
    <Card>
      <Card.Img variant='top' src={props.photoSrc} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
      </Card.Body>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>
          <Button data-postid={props.postId} onClick={props.handleEdit}>
            Edit
          </Button>
        </li>
        <li className='list-group-item'>
          <Button data-postid={props.postId} onClick={props.handleDelete}>
            Delete
          </Button>
        </li>
      </ul>
    </Card>
  );
}
