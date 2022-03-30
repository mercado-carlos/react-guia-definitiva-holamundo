import { useField } from 'formik';
import React from 'react';

interface SelectProps {
    label: string;
    name: string;
}

const Select: React.FC<SelectProps> = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div>
            <label>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? <div>{meta.error}</div> : null}
        </div>
    );
};

export default Select;
