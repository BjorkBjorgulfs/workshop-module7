

interface User {
    id: number;
    name: string;
}

export default async function Users() {
   
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
                
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


