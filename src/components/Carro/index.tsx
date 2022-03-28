import React from 'react';

import BubbleAlert from '../BubbleAlert';

class Carro extends React.Component {
    render() {
        return (
            <div>
                <span className="bubble">
                    <BubbleAlert value={10} />
                </span>
                <button className="carro">Carro</button>
            </div>
        );
    }
}

export default Carro;
