// AuthService.js (mock version using localStorage)

const getUsers = () => {
  return JSON.parse(localStorage.getItem("users")) || [];
};

const saveUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

const register = (userData) => {
  const users = getUsers();
  const exists = users.find((u) => u.email === userData.email);
  if (exists) {
    return Promise.reject("User already exists");
  }

  const newUser = { id: Date.now(), ...userData };
  users.push(newUser);
  saveUsers(users);
  localStorage.setItem("currentUser", JSON.stringify(newUser));
  return Promise.resolve(newUser);
};

const login = ({ email, password }) => {
  const users = getUsers();
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return Promise.reject("Invalid credentials");
  }

  localStorage.setItem("currentUser", JSON.stringify(user));
  return Promise.resolve(user);
};

const logout = () => {
  localStorage.removeItem("currentUser");
  return Promise.resolve();
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};