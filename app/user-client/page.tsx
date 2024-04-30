'use client'
import React from "react";

interface User {
    id: number;
    name: string;
}

export default function Users() {
    const [users, setUsers] = React.useState<User[]>([]);

    React.useEffect(() => {
        async function fetchUsers() {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            setUsers(data);
        }

        fetchUsers();
    }, []);

    return (
        <div className="w-full h-screen flex flex-col gap-5 bg-yellow-300 items-center justify-center">
            <h1 className="text-2xl">Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id} className="text-lg">- {user.name}</li>
                ))}
            </ul>
        </div>
    );
};
