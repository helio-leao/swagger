import express from "express";
import authRouter from "./routes/auth";
import productRouter from "./routes/products";

const app = express();
app.use(express.json());

app.use("/auth", authRouter);
app.use("/products", productRouter);

app.all("*", (_req, res) => {
  res.sendStatus(404);
});

app.listen(3000, () => console.log("Server running..."));
