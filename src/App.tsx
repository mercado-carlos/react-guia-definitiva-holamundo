import React from 'react';
import './styles/App.css';

import Input from './components/Input';
import useFormulario from './hooks/useFormulario';
import Card from './components/Card';

function App() {
    const [formulario, handleChange] = useFormulario({
        name: '',
        lastname: '',
    });

    console.log(formulario);

    return (
        <Card>
            <form>
                <Input
                    label="Nombre"
                    name="name"
                    value={formulario.name}
                    onChange={handleChange}
                />
                <Input
                    label="Apellido"
                    name="lastname"
                    value={formulario.lastname}
                    onChange={handleChange}
                />
            </form>
        </Card>
    );
}

export default App;
