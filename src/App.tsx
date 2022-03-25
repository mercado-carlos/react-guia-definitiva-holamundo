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
                <Button chanchito="feliz" />
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
