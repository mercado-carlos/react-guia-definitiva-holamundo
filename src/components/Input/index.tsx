import React from 'react';
import { useField } from 'formik';

import {
    Control,
    ErrorMessage,
    Label,
    MyInput,
} from '../../styles/StyledComponents/Input';

interface InputProps {
    label: string;
    name: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <Control>
            <Label>{label}</Label>
            <MyInput {...field} {...props} />
            {meta.touched && meta.error ? (
                <ErrorMessage>{meta.error}</ErrorMessage>
            ) : null}
        </Control>
    );
};

export default Input;
