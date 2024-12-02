import { Request, Response, NextFunction } from "express";
import { getPayload } from "../repositories/tokens";

export function authToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.sendStatus(401);
    return;
  }

  const user = getPayload(token);

  if (!user) {
    res.sendStatus(401);
    return;
  }

  req.user = user;
  next();
}

export function authRole(roles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;

    if (!roles.includes(user.role)) {
      res.sendStatus(403);
      return;
    }

    next();
  };
}
