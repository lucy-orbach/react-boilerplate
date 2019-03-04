// entry point of my Application
import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill'
import App from 'src/App';
import 'src/index.css';

ReactDOM.render(<App />, document.getElementById('app'));