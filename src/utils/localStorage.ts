/*import type { IUser } from "../types/IUser";

export const saveUser = (user: IUser) => {
  const parseUser = JSON.stringify(user);
  localStorage.setItem("userData", parseUser);
};
export const getUSer = () => {
  return localStorage.getItem("userData");
};
export const removeUser = () => {
  localStorage.removeItem("userData");
};*/
import type { IUser } from "../types/IUser";

export const saveUser = (user: IUser): void => {
  localStorage.setItem("userData", JSON.stringify(user));
};

export const getUser = (): IUser | null => {
  const data = localStorage.getItem("userData");

  if (!data) return null;

  return JSON.parse(data);
};

export const removeUser = (): void => {
  localStorage.removeItem("userData");
};

export const getUsers = (): IUser[] => {
  return JSON.parse(localStorage.getItem("users") || "[]");
};

export const saveUsers = (users: IUser[]): void => {
  localStorage.setItem("users", JSON.stringify(users));
};
