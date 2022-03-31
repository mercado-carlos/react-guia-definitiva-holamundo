import React from 'react';
import { Form, Formik } from 'formik';

import Input from './components/Input';
import Container from './components/Container';
import Section from './components/Section';
import Button from './components/Button';

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
                        <Button>Calcular</Button>
                    </Form>
                </Formik>
            </Section>
        </Container>
    );
};

export default App;
