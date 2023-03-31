import express from 'express';
// import { addRestaurant, getRestaurants, getRestaurantMenu } from '../controllers/restaurants.js';
import { addRestaurant, getRestaurants } from '../controllers/restaurants.js';

/** 
 * Router
*/
const restaurant_router = express.Router();

/**
* Routes
*/

/**
 * Get restaurants list
 */
restaurant_router.get('/', getRestaurants);

/**
 * Write to add restaurant
 */
restaurant_router.post('/add', addRestaurant);

/**
 * Get restaurant menu
 */
// restaurant_router.get('/', getRestaurantMenu);

/**
 * Update dietary restrictions
 */
restaurant_router.put('restrictions/update',);


export default restaurant_router;



