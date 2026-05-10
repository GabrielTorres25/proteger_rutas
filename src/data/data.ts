import type { Product } from "../types/product";
import type { Icategoria } from "../types/categoria";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Pizza Margherita",
    price: 1500,
    category: "Pizzas",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
    description: "Clasica pizza con tomate, mozzarella y albahaca.",
  },
  {
    id: 2,
    name: "Pizza Napolitana",
    price: 1700,
    category: "Pizzas",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80",
    description: "Pizza con tomate, mozzarella, anchoas y aceitunas.",
  },
  {
    id: 3,
    name: "Hamburguesa Clasica",
    price: 1800,
    category: "Hamburguesas",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
    description: "Carne, lechuga, tomate, cebolla y mostaza.",
  },
  {
    id: 4,
    name: "Hamburguesa BBQ",
    price: 2100,
    category: "Hamburguesas",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&q=80",
    description: "Carne con salsa BBQ, cebolla caramelizada y queso cheddar.",
  },
  {
    id: 5,
    name: "Sushi Variado (8 piezas)",
    price: 2500,
    category: "Sushi",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&q=80",
    description: "Seleccion de rolls variados con salmon y palta.",
  },
  {
    id: 6,
    name: "Sushi Salmon Roll",
    price: 2200,
    category: "Sushi",
    image: "https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=400&q=80",
    description: "Roll de salmon fresco con queso crema y pepino.",
  },
  {
    id: 7,
    name: "Ensalada Cesar",
    price: 1200,
    category: "Ensaladas",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&q=80",
    description: "Lechuga romana, crutones, parmesano y aderezo Cesar.",
  },
  {
    id: 8,
    name: "Ensalada Mediterranea",
    price: 1300,
    category: "Ensaladas",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80",
    description: "Mix de verdes, tomate cherry, aceitunas y queso feta.",
  },
  {
    id: 9,
    name: "Lomo Saltado",
    price: 2800,
    category: "Platos principales",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&q=80",
    description: "Clasico plato peruano con lomo, tomate y papas fritas.",
  },
  {
    id: 10,
    name: "Pasta Carbonara",
    price: 1900,
    category: "Platos principales",
    image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=400&q=80",
    description: "Pasta con huevo, panceta, parmesano y pimienta negra.",
  },
  {
    id: 11,
    name: "Brownie con helado",
    price: 900,
    category: "Postres",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80",
    description: "Brownie de chocolate tibio con helado de vainilla.",
  },
  {
    id: 12,
    name: "Tiramisu",
    price: 1100,
    category: "Postres",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80",
    description: "Clasico postre italiano con mascarpone y cafe.",
  },
];

export const getCategories = (): Icategoria[] => {
  const unique = [...new Set(PRODUCTS.map((p) => p.category))];
  return unique.map((name, index) => ({ id: index + 1, name }));
};
