import React from 'react';
import { Container } from 'react-bootstrap';
import LoginView from './components/LoginView';
import MainView from './components/MainView';

const App = () => {
    return (
        <Container className="mt-4">
            <h1>myFlix</h1>
            <hr />
            <h2>Login</h2>
            <LoginView />
            <hr />
            <h2>Movies</h2>
            <MainView />
        </Container>
    );
};

export default App;
