import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';
import { BrowserRouter } from 'react-router-dom';
import { createStore, compose, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store} >
      <App />
    </Provider>
  </BrowserRouter>
);