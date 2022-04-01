import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';

const store = createStore((state = 0, action) => {
    switch (action.type) {
        case 'accion': {
            return action.payload;
        }
    }

    return state;
});

store.dispatch({ type: 'accion', payload: 2 });
store.dispatch({ type: 'accionindefinida', payload: 15 });
console.log(store.getState());

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
