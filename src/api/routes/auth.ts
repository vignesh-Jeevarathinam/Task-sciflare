import { Router } from "express";
import { authControllers } from "../../controllers";
const authRoutes = Router()

authRoutes.post('/login', authControllers.login);
authRoutes.post('/singUp');

export default authRoutes;