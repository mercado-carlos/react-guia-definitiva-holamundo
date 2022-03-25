import React from 'react';

import { InputProps } from './interface';

export class Input extends React.Component<InputProps> {
    constructor(props: InputProps) {
        super(props);
    }

    render() {
        return (
            <input value={this.props.value} onChange={this.props.onChange} />
        );
    }
}

export default Input;
