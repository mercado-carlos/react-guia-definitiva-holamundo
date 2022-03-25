import React from 'react';
import Productos from './components/Productos';

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
                <Productos
                    agregarAlCarro={() => console.log('No hace nada')}
                    productos={this.state.productos}
                />
            </div>
        );
    }
}

export default App;
