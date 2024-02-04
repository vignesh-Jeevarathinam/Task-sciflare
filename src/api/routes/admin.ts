import { Router } from "express";

const adminRoutes = Router()

adminRoutes.post('/login');
adminRoutes.post('/signUp');

export default adminRoutes;