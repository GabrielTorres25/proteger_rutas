import { getUser } from "./utils/localStorage";

const user = getUser();
const path = window.location.pathname;

if (!user) {
  if (path.includes("/admin/") || path.includes("/client/")) {
    window.location.href = "/src/pages/auth/login/login.html";
  }
} else {
  if (user.role === "client" && path.includes("/admin/")) {
    window.location.href = "/src/pages/client/home/home.html";
  }

  if (user.role === "admin" && path.includes("/client/")) {
    window.location.href = "/src/pages/admin/home/home.html";
  }
}