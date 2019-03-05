// entry point of my Application
import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import App from 'src/App';
import 'src/index.css';
import DefaultErrorBoundry from 'src/components/errors/DefaultErrorBoundry';

ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundry>
      <App />
    </DefaultErrorBoundry>
  </React.StrictMode>,
  document.getElementById('app')
);
