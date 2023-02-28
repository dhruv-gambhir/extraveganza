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
import { register, login } from "./controllers/auth.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import { createPost } from "./controllers/posts.js";
import { verifyToken } from "./middleware/auth.js";
import User from "./models/User.js";
import Post from "./models/Post.js";
import { users, posts } from "./data/index.js";

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
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "public/assets");
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	},
});
const upload = multer({ storage });

/* ROUTES WITH FILES */
// upload a photo for a post
app.post("/posts", verifyToken, upload.single("picture"), createPost);

/* ROUTES */
app.use("/auth", authRoutes); // handle authentication routes
app.get("/users", userRoutes); // handle user routes
// app.use("/posts", postRoutes); // handle post routes

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
