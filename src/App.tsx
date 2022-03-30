import React from 'react';

import {
    BlockButton,
    Button,
    Content,
    Input,
    Link,
    P,
    Password,
    Rotar,
    StyledLink,
} from './components/StyledComponents';

const App = () => {
    return (
        <Content>
            <P>Parrafo</P>
            <Button>
                Enviar <p className="info">Info</p>
            </Button>
            <Button primary>Enviar</Button>
            <Button className="secondary">Enviar</Button>
            <BlockButton primary as="a" href="#">
                Enviar
            </BlockButton>
            <BlockButton primary>Enviar</BlockButton>
            <Link>Link</Link>
            <StyledLink>Link con estilo</StyledLink>
            <Input />
            <Password />
            <Rotar>Estoy girando</Rotar>
        </Content>
    );
};

export default App;
