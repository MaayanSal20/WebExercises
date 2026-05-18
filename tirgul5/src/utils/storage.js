export const getUsers = () => {
  return JSON.parse(sessionStorage.getItem("users")) || [];
};

export const saveUsers = (users) => {
  sessionStorage.setItem("users", JSON.stringify(users));
};

export const setCurrentUser = (user) => {
  sessionStorage.setItem("currentUser", JSON.stringify(user));
};

export const getCurrentUser = () => {
  return JSON.parse(sessionStorage.getItem("currentUser"));
};