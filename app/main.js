import './src/main.scss';

import 'babel-polyfill';
import 'gsap';
import React from 'react';
import ReactDOM from 'react-dom';

window.React = React;

import App from './src/app/app';

const reactRoot = window.document.getElementById('react-root');

ReactDOM.render(
 <App/>,
  reactRoot
);
