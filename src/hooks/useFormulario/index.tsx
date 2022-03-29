import { useState } from 'react';

const useFormulario = (initial: any) => {
    const [formulario, setFormulario] = useState(initial);
    const handleChange = (e: any) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value,
        });
    };

    return [formulario, handleChange];
};

export default useFormulario;
