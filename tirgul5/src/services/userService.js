import { getUsers, saveUsers, setCurrentUser } from "../utils/storage";

export const registerUser = (user) => {
  const users = getUsers();

  const exists = users.find(u => u.email === user.email);

  if (exists) {
    return { success: false, message: "User already exists" };
  }

  users.push({
    ...user,
    blocked: false
  });

  saveUsers(users);

  return { success: true };
};

export const loginUser = (email, password) => {
  const users = getUsers();

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    return { success: false, message: "User not found" };
  }

  if (user.blocked) {
    return { success: false, message: "User is blocked" };
  }

  setCurrentUser(user);

  return { success: true, user };
};