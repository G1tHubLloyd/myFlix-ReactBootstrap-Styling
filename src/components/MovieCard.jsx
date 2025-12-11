import React from 'react';
import { Card, Button } from 'react-bootstrap';

const MovieCard = ({ movie }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
