import { useState } from "react";
import { getCurrentUser, getUsers, saveUsers } from "../utils/storage";

export default function Profile() {

  const current = getCurrentUser();
  const [user, setUser] = useState(current);

  const update = () => {
    let users = getUsers();

    users = users.map(u =>
      u.email === user.email ? user : u
    );

    saveUsers(users);
    sessionStorage.setItem("currentUser", JSON.stringify(user));

    alert("Updated!");
  };

  return (
    <div>
      <input
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />

      <input
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />

      <button onClick={update}>Update</button>
    </div>
  );
}