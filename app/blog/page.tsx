import { getAllBlogs } from '@/lib/api'
import PostList from './PostList'
export default async function Blogpage() {
    const blogs = await getAllBlogs();
    return (
        <>
            <section className="py-24">
                <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
                        {blogs.slice(0, 2).map((blog: any) => (
                            <PostList
                                key={blog.id}
                                post={blog}
                                aspect="landscape"
                                preloadImage={true}
                            />
                        ))}
                    </div>
                    <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
                        {blogs.slice(2, 14).map((blog: any) => (
                            <PostList key={blog.id} post={blog} aspect="square" />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
