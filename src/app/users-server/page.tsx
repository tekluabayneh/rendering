import Loading from "./loading";

type Users = {
    email: string;
    id: number;
    name: string;
    username: string;
    phone: string;
};

const UsersServer = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay

    const res = await fetch("https://jsonplaceholder.typicode.com/user");
    if (!res.ok) {
        console.warn("Failed to fetch users");
        return
    }
    const users: Users[] = await res.json();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Users List</h1>
            {users.length > 0 ? (
                <ul className="space-y-4">
                    {(users.map((user: Users) => (
                        <li
                            key={user.id}
                            className="p-4 shadow-md rounded-lg text-gray-600 bg-white"
                        >
                            <h2 className="text-xl font-bold">{user.name}</h2>
                            <p>Username: {user.username}</p>
                            <p>Email: {user.email}</p>
                            <p>Phone: {user.phone}</p>
                        </li>
                    )))}
                </ul>
            ) : (
                <div>Error fetching users.</div>
            )}
        </div>
    );
}


export default UsersServer;
