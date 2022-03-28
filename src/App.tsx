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
            {
                name: 'Tomate',
                price: 1500,
                img: '/img/tomate.jpg',
                cantidad: 0,
            },
            {
                name: 'Chicharo',
                price: 2500,
                img: '/img/chicharo.jpg',
                cantidad: 0,
            },
            {
                name: 'Lechuga',
                price: 500,
                img: '/img/lechuga.jpg',
                cantidad: 0,
            },
        ],
        esCarroVisible: false,
    };

    agregarAlCarro = (producto: any) => {
        const { carro } = this.state;

        if (carro.find((x) => x.name === producto.name)) {
            const newCarro = carro.map((x) =>
                x.name === producto.name
                    ? {
                          ...x,
                          cantidad: x.cantidad + 1,
                      }
                    : x
            );

            return this.setState({ carro: newCarro });
        }

        return this.setState({
            carro: this.state.carro.concat({
                ...producto,
                cantidad: 1,
            }),
        });
    };

    mostrarCarro = () => {
        if (!this.state.carro.length) {
            return;
        }
        this.setState({ esCarroVisible: !this.state.esCarroVisible });
    };

    render() {
        const { esCarroVisible } = this.state;

        return (
            <div className="app-container">
                <Navbar
                    carro={this.state.carro}
                    esCarroVisible={esCarroVisible}
                    mostrarCarro={this.mostrarCarro}
                />
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
