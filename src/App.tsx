import React, { useState } from 'react';
import './styles/App.css';
import { Field, Form, Formik } from 'formik';

interface PhotosProps {
    id: any;
    links: any;
    urls: any;
    description: any;
    alt_description: any;
}

const App = () => {
    const [photos, setPhotos] = useState<PhotosProps[]>([]);
    const open = (url: string) => window.open(url);

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
            <div className="container">
                <div className="center">
                    {photos.map((photo) => (
                        <article
                            key={photo.id}
                            onClick={() => open(photo.links.html)}
                        >
                            <img src={photo.urls.regular} />
                            <p>
                                {[
                                    photo.description,
                                    photo.alt_description,
                                ].join(' - ')}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
