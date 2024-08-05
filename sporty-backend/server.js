//imports
import express from "express";
import "express-async-error";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import cors from "cors";

//security packages
import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
//files import
import connectDB from "./config/db.js";
//Routes import
import authRoutes from "./routes/authRouter.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import eventRouter from "./routes/eventRouter.js";
import cookieParser from "cookie-parser";

//DOT ENV config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middleWare
app.use(cookieParser());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/events", eventRouter);

//validating error middle ware
app.use(errorMiddleware);

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(
    `Node server running in ${process.env.DEV_MODE} MODE: http://localhost:${PORT} `
      .bgRed.blue
  );
});
