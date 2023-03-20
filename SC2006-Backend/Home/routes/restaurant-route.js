import express from 'express';
import { addRestaurant, getRestaurants, getRestaurantMenu } from '../controllers/restaurant-controller.js';

/*
* Router
*/
const router = express.Router();

/*
* Routes
*/
router.get('/',getRestaurants);
router.post('/add', addRestaurant);
router.get('/', getRestaurantMenu);
router.put('restrictions/update',)


export default router;



