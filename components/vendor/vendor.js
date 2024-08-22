import Image from "next/image";

export default function Vendor({ name, logo, handleClick }) {
    return (
        <>
            <div className="border-2 border-slate-300 p-2 h-60 flex flex-col
                            items-center
                            cursor-pointer
                            rounded-md
                            hover:border-4 hover:border-blue-800"
                 onClick={handleClick}>
                <div className="basis-3/4 flex items-center">
                    <Image
                        src={logo}
                        width={150}
                        height={150}
                        layout="intrinsic"
                        alt={`${name} logo`}/>
                </div>
                <h2 className="text-center basis-1/4">{name}</h2>
            </div>
        </>
    )
}