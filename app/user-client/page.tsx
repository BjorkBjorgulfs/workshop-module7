'use client'// Specify that this is a client-side component
import React from "react";

interface User {
    id: number;
    name: string;
}

export default function Users() {
    // Declare a state for storing users with useState
    const [users, setUsers] = React.useState<User[]>([]);

    // useEffect to fetch users from the API
    React.useEffect(() => {
        // The fetch function
        async function fetchUsers() {
            const res = await fetch('https://jsonplaceholder.typicode.com/users'); // Fetch the users from the API
            const data = await res.json(); // Parse the JSON response into a JavaScript object
            setUsers(data); // Set the users state with the fetched data
        }
        fetchUsers(); // Call the fetchUsers function
    }, []);

    return (
        <div className="w-full h-screen flex flex-col gap-5 bg-yellow-300 items-center justify-center">
            <h1 className="text-2xl">Users</h1>
            <ul>
                {/* Loop through the users array and render each user's name */}
                {users.map(user => (
                    <li key={user.id} className="text-lg">- {user.name}</li>
                ))}
            </ul>
        </div>
    );
};
