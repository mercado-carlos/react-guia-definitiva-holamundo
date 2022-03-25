import React from 'react';

import { ButtonProps } from './interface';

class Button extends React.Component<ButtonProps> {
    state = {};

    constructor(props: ButtonProps) {
        super(props);

        console.log('constructor', props);
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    render() {
        console.log('rendering button');

        return <button>Enviar</button>;
    }
}

export default Button;
