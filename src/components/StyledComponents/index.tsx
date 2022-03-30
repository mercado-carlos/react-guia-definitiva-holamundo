import React from 'react';
import styled, { keyframes } from 'styled-components';

export const P = styled.p`
    font-size: 24px;
    color: red;
`;

export const Content = styled.div`
    padding: 20px 25px;
`;

export const Button = styled.button<{ primary?: boolean }>`
    transition: box-shadow 0.2s ease;
    background-color: ${(props) => (props.primary ? 'red' : 'white')};
    color: ${(props) => (props.primary ? 'white' : 'red')};
    padding: 10px 15px;
    border: solid 2px red;
    border-radius: 4px;

    &:hover {
        box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.3);
    }

    &.secondary {
        background-color: blue;
        border: solid 2px blue;
        color: white;
    }

    .info {
        font-size: 28px;
    }
`;

export const BlockButton = styled(Button)`
    width: 100%;
    font-size: 24px;
`;

export const Link: React.FC<{ className?: string }> = ({
    className,
    ...props
}) => {
    return <a className={className} {...props}></a>;
};

export const StyledLink = styled(Link)`
    color: blue;
`;

export const Input = styled.input.attrs((props) => ({
    type: 'text',
    color: props.color || 'red',
}))`
    font-size: 20px;
    border: 1px solid red;
    color: ${(props) => props.color};
`;

export const Password = styled(Input).attrs({
    type: 'password',
})``;

export const girar = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const Rotar = styled.div`
    display: inline-block;
    animation: ${girar} 2s linear infinite;
`;
