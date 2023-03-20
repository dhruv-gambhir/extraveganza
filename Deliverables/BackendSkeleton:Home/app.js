import express from 'express';
import mongoose from 'mongoose';
import router from './routes/restaurant-route.js';
const app = express();

/*
* Middleware
*/
app.use(express.json());
app.use("/api/restaurants",router);


/*
* Connect to MongoDB
*/
mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.nuzoaig.mongodb.net/?retryWrites=true&w=majority"
    ).then(() => app.listen(3000))
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));
