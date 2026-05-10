import type { CartItem } from "../../../types/product";
import { checkAuthUser, logout } from "../../../utils/auth";

// Protección de ruta
checkAuthUser(
  "/src/pages/auth/login/login.html",
  "/src/pages/admin/home/home.html",
  "client"
);

document.getElementById("logoutButton")?.addEventListener("click", logout);

// local storage
const CART_KEY = "cartItems";

const getCart = (): CartItem[] => {
  return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
};

const saveCart = (cart: CartItem[]): void => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

// calculo total del carrito
const calcTotal = (cart: CartItem[]): number => {
  return cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
};

const formatPrice = (n: number): string =>
  "$" + n.toLocaleString("es-AR");

// variables DOM
const cartItems = document.getElementById("cartItems") as HTMLDivElement;
const cartContent = document.getElementById("cartContent") as HTMLDivElement;
const emptyCart = document.getElementById("emptyCart") as HTMLDivElement;
const subtotalEl = document.getElementById("subtotal") as HTMLSpanElement;
const totalEl = document.getElementById("total") as HTMLSpanElement;

const renderCart = (): void => {
  const cart = getCart();

  if (cart.length === 0) {
    emptyCart.style.display = "flex";
    cartContent.style.display = "none";
    return;
  }

  emptyCart.style.display = "none";
  cartContent.style.display = "flex";
  cartItems.innerHTML = "";

  cart.forEach((item) => {
    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <img class="cart-item__img" src="${item.product.image}" alt="${item.product.name}" />
      <div class="cart-item__info">
        <h3 class="cart-item__name">${item.product.name}</h3>
        <p class="cart-item__category">${item.product.category}</p>
        <p class="cart-item__unit-price">${formatPrice(item.product.price)} c/u</p>
      </div>
      <div class="cart-item__controls">
        <button class="qty-btn" data-id="${item.product.id}" data-action="dec">−</button>
        <span class="cart-item__qty">${item.quantity}</span>
        <button class="qty-btn" data-id="${item.product.id}" data-action="inc">+</button>
      </div>
      <div class="cart-item__subtotal">
        ${formatPrice(item.product.price * item.quantity)}
      </div>
      <button class="btn-remove" data-id="${item.product.id}" title="Eliminar">✕</button>
    `;
    cartItems.appendChild(row);
  });

  // Botones +/-
  document.querySelectorAll(".qty-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number((btn as HTMLButtonElement).dataset.id);
      const action = (btn as HTMLButtonElement).dataset.action;
      changeQty(id, action === "inc" ? 1 : -1);
    });
  });

  // Botones eliminar
  document.querySelectorAll(".btn-remove").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number((btn as HTMLButtonElement).dataset.id);
      removeItem(id);
    });
  });

  // Totales
  const total = calcTotal(cart);
  subtotalEl.textContent = formatPrice(total);
  totalEl.textContent = formatPrice(total);
};

const changeQty = (id: number, delta: number): void => {
  const cart = getCart();
  const item = cart.find((i) => i.product.id === id);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeItem(id);
    return;
  }

  saveCart(cart);
  renderCart();
};

const removeItem = (id: number): void => {
  const cart = getCart().filter((i) => i.product.id !== id);
  saveCart(cart);
  renderCart();
};

// Vaciar carrito 
document.getElementById("clearCart")?.addEventListener("click", () => {
  saveCart([]);
  renderCart();
});

renderCart();
