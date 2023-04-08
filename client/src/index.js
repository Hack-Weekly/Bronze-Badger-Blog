import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import LandingPage from './components/LandingPage/landingPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
     <App />
     <LandingPage/>
   </BrowserRouter>
  </React.StrictMode>
);
