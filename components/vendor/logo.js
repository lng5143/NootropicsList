import Image from "next/image";


export default function Logo({image}) {
    return (
        <Image
            src={image}
            width={150}
            height={150}
            layout="intrinsic"
            alt={`${name} logo`}/>
        )
}
