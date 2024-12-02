import { Router } from "express";
import crypto from "crypto";
import {
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  addProduct,
  getProductsByName,
} from "../repositories/products";
import Product from "../types/Product";
import { authRole, authToken } from "../middlewares/auth";

const router = Router();

router.get("/", (req, res) => {
  const { name } = req.query;

  if (typeof name === "string") {
    res.json(getProductsByName(name));
  } else {
    res.json(getAllProducts());
  }
});

router.get("/:id", (req, res) => {
  res.json(getProductById(req.params.id));
});

router.post("/", authToken, authRole(["admin"]), (req, res) => {
  const newProduct: Product = {
    id: crypto.randomUUID(),
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
  };

  addProduct(newProduct);
  res.status(201).json(newProduct);
});

router.patch("/:id", authToken, authRole(["admin"]), (req, res) => {
  const product = getProductById(req.params.id);

  if (!product) {
    res.sendStatus(404);
    return;
  }

  const { name, category, price } = req.body;

  if (name) {
    product.name = name;
  }
  if (category) {
    product.category = category;
  }
  if (price) {
    product.price = price;
  }

  updateProduct(product);
  res.json(product);
});

router.delete("/:id", authToken, authRole(["admin"]), (req, res) => {
  const product = getProductById(req.params.id);

  if (!product) {
    res.sendStatus(404);
    return;
  }

  deleteProduct(product.id);
  res.sendStatus(204);
});

export default router;
