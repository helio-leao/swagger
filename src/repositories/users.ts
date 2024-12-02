import User from "../types/User";

const users: User[] = [
  {
    id: "943a6cc8-62d0-4f81-a8a2-0c2afd2bd945",
    username: "admin",
    role: "admin",
  },
  {
    id: "916a444e-9fce-492d-8e07-d006a14b2aa4",
    username: "user",
    role: "user",
  },
];

function getUserByUsername(username: string) {
  return users.find((u) => u.username === username);
}

export { getUserByUsername };
