import { checkAuthUser, logout } from "../../../utils/auth";

checkAuthUser(
  "/src/pages/auth/login/login.html",
  "/src/pages/client/home/home.html",
  "admin"
);

const btn = document.getElementById("logoutButton");

btn?.addEventListener("click", logout);