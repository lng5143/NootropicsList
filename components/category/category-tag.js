export default function CategoryTag({ data }) {
    return (
        <div className={`px-2 py-1 mr-1 mb-1 rounded-md ${data.color}`}>
            {data.name}
        </div>
    )
}