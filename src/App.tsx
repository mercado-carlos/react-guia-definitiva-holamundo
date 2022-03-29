import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const validate = (values: any) => {
    const errors = {
        name: '',
        lastname: '',
        email: '',
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

    return errors;
};

function App() {
    return (
        <Formik
            initialValues={{
                name: '',
                lastname: '',
                email: '',
            }}
            validate={validate}
            onSubmit={(values) => console.log(values)}
        >
            <Form>
                <label>Nombre</label>
                <Field name="name" type="text" className="input" />
                <Field name="select" as="select" className="input">
                    <option value="cha">Cha</option>
                    <option value="che">Che</option>
                </Field>
                <ErrorMessage name="name" />
                <br />
                <label>Apellido</label>
                <Field name="lastname" type="text" />
                <ErrorMessage name="lastname" />
                <br />
                <label>E-mail</label>
                <Field name="email" type="text" />
                <ErrorMessage name="email" />
                <button type="submit">Enviar</button>
            </Form>
        </Formik>
    );
}

export default App;
