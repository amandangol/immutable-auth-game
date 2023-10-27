// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // Import the App component

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Render the App component as the root component */}
  </React.StrictMode>,
  document.getElementById('root')
);
