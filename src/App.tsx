import React from 'react';
import styled from 'styled-components';

const P = styled.p`
    font-size: 24px;
    color: red;
`;

const Content = styled.div`
    padding: 20px 25px;
`;

const Button = styled.button<{ primary?: boolean }>`
    background-color: ${(props) => (props.primary ? 'red' : 'white')};
    color: ${(props) => (props.primary ? 'white' : 'red')};
    padding: 10px 15px;
    border: solid 2px red;
    border-radius: 4px;
`;

const BlockButton = styled(Button)`
    width: 100%;
    font-size: 24px;
`;

const App = () => {
    return (
        <Content>
            <P>Parrafo</P>
            <Button>Enviar</Button>
            <Button primary>Enviar</Button>
            <BlockButton primary as="a" href="#">
                Enviar
            </BlockButton>
        </Content>
    );
};

export default App;
