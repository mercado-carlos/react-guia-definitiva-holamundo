import Link from 'next/link';
import Image from 'next/image';

import Tomate from '../public/tomate.jpg';

// <Image src="/tomate.jpg" width={400} height={400} />
export default function Home() {
    return (
        <div>
            <Link href="/chanchitos">Ir a chanchitos</Link>
            <p>Hola mundo</p>
            <Image src={Tomate} width={400} height={400} />
        </div>
    );
}
