import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './components/app-router/App-router';
import reportWebVitals from './reportWebVitals';

import {internalIpV6, internalIpV4} from 'internal-ip';


setTimeout(() => {
 console.log(internalIpV6());
//=> 'fe80::1'
  console.log(internalIpV4());
//=> '10.0.0.79'
}, 3000);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App2 /> */}
    <AppRouter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();