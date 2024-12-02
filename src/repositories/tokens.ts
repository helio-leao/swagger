import crypto from "crypto";
import User from "../types/User";

interface Tokens {
  [key: string]: User;
}

const tokens: Tokens = {};

function generateToken(user: User) {
  const token = crypto.randomBytes(16).toString("hex");
  tokens[token] = user;
  return token;
}

function getPayload(token: string) {
  return tokens[token];
}

function deleteToken(token: string) {
  delete tokens[token];
}

export { generateToken, getPayload, deleteToken };
