import './src/main.scss';

import 'babel-polyfill';
import 'gsap';
import React from 'react';
import ReactDOM from 'react-dom';
import 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js';
import '../vendor_modules/svgicons-config.js';
import '../vendor_modules/svgicons.js';

window.React = React;

import App from './src/app/app';

const reactRoot = window.document.getElementById('react-root');

ReactDOM.render(
 <App/>,
  reactRoot
);
