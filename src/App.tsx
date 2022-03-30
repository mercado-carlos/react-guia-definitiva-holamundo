import React from 'react';
import { Form, Formik } from 'formik';

import { Container, Section } from './styles/StyledComponents/App';
import Input from './components/Input';

const App = () => {
    const handleSubmit = () => {};

    return (
        <Container>
            <Section>
                <Formik
                    initialValues={{
                        deposit: '',
                        contribution: '',
                        years: '',
                        rate: '',
                    }}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <Input name="deposit" label="Deposito inicial" />
                        <Input name="contribution" label="Contribucion anual" />
                        <Input name="years" label="Año" />
                        <Input name="rate" label="Interes estimado" />
                    </Form>
                </Formik>
            </Section>
        </Container>
    );
};

export default App;
