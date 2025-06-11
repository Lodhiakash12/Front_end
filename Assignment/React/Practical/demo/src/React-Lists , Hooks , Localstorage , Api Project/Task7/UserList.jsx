import React from 'react'

function UserList() {
    const users = [
        { id: 1, name: "John" },
        { id: 2, name: "Sarah" },
        { id: 3, name: "Mike" },
        { id: 4, name: "Emma" },
        { id: 5, name: "David" }
    ]
    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default UserList