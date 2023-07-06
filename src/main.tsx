import React from 'react';
import ReactDOM  from 'react-dom/client';
import GifApp from './GifApp';
import "./styles.css";

const element = document.getElementById('root');

if (element) {
    ReactDOM.createRoot(element).render(
        <React.StrictMode>
            <GifApp />
        </React.StrictMode>
    )
}
