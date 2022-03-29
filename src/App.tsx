import { useState } from 'react';
import './styles/App.css';

import useFormulario from './hooks/useFormulario';
import Card from './components/Card';
import Container from './components/Container';
import UserForm from './components/UserForm';

interface UsuariosProps {
    usuarios: any;
    formulario: any;
    name: string;
    lastname: string;
    email: string;
}

function App() {
    const [usuarios, setUsuarios] = useState<UsuariosProps[]>([]);

    const submit = (usuario: any) => {
        setUsuarios([...usuarios, usuario]);
    };

    console.log(usuarios);

    return (
        <div className="app-container">
            <Container>
                <Card>
                    <div className="app">
                        <UserForm submit={submit} />
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
        </div>
    );
}

export default App;
