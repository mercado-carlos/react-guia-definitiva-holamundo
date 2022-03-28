import React from 'react';

import Carro from '../Carro';
import Logo from '../Logo';
import { NavbarProps } from './interface';

class Navbar extends React.Component<NavbarProps> {
    constructor(props: NavbarProps) {
        super(props);
    }

    render() {
        const { carro, esCarroVisible, mostrarCarro } = this.props;

        return (
            <nav className="navbar">
                <Logo />
                <Carro
                    carro={carro}
                    esCarroVisible={esCarroVisible}
                    mostrarCarro={mostrarCarro}
                />
            </nav>
        );
    }
}

export default Navbar;
