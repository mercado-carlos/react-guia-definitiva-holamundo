import React from 'react';

interface InputProps {
    label: string;
    name: string;
    value: any;
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
    placeholder: string;
}

const Input: React.FC<InputProps> = ({
    label,
    name,
    value,
    onChange,
    placeholder,
}) => {
    return (
        <div className="field">
            <label>{label}</label>
            <input
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
