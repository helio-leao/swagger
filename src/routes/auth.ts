import { Router } from "express";
import { getUserByUsername } from "../repositories/users";
import { deleteToken, generateToken } from "../repositories/tokens";

const router = Router();

router.post("/login", (req, res) => {
  const user = getUserByUsername(req.body.username);

  if (!user) {
    res.sendStatus(404);
    return;
  }
  const token = generateToken(user);
  res.json({ token });
});

router.post("/logout", (req, res) => {
  deleteToken(req.body.token);
  res.sendStatus(204);
});

export default router;
