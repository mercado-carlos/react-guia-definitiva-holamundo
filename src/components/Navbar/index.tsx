import React from 'react';

import Carro from '../Carro';
import Logo from '../Logo';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <Logo />
                <Carro />
            </nav>
        );
    }
}

export default Navbar;
