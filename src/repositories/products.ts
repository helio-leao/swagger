import Product from "../types/Product";

let products: Product[] = [
  {
    id: "dbcc7332-a271-471e-b399-cc3a0dec8574",
    name: "Monitor 32 inches",
    category: "Electronics",
    price: 1500,
  },
  {
    id: "f9ba72f1-dfd3-49e1-9b96-d8ec996a7909",
    name: "Mouse RGB",
    category: "Computer Accessories",
    price: 300,
  },
];

function getAllProducts() {
  return products;
}

function getProductsByName(name: string) {
  const regex = new RegExp(name, "ig");
  return products.filter((p) => p.name.match(regex));
}

function getProductById(id: string) {
  return products.find((p) => p.id === id) || null;
}

function addProduct(product: Product) {
  products.push(product);
}

function updateProduct(product: Product) {
  products = products.map((p) => {
    if (p.id === product.id) {
      const updatedProduct: Product = {
        id: p.id,
        name: product.name,
        category: product.category,
        price: product.price,
      };
      return updatedProduct;
    }
    return p;
  });
}

function deleteProduct(productId: string) {
  products = products.filter((p) => p.id !== productId);
}

export {
  getAllProducts,
  getProductsByName,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
