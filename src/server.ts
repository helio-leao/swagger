import express from "express";
import authRouter from "./routes/auth";
import productRouter from "./routes/products";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/auth", authRouter);
app.use("/products", productRouter);

app.get("/api-docs.json", (_req, res) => {
  res.json(swaggerDocument);
});

app.all("*", (_req, res) => {
  res.sendStatus(404);
});

app.listen(3000, () => console.log("Server running..."));
