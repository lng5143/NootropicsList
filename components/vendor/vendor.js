import Image from "next/image";

export default function Vendor({ name, logo }) {
    return (
        <>
            <div className="w-60 h-60 border-4">
                <h2 className="">{name}</h2>
                <div className="relative w-10 h-10">
                    <Image src={logo} fill/>
                </div>
            </div>
        </>
    )
}