import React from 'react';

import { ProductoProps } from './interface';

export class Producto extends React.Component<ProductoProps> {
    constructor(props: ProductoProps) {
        super(props);
    }

    render() {
        const { producto } = this.props;

        return (
            <div className="product-container">
                <img src={producto.img} alt={producto.name} />
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
            </div>
        );
    }
}

export default Producto;
