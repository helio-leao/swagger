import { Router } from "express";
import crypto from "crypto";
import {
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  addProduct,
} from "../repositories/products";
import Product from "../types/Product";
import { authRole, authToken } from "../middlewares/auth";

const router = Router();

// NOTE: add name query
router.get("/", (_req, res) => {
  res.json(getAllProducts());
});

router.get("/:id", (req, res) => {
  res.json(getProductById(req.params.id));
});

router.post("/", authToken, authRole(["admin"]), (req, res) => {
  const newProduct: Product = {
    id: crypto.randomUUID(),
    name: req.body.name,
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

  if (req.body.name) {
    product.name = req.body.name;
  }
  if (req.body.price) {
    product.price = req.body.price;
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
