import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './redux-toolkit/store';
import {Provider} from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App name="Anil Yadav"/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
