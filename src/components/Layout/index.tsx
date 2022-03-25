import React from 'react';

class Layout extends React.Component {
    render() {
        return (
            <div className="layout">
                <div className="container">{this.props.children}</div>
            </div>
        );
    }
}

export default Layout;
