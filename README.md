# 🍔 Food Store

Aplicación frontend de una tienda de comida desarrollada con HTML, CSS, TypeScript y Vite. Esta aplicacion permite registrarse, iniciar sesión y explorar un catálogo de productos con carrito de compras persistente.

---

## ✨ Funcionalidades

- Registro e inicio de sesión con persistencia en `localStorage`
- Rutas protegidas según el rol del usuario
- Catálogo de productos con búsqueda por nombre y filtrado por categoría
- Carrito de compras: agregar, modificar cantidad, eliminar y ver el total
- Diseño responsive

---

## 🛠️ Tecnologías

- HTML5
- CSS3
- TypeScript
- Vite

---

## ▶️ Cómo ejecutarlo

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd proteger_rutas
```

### 2. Instalar dependencias

```bash
pnpm install
```

> Si no tenés pnpm instalado: `npm install -g pnpm`

### 3. Iniciar el servidor de desarrollo

```bash
pnpm dev
```

La app estará disponible en `http://localhost:5173`

---

## 📁 Estructura del proyecto

```
src/
├── pages/
│   ├── auth/
│   │   ├── login/        ← Inicio de sesión
│   │   └── registro/     ← Registro de usuario
│   ├── client/home/      ← Página base del cliente
│   ├── admin/home/       ← Página base del admin
│   └── store/
│       ├── home/         ← Catálogo de productos
│       └── cart/         ← Carrito de compras
├── data/
│   └── data.ts           ← Productos y categorías
├── types/
│   ├── product.ts        ← Interfaces Product y CartItem
│   ├── categoria.ts      ← Interface Icategoria
│   └── IUser.ts          ← Interface de usuario
└── utils/
    ├── auth.ts           ← Lógica de autenticación
    ├── localStorage.ts   ← Helpers de localStorage
    └── navigate.ts       ← Navegación
```

---

## 🚀 Cómo probar la app

1. Ir a `http://localhost:5173`
2. Registrarse con email y contraseña
3. Iniciar sesión — redirige al catálogo automáticamente
4. Explorar productos, usar el buscador y los filtros de categoría
5. Agregar productos al carrito y ver el total
