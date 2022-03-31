import React from 'react';
import { Form, Formik } from 'formik';

import Input from './components/Input';
import Container from './components/Container';
import Section from './components/Section';
import Button from './components/Button';

const compoundInterest = (
    deposit: number,
    contribution: number,
    years: number,
    rate: number
) => {
    let total = deposit;

    for (let i = 0; i < years; i++) {
        total = (total + contribution) * (rate + 1);
    }

    return Math.round(total);
};

const App = () => {
    const handleSubmit = ({ deposit, contribution, years, rate }: any) => {
        const val = compoundInterest(
            Number(deposit),
            Number(contribution),
            Number(years),
            Number(rate)
        );
    };

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
