import express from 'express';
import mongoose from 'mongoose';
import router from './routes/restaurant-route.js';

// Copied from community backend
import bodyParser from "body-parser";
import cors from "cors";
// import dotenv from "dotenv";
// import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";

// Copied from backend
const app = express();
app.use(express.json()); // parse incoming requests with JSON payloads
app.use(helmet()); // set various HTTP headers to improve security
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" })); // set CORS policy
app.use(morgan("common")); // HTTP request logger middleware
// app.use(bodyParser.json({ limit: "10mb", extended: true })); // parse incoming requests with JSON payloads with a size limit
// app.use(bodyParser.urlencoded({ limit: "10mb", extended: true })); // parse incoming requests with URL-encoded payloads with a size limit
app.use(cors()); // enable CORS for all routes


/*
* Middleware
*/
app.use("/api/restaurants",router);


/*
* Connect to MongoDB
*/
mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.nuzoaig.mongodb.net/?retryWrites=true&w=majority"
    ).then(() => app.listen(2007))
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));
