import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './i18next';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import allReducers from './reducers';

import App from './App';

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())




ReactDOM.render(
  <Suspense fallback={(<div>~~~~~~</div>)}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById('root')
);
