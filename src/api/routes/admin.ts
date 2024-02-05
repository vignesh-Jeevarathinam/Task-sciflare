import { Router } from "express";

const adminRoutes = Router()

adminRoutes.post('/list');
adminRoutes.post('/update');
adminRoutes.post('/delete');


export default adminRoutes;