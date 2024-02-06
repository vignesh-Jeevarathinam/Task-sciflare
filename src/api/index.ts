import { Router } from "express";

import authRoutes from "./routes/auth";
import adminRoutes from "./routes/admin";
import userRoutes from "./routes/user";

export default () => {

  const api = Router();
  api.use("/auth", authRoutes);
  api.use("/admin", adminRoutes);
  api.use("/user", userRoutes);

  return api;
};
