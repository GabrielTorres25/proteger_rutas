import type { IUser } from "../../../types/IUser";
import { getUsers, saveUsers } from "../../../utils/localStorage";


const form = document.getElementById("registerForm") as HTMLFormElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailInput = document.getElementById("email") as HTMLInputElement;
  const passwordInput = document.getElementById("password") as HTMLInputElement;

  const newUser: IUser = {
    email: emailInput.value,
    password: passwordInput.value,
    loggedIn: false,
    role: "client"
  };

  const users = getUsers();
  users.push(newUser);
  saveUsers(users);

  alert("Usuario registrado");
});