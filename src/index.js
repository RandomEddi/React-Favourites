import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AddFavouriteProvider } from './store/context/add-favourite-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AddFavouriteProvider>
        <App />
    </AddFavouriteProvider>
);