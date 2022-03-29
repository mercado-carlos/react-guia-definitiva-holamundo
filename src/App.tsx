import React from 'react';
import './App.css';

function App() {
    const submit = (e: any) => {
        e.prevenntDefault();
        const data = Array.from(new FormData(e.target));
        console.log(Object.fromEntries(data));
    };

    return (
        <form onSubmit={submit}>
            <div>
                <span>lalala</span>
                <input name="campo" />
            </div>
            <input name="campo-2" />
            <input type="submit" value="Enviar" />
        </form>
    );
}

export default App;
