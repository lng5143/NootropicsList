import Image from "next/image";

export default function SocialLink({ iconSrc, href, text }) {
    return (
        <div className="flex gap-2">
            <Image src={iconSrc} alt="social-link" width={20} height={20} />
            <a href={href} target="_blank" rel="noopener noreferrer"><u><b>{text}</b></u></a>
        </div>
    )
}