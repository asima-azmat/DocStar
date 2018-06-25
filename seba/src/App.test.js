import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import navigationBar from './navigationBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.render(<navigationBar/>,div);
  ReactDOM.unmountComponentAtNode(div);
});
