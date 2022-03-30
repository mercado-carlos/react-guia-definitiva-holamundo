import { useField } from 'formik';
import React from 'react';

interface RadioProps {
    label: string;
    name: string;
    value: any;
}

const Radio: React.FC<RadioProps> = ({ label, ...props }) => {
    const [field] = useField({ ...props, type: 'radio' });

    return (
        <div>
            <label>
                <input type="radio" {...field} {...props} />
                {label}
            </label>
        </div>
    );
};

export default Radio;
