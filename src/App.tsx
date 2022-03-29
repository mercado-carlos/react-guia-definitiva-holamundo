import React from 'react';
import { Formik } from 'formik';

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
            {(formik) => (
                <form onSubmit={formik.handleSubmit}>
                    <label>Nombre</label>
                    <input type="text" {...formik.getFieldProps('name')} />
                    {formik.touched.name && formik.errors.name ? (
                        <div>{formik.errors.name}</div>
                    ) : null}
                    <br />
                    <label>Apellido</label>
                    <input type="text" {...formik.getFieldProps('lastname')} />
                    {formik.touched.lastname && formik.errors.lastname ? (
                        <div>{formik.errors.lastname}</div>
                    ) : null}
                    <br />
                    <label>E-mail</label>
                    <input type="email" {...formik.getFieldProps('email')} />
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}
                    <button type="submit">Enviar</button>
                </form>
            )}
        </Formik>
    );
}

export default App;
