export default function CategoryTag({ data }) {
   let styles = {
       backgroundColor: data.color
   }

    return (
        <div className="px-2 py-1 mr-1 mb-1 rounded-md"
             style={styles}>
            {data.name}
        </div>
    )
}