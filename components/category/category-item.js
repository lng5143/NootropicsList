export default function CategoryItem({name, isActive, handleClick}) {
    return (
        <button
            className={`
                ${isActive ? "bg-slate-900 text-slate-200" : "bg-slate-200"} 
                text-left w-full p-2 mb-2 rounded-md
                hover:bg-blue-300 hover:text-black`}
            onClick={handleClick}>
            {name}
        </button>
    )
}