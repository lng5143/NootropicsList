import Image from 'next/image';
import Link from 'next/link'

export default function Nootropic({image, name, url}) {
    return (
        <>
            <Link href={url}>
                <div className="relative">
                    <Image src={image} fill />
                </div>
                <h2>{name}</h2>
            </Link>
        </>
    )
}