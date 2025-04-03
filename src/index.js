import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional, if you have CSS to include
import App from './App'; // Ensure this is pointing to your main App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This matches the <div id="root"></div> in index.html
);
