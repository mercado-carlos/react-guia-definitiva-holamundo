import React from 'react';

import { ButtonProps } from './interface';

export class Button extends React.Component<ButtonProps> {
    constructor(props: ButtonProps) {
        super(props);
    }

    render() {
        return <button className="botton-container" {...this.props} />;
    }
}

export default Button;
