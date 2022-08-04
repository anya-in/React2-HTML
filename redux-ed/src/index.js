import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import thunk from "redux-thunk"
import { createStore, applyMiddleware } from 'redux';
import allReducer from './reducer'
import { Provider } from 'react-redux';

const store = createStore(allReducer);

//Subscribe
store.subscribe(() => console.log(store.getState()));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

