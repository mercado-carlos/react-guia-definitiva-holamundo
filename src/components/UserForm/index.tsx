import React from 'react';

import useFormulario from '../../hooks/useFormulario';
import Button from '../Botton';
import Input from '../Input';

interface UserFormProps {
    submit: any;
}

const UserForm: React.FC<UserFormProps> = ({ submit }) => {
    const [formulario, handleChange, reset] = useFormulario({
        name: '',
        lastname: '',
        email: '',
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        submit(formulario);
        reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label="Nombre"
                name="name"
                value={formulario.name}
                onChange={handleChange}
                placeholder="Chancho"
            />
            <Input
                label="Apellido"
                name="lastname"
                value={formulario.lastname}
                onChange={handleChange}
                placeholder="Martinez"
            />
            <Input
                label="Correo"
                name="email"
                value={formulario.email}
                onChange={handleChange}
                placeholder="chancho1@email.com"
            />
            <Button>Enviar</Button>
        </form>
    );
};

export default UserForm;
