import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Auth, API } from 'aws-amplify';
import 'babel-polyfill';
import './assets/css/style.css';
import configureStore from './store';
import config from './utils/config';
import apiConfig from './utils/apiConfig';
import App from './App';

Auth.configure(config);
API.configure(apiConfig);

ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>,
    document.getElementById('root')
);
