import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ChanchitoDinamico = () => {
    const [loaded, setLoaded] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            setLoaded(true);
        }
    }, [router.isReady]);

    if (!loaded) {
        return null;
    }

    console.log({ router }, router.query.id);

    return (
        <div>
            <p>chanchito dinamico</p>
        </div>
    );
};

export default ChanchitoDinamico;
