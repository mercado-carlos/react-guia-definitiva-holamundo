import React from 'react';
import Button from './components/Button';

class App extends React.Component {
    state = {
        valor: 3,
    };

    render() {
        console.log(this.state);

        return (
            <div>
                <p>Hola mundo</p>
                {this.state.valor === 3 ? <Button chanchito="feliz" /> : null}
                <button
                    className={`${this.state.valor}`}
                    onClick={() => this.setState({ valor: 2 })}
                >
                    Enviar en App
                </button>
            </div>
        );
    }
}

export default App;
