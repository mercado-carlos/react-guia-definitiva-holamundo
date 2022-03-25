import React from 'react';
import './App.css';

class App extends React.Component {
    state = {
        productos: [
            { name: 'Tomate', price: 1500, img: '/img/tomate.jpg' },
            { name: 'Chicharo', price: 1500, img: '/img/chicharo.jpg' },
            { name: 'Lechuga', price: 1500, img: '/img/lechuga.jpg' },
        ],
    };

    render() {
        return (
            <div>
                <p>Hola Mundo</p>
            </div>
        );
    }
}

export default App;
