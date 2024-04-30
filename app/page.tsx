// The first one is a server component fetching data from an external API and rendering it on the page
// The second one is a client component fetching data from the same API using useEffect and useState hooks

// Open the page in a browser and you will see a list of users fetched from the API
// In the network tab you should see the list of users in the doc 

interface User {
  id: number;
  name: string;
}
 // ----- This is the server code -----
export default async function Users() {
 
  const res = await fetch('https://jsonplaceholder.typicode.com/users'); // Fetching data from an external API
  const users = await res.json(); // Parse the JSON response into a JavaScript object
              
  return (
      <div className="w-full h-screen flex flex-col gap-5 bg-yellow-300 items-center justify-center">
          <h1 className="text-2xl">Users</h1>
          <ul>
              {users.map((user: User) => 
                  <li key={user.id} className="text-lg">- {user.name}</li> 
              )}
          </ul>
      </div>
  );
};

/*

// ----- This is the client code -----
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
                {users.map(user => (
                  <li key={user.id} className="text-lg">- {user.name}</li>
              ))}
          </ul>
      </div>
  );
};

*/

