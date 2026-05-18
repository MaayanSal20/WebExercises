import { useState } from "react";
import { registerUser } from "../services/userService";

export default function Register() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleRegister = () => {
    const result = registerUser(form);

    if (!result.success) {
      alert(result.message);
      return;
    }

    alert("User registered!");
  };

  return (
    <div>
      <input placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input placeholder="Password"
        type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}