export default function CategoryItem({name, isActive, handleClick}) {
    let classes = "";
    if (isActive)
        classes += " bg-slate-800 text-slate-200"
    else classes += " bg-slate-200"

    return (
        <button className={`${isActive ? "bg-slate-900 text-slate-200" : "bg-slate-200"} text-left w-full p-2 mb-2 hover:bg-blue-300 hover:text-black`} onClick={handleClick}>{name}</button>
    )
}