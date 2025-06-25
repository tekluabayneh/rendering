import Author from "./author";
type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

const PostsServer = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
        console.warn("Failed to fetch posts");
        return;
    }
    const posts: Post[] = await res.json();

    const filterpost = posts.filter(post => post.id % 2 === 0)

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Posts List</h1>
            {filterpost.length > 0 ? (
                <ul className="space-y-4">
                    {posts.map((post: Post) => (
                        <li
                            key={post.id}
                            className="p-4 shadow-md rounded-lg text-gray-600 bg-white"
                        >
                            <h1>   User ID: {post.userId}</h1>
                            <h2 className="text-xl font-bold">{post.title}</h2>
                            <p>{post.body}</p>
                            <Author userId={post.id} />;
                        </li>
                    ))}
                </ul>
            ) : (
                <div>Error fetching posts.</div>
            )}
        </div>
    );
};
export default PostsServer;
