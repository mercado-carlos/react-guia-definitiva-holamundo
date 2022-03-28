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
        carro: [
            /* {
                name: 'Tomate',
                price: 1500,
                img: '/img/tomate.jpg',
                cantidad: 1,
            }, */
        ],
    };

    agregarAlCarro = (producto: any) => {
        return this.setState({
            carro: this.state.carro.concat({
                ...producto,
                cantidad: 1,
            }),
        });
    };

    render() {
        console.log(this.state.carro);
        return (
            <div className="app-container">
                <Navbar />
                <Layout>
                    <Title />
                    <Productos
                        agregarAlCarro={this.agregarAlCarro}
                        productos={this.state.productos}
                    />
                </Layout>
            </div>
        );
    }
}

export default App;
