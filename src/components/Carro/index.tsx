import React from 'react';

import BubbleAlert from '../BubbleAlert';
import DetallesCarro from '../DetallesCarro';
import { CarroProps } from './interface';

class Carro extends React.Component<CarroProps> {
    constructor(props: CarroProps) {
        super(props);
    }

    render() {
        const { carro, esCarroVisible, mostrarCarro } = this.props;

        const cantidad = carro.reduce(
            (acc: any, el: any) => acc + el.cantidad,
            0
        );

        return (
            <div>
                <span className="bubble">
                    {cantidad !== 0 ? <BubbleAlert value={cantidad} /> : null}
                </span>
                <button onClick={mostrarCarro} className="carro">
                    Carro
                </button>
                {esCarroVisible ? <DetallesCarro carro={carro} /> : null}
            </div>
        );
    }
}

export default Carro;
