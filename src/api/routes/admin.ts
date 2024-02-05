import { Router } from "express";
import { deleteUser, getUserList, updateUser } from "../../controllers/admin";

const adminRoutes = Router();

adminRoutes.get("/list", getUserList);
adminRoutes.put("/update", updateUser);
adminRoutes.delete("/delete/:user_id", deleteUser);

export default adminRoutes;
