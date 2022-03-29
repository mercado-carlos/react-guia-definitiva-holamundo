import React from 'react';
import { useField } from 'formik';

interface TextInputProps {
    label: string;
    name: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className="control">
            <label className="label">{label}</label>
            <input className="input" {...field} {...props} />

            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default TextInput;
