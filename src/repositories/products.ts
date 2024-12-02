import Product from "../types/Product";

let products: Product[] = [
  {
    id: "dbcc7332-a271-471e-b399-cc3a0dec8574",
    name: 'Monitor 32"',
    price: 1500,
  },
  {
    id: "f9ba72f1-dfd3-49e1-9b96-d8ec996a7909",
    name: "Mouse RGB",
    price: 300,
  },
];

export function getAllProducts() {
  return products;
}

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}

export function addProduct(product: Product) {
  products.push(product);
}

export function updateProduct(product: Product) {
  products = products.map((p) => {
    if (p.id === product.id) {
      return {
        ...p,
        name: product.name,
        price: product.price,
      };
    }
    return p;
  });
}

// ISSUE: after deleting a product, it still appears on get routes
export function deleteProduct(productId: string) {
  products = products.filter((p) => p.id !== productId);
}
