import express from "express";
import { getAdminDashboard } from "./dashboard.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { roleMiddleware } from "../../middlewares/role.middleware.js";

const router = express.Router();

router.get("/admin",authMiddleware,roleMiddleware("admin"),getAdminDashboard);

export default router;