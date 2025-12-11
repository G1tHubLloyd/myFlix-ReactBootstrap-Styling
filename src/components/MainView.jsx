import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';

const movies = [
  { id: 1, title: 'Inception', description: 'A mind-bending thriller' },
  { id: 2, title: 'Interstellar', description: 'Journey through space and time' },
];

const MainView = () => {
  return (
    <Row>
      {movies.map(movie => (
        <Col key={movie.id} md={4} className="mb-4">
          <MovieCard movie={movie} />
        </Col>
      ))}
    </Row>
  );
};

export default MainView;
