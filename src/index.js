import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './i18next';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store/index';

import App from './App';




ReactDOM.render(
  <Suspense fallback={(<div>~~~~~~</div>)}>
    <Provider store={store}>
      <PersistGate persistor={persistor} >
        <App />
      </PersistGate>
    </Provider>
  </Suspense>,
  document.getElementById('root')
);
