import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavigationBar from './navigationBar'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('here'));
ReactDOM.render(<NavigationBar />, document.getElementById('root'));
registerServiceWorker();
