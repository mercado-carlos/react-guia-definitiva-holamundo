import React from 'react';
//import './App.css';
import './styles/Main.css';

interface AppProps {
    estado?: string;
}

const estilo = ({ bg = '#222' }) => ({
    backgroundColor: bg,
    color: '#eee',
    padding: '10px 15px',
    margin: '10px 15px',
});
const estilo2 = {
    boxShadow: '2px 5px 3px rgba(0, 0, 0, 0.5)',
};

const Li: React.FC<AppProps> = ({ children, estado }) => {
    console.log(estado);

    return <li className="clase-li">{children}</li>;
};

const App = () => {
    return (
        <ul className="clase-css">
            <Li estado="feliz">valor de li</Li>
        </ul>
    );
};

export default App;
