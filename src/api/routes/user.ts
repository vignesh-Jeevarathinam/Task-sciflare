import { Router } from "express";

const userRoutes = Router()

userRoutes.post('/login');
userRoutes.post('/singUp');

export default userRoutes;