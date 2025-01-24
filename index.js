import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Datas from './Datas';
import States from './States';
import Demo from './Demo';
import Parent from "./Parent"; 
import App_form from "./Form";
import App_nested from './Nested';
import { Provider } from 'react-redux';
import Store from './apps/Store';
import Portfolio from './Portfolio';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Portfolio />
   </React.StrictMode>
);

reportWebVitals();
