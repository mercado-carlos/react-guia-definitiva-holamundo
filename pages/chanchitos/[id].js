import { useRouter } from 'next/router';

import useIsMounted from '../../hooks/useIsMounted';

const ChanchitoDinamico = () => {
    const isMounted = useIsMounted();
    const router = useRouter();

    if (!isMounted) {
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
