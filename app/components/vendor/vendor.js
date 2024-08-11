import Image from "next/image";
import Link from "next/link";

export default function Vendor({ name, logo, description, url }) {
    return (
        <>
            <Link href={url}>
                <h2>{name}</h2>
                <Image src={logo} fill/>
                <p>{description}</p>
            </Link>

        </>
    )
}