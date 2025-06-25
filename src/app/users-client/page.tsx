"use client";
import { useState, useEffect } from "react";

type User ={
  id: number;
  name: string;
	username: string;
  email: string;
  phone: string;
};

const UsersClient = () => {
 const [users, setUsers] = useState<User[]>([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState<string | null>(null);


useEffect(() => {

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: User[] = await response.json();
    setUsers(data);
  } catch (error) {
    setError(error instanceof Error ? error.message : "An unknown error occurred");
  } finally {
    setLoading(false);
  } }

fetchUsers();
},[])

if (loading) {
  return <div>Loading...</div>;
	}

return (
	<div>
		<h1>Users List</h1>
		{error && <div>Error: {error}</div>}
    {users.length > 0 ? (
      <ul>
	{users.map((user) => (
	<li key={user.id} 
	className="p-4 showdow-md rounded-lg  text-gray-600 bg-white">
		<h2 className="text-xl font-bold">{user.name}</h2>
		<p>Username: {user.username}</p>
		<p>Email: {user.email}</p>
		<p>Phone: {user.phone}</p>
	</li>
	))}
      </ul>
    ) : (
      <div>No users found.</div>
    )}
</div>
	)

}
export default UsersClient;
