import React from 'react';

const impura = () => new Date().toLocaleString();
console.log(impura());
const MiComponente = (props: any) => {
    const { miProp } = props;

    return <div>Nombre: {miProp}</div>;
};

const App = () => {
    return <MiComponente miProp={'chanchito feliz'} />;
};

export default App;
