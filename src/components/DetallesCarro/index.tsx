import React from 'react';

import { DetallesCarroProps } from './interface';

class DetallesCarro extends React.Component<DetallesCarroProps> {
    constructor(props: DetallesCarroProps) {
        super(props);
    }

    render() {
        const { carro } = this.props;
        console.log(carro);
        return (
            <div className="detallesCarro">
                <ul>
                    {carro.map((x: any) => (
                        <li key={x.name} className="producto">
                            <img src={x.img} alt={x.name} />
                            {x.name}
                            <span>{x.cantidad}</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default DetallesCarro;
