import React from 'react';

import Input from './components/Input';

class App extends React.Component {
    state = {
        nombre: '',
        apellido: '',
    };

    updateValues = (prop: any, value: any) => {
        this.setState({ [prop]: value });
    };

    render() {
        return (
            <p>
                Nombre completo: {`${this.state.nombre} ${this.state.apellido}`}
                <Input
                    value={this.state.nombre}
                    onChange={(e) =>
                        this.updateValues('nombre', e.target.value)
                    }
                />
                <Input
                    value={this.state.apellido}
                    onChange={(e) =>
                        this.updateValues('apellido', e.target.value)
                    }
                />
            </p>
        );
    }
}

export default App;
