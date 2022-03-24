import React from 'react';
import './App.css';

interface AppProps {
    estado?: string;
}

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
