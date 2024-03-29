import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createContext } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let context=createContext()
 let student={name:"Mounika",add:"AP",gender:"female",qualification:"Btech"}
 
root.render(
  <>
  <context.Provider value={student}>
    <App />
  </context.Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
