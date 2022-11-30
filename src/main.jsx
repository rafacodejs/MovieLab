import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './routes/App';
import './styles/index.css';
import { UserProvider } from './context/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserProvider>
);
