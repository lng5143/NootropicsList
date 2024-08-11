import Link from "next/link";
import Image from "next/image";

export default function Blog({id, title, image, description}) {
    return (
        <>
            <Link href={`/${id}`}>
                <Image src={image} fill/>
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </Link>
        </>
    );
}