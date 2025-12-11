import React from 'react';
import { Form, Button } from 'react-bootstrap';

const LoginView = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="success" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default LoginView;
