import Link from "next/link";
import Image from "next/image";

export default function Blog({id, title, image, description}) {
    return (
        <>
            <div className="w-60 h-32">
                <Link href={`/${id}`}>
                    <div className="relative w-32 h-32">
                        <Image src={image} fill/>
                    </div>
                    <div>
                        <h2 className="">{title}</h2>
                        <p className="">{description}</p>
                    </div>
                </Link>
            </div>
        </>
    );
}