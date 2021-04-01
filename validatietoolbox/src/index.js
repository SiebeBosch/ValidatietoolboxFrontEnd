import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import rootReducer from './reducers'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {objectStore} from './redux/store';

ReactDOM.render(
  <Provider store={objectStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
