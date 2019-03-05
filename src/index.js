// entry point of my Application
import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import App from 'src/App';
import 'src/index.css';
import DefaultErrorBoundry from 'src/components/errors/DefaultErrorBoundry';
if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000); //nodes, delay
}

ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundry>
      <App />
    </DefaultErrorBoundry>
  </React.StrictMode>,
  document.getElementById('app')
);
