import React from 'react';

interface InputProps {
    label: string;
    name: string;
    value: any;
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const Input: React.FC<InputProps> = ({ label, name, value, onChange }) => {
    return (
        <div className="field">
            <label>{label}</label>
            <input name={name} value={value} onChange={onChange} />
        </div>
    );
};

export default Input;
