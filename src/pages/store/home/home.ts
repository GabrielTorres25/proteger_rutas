import { PRODUCTS, getCategories } from "../../../data/data";
import type { Product } from "../../../types/product";
import type { CartItem } from "../../../types/product";
import { checkAuthUser, logout } from "../../../utils/auth";


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

const addToCart = (product: Product): void => {
  const cart = getCart();
  const existing = cart.find((item) => item.product.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ product, quantity: 1 });
  }

  saveCart(cart);
  updateCartBadge();
  showToast();
};


let activeCategory = "all";
let searchQuery = "";

// lista de categorias
const categoryList = document.getElementById("categoryList") as HTMLUListElement;

const renderCategories = (): void => {
  const categories = getCategories();

  categories.forEach((cat) => {
    const li = document.createElement("li");
    li.className = "category-item";
    li.textContent = cat.name;
    li.dataset.category = cat.name;
    li.addEventListener("click", () => onCategoryClick(cat.name, li));
    categoryList.appendChild(li);
  });
};

const onCategoryClick = (category: string, el: HTMLLIElement): void => {
  document.querySelectorAll(".category-item").forEach((item) =>
    item.classList.remove("category-item--active")
  );
  el.classList.add("category-item--active");
  activeCategory = category;
  renderProducts();
};

// Primera opcion "Todas las categorias"
const allItem = categoryList.querySelector("[data-category='all']") as HTMLLIElement;
allItem?.addEventListener("click", () => {
  document.querySelectorAll(".category-item").forEach((item) =>
    item.classList.remove("category-item--active")
  );
  allItem.classList.add("category-item--active");
  activeCategory = "all";
  renderProducts();
});

// dom d productos
const productGrid = document.getElementById("productGrid") as HTMLDivElement;
const emptyState = document.getElementById("emptyState") as HTMLDivElement;

const getFilteredProducts = (): Product[] => {
  return PRODUCTS.filter((p) => {
    const matchCategory = activeCategory === "all" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });
};

const renderProducts = (): void => {
  const filtered = getFilteredProducts();
  productGrid.innerHTML = "";

  if (filtered.length === 0) {
    emptyState.style.display = "flex";
    return;
  }

  emptyState.style.display = "none";

  filtered.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img class="product-card__img" src="${product.image}" alt="${product.name}" />
      <div class="product-card__body">
        <span class="product-card__category">${product.category}</span>
        <h3 class="product-card__name">${product.name}</h3>
        <p class="product-card__desc">${product.description}</p>
        <div class="product-card__footer">
          <span class="product-card__price">$${product.price.toLocaleString("es-AR")}</span>
          <button class="btn btn--add" data-id="${product.id}">+ Agregar</button>
        </div>
      </div>
    `;

    card.querySelector(".btn--add")?.addEventListener("click", () => {
      addToCart(product);
    });

    productGrid.appendChild(card);
  });
};

// busqueda
const searchInput = document.getElementById("searchInput") as HTMLInputElement;
searchInput.addEventListener("input", () => {
  searchQuery = searchInput.value;
  renderProducts();
});

// carrito 
const updateCartBadge = (): void => {
  const cart = getCart();
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById("cartCount") as HTMLSpanElement;
  badge.textContent = String(total);
  badge.style.display = total > 0 ? "flex" : "none";
};


const showToast = (): void => {
  const toast = document.getElementById("toast") as HTMLDivElement;
  toast.classList.add("toast--visible");
  setTimeout(() => toast.classList.remove("toast--visible"), 2000);
};


renderCategories();
renderProducts();
updateCartBadge();
