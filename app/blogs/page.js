import BLOGS_SEED from "@/seedData/blogs-seed";
import Blog from "@/app/components/blog/blog";

export default function BlogsPage() {
    return (
        <>
            {BLOGS_SEED.map(blog => (
                <Blog key={blog.id}
                    title={blog.title} image={blog.image} description={blog.description}
                />
            ))}
        </>
    )
}