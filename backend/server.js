import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import restaurant_router from "./routes/restaurant-route.js";
import { createPost } from "./controllers/posts.js";
import { verifyToken } from "./middleware/auth.js";
import router from "./routes/restaurant-route.js";

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const app = express();
app.use(express.json()); // parse incoming requests with JSON payloads
app.use(helmet()); // set various HTTP headers to improve security
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" })); // set CORS policy
app.use(morgan("common")); // HTTP request logger middleware
app.use(bodyParser.json({ limit: "10mb", extended: true })); // parse incoming requests with JSON payloads with a size limit
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true })); // parse incoming requests with URL-encoded payloads with a size limit
app.use(cors()); // enable CORS for all routes
app.use("/assets", express.static(path.join(__dirname, "public/assets"))); // serve static files

// API for user authentication
app.use("/api/auth", authRoutes); // handle authentication routes
app.get("/api/users", userRoutes); // handle user routes
app.use("/posts", postRoutes); // handle post routes

// API for restaurants data
app.use("/api/restaurants", restaurant_router);

// Mongoose setup
const PORT = process.env.PORT || 20066;
mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
	})
	.catch((error) => console.log(`${error} did not connect`));
