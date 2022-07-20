import React from 'react';
import ReactDOM from 'react-dom';
import { UserProvider } from './UserContext';
import App from './App';
import "./index.css"

ReactDOM.render(
    <UserProvider>
      <App />
    </UserProvider>,
  document.getElementById('root')
);