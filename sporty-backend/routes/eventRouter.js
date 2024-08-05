// routes/eventRouter.js
import express from "express";
import { fetchEvents } from "../controllers/eventController.js";

const router = express.Router();

router.get("/", fetchEvents);

export default router;
