import React from 'react';

import Producto from '../Producto';
import { ProductosProps } from './interface';

class Productos extends React.Component<ProductosProps> {
    constructor(props: ProductosProps) {
        super(props);
    }

    render() {
        const { productos, agregarAlCarro } = this.props;

        return (
            <div>
                {productos.map((producto: any) => (
                    <Producto
                        agregarAlCarro={agregarAlCarro}
                        key={producto.name}
                        producto={producto}
                    />
                ))}
            </div>
        );
    }
}

export default Productos;
