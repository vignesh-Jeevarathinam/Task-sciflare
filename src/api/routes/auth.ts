import { Router } from "express";
import { authControllers } from "../../controllers";
const authRoutes = Router()

authRoutes.post('/signUp',authControllers.signUp);
authRoutes.post('/login', authControllers.login);

export default authRoutes;