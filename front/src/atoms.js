import { atom } from "recoil";

export const passwordAtom = atom({
  key: "password",
  default: 1121,
});

export const userNameAtom = atom({
  key: "userName",
  default: "강서현",
});
