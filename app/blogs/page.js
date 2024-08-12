import BLOGS_SEED from "@/seedData/blogs-seed";
import Blog from "@/components/blog/blog";

export default function BlogsPage() {
    return (
        <>
            <div className="grid">
                {BLOGS_SEED.map(blog => (
                    <Blog key={blog.id}
                        title={blog.title} image={blog.image} description={blog.description} id={blog.id}
                    />
                ))}
            </div>
        </>
    )
}