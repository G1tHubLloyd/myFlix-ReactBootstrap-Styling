import React from 'react';
import { createRoot } from 'react-dom/client';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <Container className="mt-4">
            <App />
        </Container>
    </React.StrictMode>
);
