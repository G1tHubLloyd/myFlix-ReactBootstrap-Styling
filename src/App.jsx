import React from 'react';
import { Container } from 'react-bootstrap';
import LoginView from './components/LoginView';
import MainView from './components/MainView';

const App = () => {
    console.log('App component is rendering');
    return (
        <Container className="mt-4">
            <h1 style={{ color: 'red', backgroundColor: 'yellow', padding: '20px' }}>myFlix App - TEST</h1>
            <p style={{ fontSize: '24px', color: 'blue' }}>If you can see this, React is working!</p>
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
