/**
 * Created by Joy on 2017. 4. 11..
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './components/app';
import App2 from './components/App2';
import reducers from './reducers';

let store = createStore(reducers);

//if you want to render component with redux , change to App2.js
ReactDOM.render(
  <Provider store={store}>
    <App2 />
  </Provider>,
  document.querySelector('.container')
);

