import React from 'react';

import { BubbleAlertProps } from './interface';

class BubbleAlert extends React.Component<BubbleAlertProps> {
    constructor(props: BubbleAlertProps) {
        super(props);
    }

    getNumber(n: number) {
        if (!n) {
            return ' ';
        }

        return n > 9 ? '9+' : n;
    }

    render() {
        const { value } = this.props;

        return <span className="bubbleAlert">{this.getNumber(value)}</span>;
    }
}

export default BubbleAlert;
