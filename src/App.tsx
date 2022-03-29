import React, { useState } from 'react';

const App = () => {
    const [value, setValue] = useState({
        normal: 'por defecto',
        texto: '',
        select: '',
        check: false,
        estado: 'feliz',
    });

    const handleChange = (e: any) => {
        setValue((state) => ({
            ...state,
            [e.target.name]:
                e.target.type === 'checkbox'
                    ? e.target.checked
                    : e.target.value,
        }));
    };

    console.log(value);

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

            <input
                type="checkbox"
                name="check"
                onChange={handleChange}
                checked={value.check}
            />

            <div>
                <label>Chancho</label>
                <input
                    type="radio"
                    value="feliz"
                    name="estado"
                    onChange={handleChange}
                    checked={value.estado === 'feliz'}
                />
                Feliz
                <input
                    type="radio"
                    value="triste"
                    name="estado"
                    onChange={handleChange}
                    checked={value.estado === 'triste'}
                />
                Triste
                <input
                    type="radio"
                    value="felipe"
                    name="estado"
                    onChange={handleChange}
                    checked={value.estado === 'felipe'}
                />
                Felipe
            </div>
        </div>
    );
};

export default App;
