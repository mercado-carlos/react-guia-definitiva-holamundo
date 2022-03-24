import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
) */

interface MainProps {
    estado?: string;
    casa?: boolean;
    edad?: number;
}

const Li: React.FC<MainProps> = ({ children, estado, casa, edad }) => {
    console.log(casa, edad);
    return (
        <li>
            {children} estoy {estado}
        </li>
    );
};

const Render = () => (
    <ul>
        <Li estado={'feliz'} casa={false} edad={24}>
            Chanchito
        </Li>
        <Li estado={'triste'}>Chanchito</Li>
        <Li estado={'emocionado'}>Carlos</Li>
    </ul>
);

ReactDOM.render(<Render />, document.getElementById('root'));
