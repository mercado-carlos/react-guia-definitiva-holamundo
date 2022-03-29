import React, { useState } from 'react';
import './styles/App.css';

import Input from './components/Input';
import useFormulario from './hooks/useFormulario';
import Card from './components/Card';
import Container from './components/Container';
import Button from './components/Botton';

interface UsuariosProps {
    usuarios: any;
    formulario: any;
    name: string;
    lastname: string;
    email: string;
}

function App() {
    const [usuarios, setUsuarios] = useState<UsuariosProps[]>([]);

    const [formulario, handleChange, reset] = useFormulario({
        name: '',
        lastname: '',
        email: '',
    });

    const submit = (e: any) => {
        e.preventDefault();
        setUsuarios([...usuarios, formulario]);
        reset();
    };

    return (
        <Container>
            <Card>
                <div className="App">
                    <form onSubmit={submit}>
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
                        <Input
                            label="Correo"
                            name="email"
                            value={formulario.email}
                            onChange={handleChange}
                        />
                        <Button>Enviar</Button>
                    </form>
                </div>
            </Card>
            <Card>
                <ul>
                    {usuarios.map((usuario) => (
                        <li
                            key={usuario.email}
                        >{`${usuario.name} ${usuario.lastname}: ${usuario.email}`}</li>
                    ))}
                </ul>
            </Card>
        </Container>
    );
}

export default App;
