import React, { useEffect, useState } from 'react';

const useContador = (inicial: any) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        setContador(contador + 1);
    };

    return [contador, incrementar];
};

const App = () => {
    const [contador, incrementar] = useContador(0);

    useEffect(() => {
        document.title = contador;
    }, [contador]);

    return (
        <div>
            Contador: {contador}
            <button onClick={incrementar}>Incrementar</button>
        </div>
    );
};

export default App;
