import React from 'react';
import './styles/App.css';

import Productos from './components/Productos';
import Layout from './components/Layout';
import Title from './components/Title';
import Navbar from './components/Navbar';

class App extends React.Component {
    state = {
        productos: [
            { name: 'Tomate', price: 1500, img: '/img/tomate.jpg' },
            { name: 'Chicharo', price: 2500, img: '/img/chicharo.jpg' },
            { name: 'Lechuga', price: 500, img: '/img/lechuga.jpg' },
        ],
    };

    render() {
        return (
            <div className="app-container">
                <Navbar />
                <Layout>
                    <Title />
                    <Productos
                        agregarAlCarro={() => console.log('No hace nada')}
                        productos={this.state.productos}
                    />
                </Layout>
            </div>
        );
    }
}

export default App;
