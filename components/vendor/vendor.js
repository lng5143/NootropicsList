import Image from "next/image";
import Logo from "@/components/vendor/logo";

export default function Vendor({ name, logo, handleClick }) {
    return (
        <>
            <div className="border-2 border-slate-300 p-2 h-60 flex flex-col
                            items-center
                            cursor-pointer
                            rounded-md
                            hover:bg-blue-300"
                 onClick={handleClick}>
                <div className="basis-3/4 flex items-center">
                    <Logo image={logo} />
                </div>
                <h2 className="text-center basis-1/4">{name}</h2>
            </div>
        </>
    )
}