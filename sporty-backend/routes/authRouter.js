import express from "express";
import {
  getUserController,
  loginController,
  logoutController,
  refreshToken,
  registerController,
} from "../controllers/authController.js";
import { isAuthorized } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//REGISTER || POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

//LOGOUT || GET
router.get("/logout", isAuthorized, logoutController);

//Get user || GET
router.get("/getuser", isAuthorized, getUserController);

router.post("/refresh-token", refreshToken);

export default router;
