import type { IUser } from "../../../types/IUser";
import { getUsers, saveUser } from "../../../utils/localStorage";
import { navigate } from "../../../utils/navigate";

const form = document.getElementById("form") as HTMLFormElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailInput = document.getElementById("email") as HTMLInputElement;
  const passwordInput = document.getElementById("password") as HTMLInputElement;

  const users: IUser[] = getUsers();

  const userFound = users.find(
    (u) => u.email === emailInput.value && u.password === passwordInput.value
  );

  if (!userFound) {
    alert("Email o contraseña incorrectos");
    return;
  }

  saveUser(userFound);

  if (userFound.role === "admin") {
    navigate("/src/pages/admin/home/home.html");
  } else {
    navigate("/src/pages/client/home/home.html");
  }
});