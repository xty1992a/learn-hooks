import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import {routes} from './router';
import App from './App';

ReactDOM.render(<App routes={routes}/>, document.getElementById('root'));
