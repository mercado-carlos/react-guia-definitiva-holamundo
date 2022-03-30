import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import TextInput from './components/TextInput';
import Checkbox from './components/Checkbox';
import Select from './components/Select';
import Radio from './components/Radio';

const validate = (values: any) => {
    const errors = {
        name: '',
        lastname: '',
        email: '',
        radio: '',
    };

    if (!values.name) {
        errors.name = 'Requerido';
    } else if (values.name.length < 5) {
        errors.name = 'El nombre es muy corto';
    }

    if (!values.lastname) {
        errors.lastname = 'Requerido';
    } else if (values.lastname.length < 5) {
        errors.lastname = 'El apellido es muy corto';
    }

    if (!values.email) {
        errors.email = 'Requerido';
    } else if (values.email.length < 5) {
        errors.email = 'El e-mail es muy corto';
    }

    if (!values.radio) {
        errors.radio = 'Requerido';
    }

    return errors;
};

function App() {
    return (
        <Formik
            initialValues={{
                name: '',
                lastname: '',
                email: '',
                chancho: '',
                radio: '',
            }}
            validate={validate}
            onSubmit={(values) => console.log(values)}
        >
            <Form>
                <TextInput name="name" label="Nombre" />
                <br />
                <TextInput name="lastname" label="Apellido" />
                <br />
                <TextInput name="email" label="E-mail" />
                <Select name="chancho" label="Tipo de chancho">
                    <option value="">Seleccione chancho</option>
                    <option value="felipe">Felipe</option>
                    <option value="chanchofeliz">Chancho feliz</option>
                    <option value="chanchotriste">Chancho triste</option>
                </Select>
                <Checkbox name="accept">Aceptar Terminos</Checkbox>
                <Radio name="radio" value="chanchito1" label="chanchito 1" />
                <Radio name="radio" value="chanchito2" label="chanchito 2" />
                <Radio name="radio" value="chanchito3" label="chanchito 3" />
                <Radio name="radio" value="chanchito4" label="chanchito 4" />
                <ErrorMessage name="radio" />
                <button type="submit">Enviar</button>
            </Form>
        </Formik>
    );
}

export default App;
