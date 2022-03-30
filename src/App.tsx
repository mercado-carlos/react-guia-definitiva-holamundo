import React, { useState } from 'react';
import './styles/App.css';
import { Field, Form, Formik } from 'formik';

const App = () => {
    const [photos, setPhotos] = useState([]);

    console.log({ photos });

    return (
        <div>
            <header>
                <Formik
                    initialValues={{ search: '' }}
                    onSubmit={async (values) => {
                        const response = await fetch(
                            `https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`,
                            {
                                headers: {
                                    Authorization:
                                        'Client-ID ypI66F93L4z_w-zvxx9E4Mn4vXtpJhDGIuErfyLN_1I',
                                },
                            }
                        );
                        const data = await response.json();
                        setPhotos(data.results);
                    }}
                >
                    <Form>
                        <Field name="search" />
                    </Form>
                </Formik>
            </header>
        </div>
    );
};

export default App;
