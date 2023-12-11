import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import App from './App';
import { DarkModeProvider } from './Components/DarkModeContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DarkModeProvider>
    <App />
  </DarkModeProvider>
);