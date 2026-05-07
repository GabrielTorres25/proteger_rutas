import type { IUser } from "../types/IUser";
import type { Rol } from "../types/Rol";
import { getUser, removeUser } from "./localStorage";
import { navigate } from "./navigate";

export const checkAuthUser = (
  redireccion1: string,
  redireccion2: string,
  rol: Rol
) => {

console.log("comienzo de checkeo");

const user = getUser();

 if (!user) {
    navigate(redireccion1);
    return;
  }

  const parseUser: IUser = user;
  if (parseUser.role !== rol) {
    navigate(redireccion2);
    return;
  }
};

export const logout = () => {
  removeUser();
  navigate("/src/pages/auth/login/login.html");
};