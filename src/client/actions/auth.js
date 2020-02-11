export const logIn = (username, password) => ({
  type: "LOG_IN",
  credentials: {
    username,
    password
  }
});

export const logOut = () => ({
  type: "LOG_OUT"
});