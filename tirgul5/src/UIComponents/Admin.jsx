import { useState } from "react";
import { getUsers, saveUsers } from "../utils/storage";

export default function Admin() {

  const [users, setUsers] = useState(getUsers());

  const toggleBlock = (email) => {
    const updated = users.map(u =>
      u.email === email ? { ...u, blocked: !u.blocked } : u
    );

    setUsers(updated);
    saveUsers(updated);
  };

  return (
    <div>
      {users.map(user => (
        <div key={user.email}>
          <p>{user.name}</p>
          <p>{user.email}</p>

          <button onClick={() => toggleBlock(user.email)}>
            {user.blocked ? "Unblock" : "Block"}
          </button>
        </div>
      ))}
    </div>
  );
}