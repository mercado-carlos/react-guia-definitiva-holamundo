import React, { useEffect, useState } from 'react';

const useContador = (inicial: any) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        setContador(contador + 1);
    };

    return [contador, incrementar];
};

const Interval = (props: any) => {
    const { contador } = props;

    useEffect(() => {
        const i = setInterval(() => console.log(contador), 1000);
        return () => clearInterval(i);
    }, [contador]);

    return <p>Intervalo</p>;
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
            <Interval contador={contador} />
        </div>
    );
};

export default App;
