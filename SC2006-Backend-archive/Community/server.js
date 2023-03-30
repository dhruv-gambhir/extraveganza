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

/* FILE STORAGE */
// const storage = multer.diskStorage({
// 	destination: function (req, file, cb) {
// 		cb(null, "public/assets");
// 	},
// 	filename: function (req, file, cb) {
// 		cb(null, file.originalname);
// 	},
// });
// const upload = multer({ storage });

/* ROUTES WITH FILES */
// upload a photo for a post
// app.post("/api/posts", verifyToken, upload.single("picture"), createPost);

/* ROUTES */
app.use("/api/auth", authRoutes); // handle authentication routes
app.get("/api/users", userRoutes); // handle user routes
// app.use("/posts", postRoutes); // handle post routes

// Restaraurants
app.use("/api/restaurants", restaurant_router);

/* MONGOOSE SETUP */
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
