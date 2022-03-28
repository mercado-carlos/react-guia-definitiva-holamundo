import React from 'react';
import './styles/App.css';

import Productos from './components/Productos';
import Layout from './components/Layout';
import Title from './components/Title';
import Navbar from './components/Navbar';

interface CarroPropsState {
    name: string;
    price: number;
    img: string;
}

class App extends React.Component<CarroPropsState> {
    constructor(props: CarroPropsState) {
        super(props);
    }

    state = {
        productos: [
            { name: 'Tomate', price: 1500, img: '/img/tomate.jpg' },
            { name: 'Chicharo', price: 2500, img: '/img/chicharo.jpg' },
            { name: 'Lechuga', price: 500, img: '/img/lechuga.jpg' },
        ],
        carro: [
            {
                name: this.props.name,
                price: this.props.price,
                img: this.props.img,
                cantidad: 0,
            },
        ],
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

    render() {
        return (
            <div className="app-container">
                <Navbar carro={this.state.carro} />
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
