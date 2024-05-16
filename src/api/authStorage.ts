import { createToken } from "../utils";

interface UserData {
  username: string;
  password: string;
  profileImage?: string;
  keepLogin?: boolean;
  token?: string;
}

export const startUserStorage = () => {
  localStorage.setItem("users", JSON.stringify([]));
};

export const getUsers = () => {
  const fetchUsers = localStorage.getItem("users");

  if (!fetchUsers) {
    startUserStorage();
    return [];
  }

  const users = JSON.parse(fetchUsers as string);
  return users;
};

export const getUser = ({ username }: { username: string }) => {
  const users = getUsers();
  const user = users.find((user: UserData) => user.username === username);
  return user;
};

export const setUser = ({ username, password, profileImage }: UserData) => {
  setToken({ username, password, profileImage });
};

export const setToken = ({
  username,
  password,
  profileImage,
  keepLogin,
}: UserData) => {
  const users = getUsers();
  const userExists = checkIfUserExists({ username });
  if (userExists) {
    const usersUpdated = users.filter((user: UserData) => {
      if (user.username === username) {
        user.token = createToken();
        user.keepLogin = keepLogin;
        return user;
      }
      return user;
    });
    localStorage.setItem("users", JSON.stringify(usersUpdated));
    return;
  }
  const userData = {
    username,
    password,
    profileImage,
    keepLogin,
    token: createToken(),
  };
  users.push(userData);
  localStorage.setItem("users", JSON.stringify(users));
};

export const isAuthenticated = () => {
  const users = getUsers();
  const user = users.find((user: UserData) => user.token);
  return user;
};

export const destroyToken = ({ username }: { username: string }) => {
  const users = getUsers();
  const usersUpdated = users.filter((user: UserData) => {
    if (user.username === username) {
      delete user.token;
      return user;
    }
    return user;
  });
  localStorage.setItem("users", JSON.stringify(usersUpdated));
};

export const checkIfUserExists = ({ username }: { username: string }) => {
  const users = getUsers();
  const userExists = users.some((user: UserData) => user.username === username);
  return userExists;
};

export const checkUserRemember = () => {
  const users = getUsers();
  const user = users.find((user: UserData) => user.keepLogin);
  return user;
};
