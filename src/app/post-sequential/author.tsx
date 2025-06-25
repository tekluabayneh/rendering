import { warn } from "console";

type Author = {
    id: number;
    name: string;
}

const Author = async ({ userId }: { userId: number }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!res.ok) {
        console.warn("Failed to fetch author");
        return;
    }

    const authr: Author = await res.json()
    return (
        <div className="p-4 shadow-md rounded-lg text-gray-600 bg-white">
            <h2 className="text-xl font-bold">{authr.name}</h2>
            <p>ID: {authr.id}</p>
        </div>
    )
}
export default Author;
