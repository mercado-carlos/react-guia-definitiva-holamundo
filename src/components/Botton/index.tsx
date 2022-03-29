import React from 'react';

interface ButtonProps {}

const Button: React.FC<ButtonProps> = ({ children }) => {
    return <button className="button">{children}</button>;
};

export default Button;
