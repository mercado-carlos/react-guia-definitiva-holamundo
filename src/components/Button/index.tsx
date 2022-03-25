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

    componentDidUpdate(prevProps: any, prevState: any) {
        console.log('componentDidUpdate', prevProps, prevState);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount', this.props, this.state);
    }

    render() {
        console.log('rendering button');

        return (
            <button onClick={() => this.setState({ prop: 1 })}>Enviar</button>
        );
    }
}

export default Button;
