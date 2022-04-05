import { render, screen } from '@testing-library/react';

import Index from '../pages/index';

describe('Index', () => {
    describe('Component', () => {
        it('se renderiza', () => {
            render(
                <Index
                    pokemones={[
                        { name: 'Chanchito feliz', url: '/pokemon/detalle/1' },
                    ]}
                />
            );

            const paragraph = screen.getByTestId('titulo');
            expect(paragraph).toBeInTheDocument();

            const chanchito = screen.getByText('Chanchito feliz');

            expect(chanchito).toBeInTheDocument();
            const url = chanchito.getAttribute('href');
            expect(url).toEqual('/pokemones/1');
        });
    });
    describe('getStaticProps', () => {});
});
