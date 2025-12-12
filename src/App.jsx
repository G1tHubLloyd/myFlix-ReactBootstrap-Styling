import React from 'react';
import LoginView from './components/LoginView';
import MainView from './components/MainView';

const App = () => {
    return (
        <>
            <h1>myFlix</h1>
            <hr />
            <h2>Login</h2>
            <LoginView />
            <hr />
            <h2>Movies</h2>
            <MainView />
        </>
    );
};

export default App;
