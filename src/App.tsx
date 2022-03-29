import React, { useState } from 'react';

const App = () => {
    const [value, setValue] = useState({
        normal: 'por defecto',
        texto: '',
        select: '',
    });

    const handleChange = (e: any) => {
        setValue((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div>
            {value.normal.length < 5 ? <span>Longitud minima de 5</span> : null}
            <input
                type="text"
                name="normal"
                value={value.normal}
                onChange={handleChange}
            />
            <textarea
                name="texto"
                value={value.texto}
                onChange={handleChange}
            />

            <select value={value.select} name="select" onChange={handleChange}>
                <option value="">Seleccione</option>
                <option value="chanchofeliz">Chancho feliz</option>
                <option value="chanchitofeliz">Chanchito feliz</option>
                <option value="chanchitotriste">Chanchito triste</option>
            </select>
        </div>
    );
};

export default App;
