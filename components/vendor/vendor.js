import Image from "next/image";

export default function Vendor({ name, logo, handleClick }) {
    return (
        <>
            <div className="h-60 p-3 flex flex-col
                            justify-center items-center
                            border-4 border-slate-800 -m-0.5
                            cursor-pointer"
                onClick={handleClick}>
                <h2 className="text-center mb-5">{name}</h2>
                <div className="relative w-10 h-10">
                    <Image src={logo} fill alt={`${name} logo`}/>
                </div>
            </div>
        </>
    )
}