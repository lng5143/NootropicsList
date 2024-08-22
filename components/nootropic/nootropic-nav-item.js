export default function NootropicNavItem({name, isActive, handleClick}) {
    return (
        <button
            className={`
                ${isActive ? "bg-slate-900 text-slate-200" : "bg-slate-200"} 
                tex-center lg:text-left w-full p-2 rounded-md whitespace-nowrap lg:whitespace-normal
                hover:bg-blue-800 hover:text-slate-200`}
            onClick={handleClick}>
            {name}
        </button>
    )
}