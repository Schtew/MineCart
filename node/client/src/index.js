import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {render} from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import QuestsScreen from './screens/QuestsScreen';
import ShoppingScreen from './screens/ShoppingScreen';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const rootElement = document.getElementById("root");
// render(
//   <BrowserRouter>
//     <Switch>
//        <Route path='/' component={QuestsScreen}/>
//        <Route path='/shopping' component={ShoppingScreen}/>
//     </Switch>
//    </BrowserRouter>,
//    rootElement
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
