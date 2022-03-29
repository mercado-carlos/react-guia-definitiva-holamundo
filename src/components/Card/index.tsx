import React from 'react';

interface CardProps {}

const Card: React.FC<CardProps> = ({ children }) => {
    return <div className="card">{children}</div>;
};

export default Card;
