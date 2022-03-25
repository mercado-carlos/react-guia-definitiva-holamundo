import React from 'react';
import Button from '../Button';

import { ProductoProps } from './interface';

export class Producto extends React.Component<ProductoProps> {
    constructor(props: ProductoProps) {
        super(props);
    }

    render() {
        const { producto, agregarAlCarro } = this.props;

        return (
            <div className="product-container">
                <img src={producto.img} alt={producto.name} />
                <h3>{producto.name}</h3>
                <p>${producto.price}</p>
                <Button onClick={() => agregarAlCarro(producto)}>
                    Agregar al carro
                </Button>
            </div>
        );
    }
}

export default Producto;
