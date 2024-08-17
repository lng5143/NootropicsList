export default function CategoryItem({name, isActive, handleClick}) {
    let classes = "text-left w-full p-2 mb-2 hover:bg-blue-300";
    if (isActive)
        classes += " bg-slate-800 text-slate-200"
    else classes += " bg-slate-200"

    return (
        <button className={classes} onClick={handleClick}>{name}</button>
    )
}