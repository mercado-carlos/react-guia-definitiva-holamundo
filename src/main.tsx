import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
) */

const Div = () => <p>Hola Mundo</p>;
ReactDOM.render(<Div />, document.getElementById('root'));
