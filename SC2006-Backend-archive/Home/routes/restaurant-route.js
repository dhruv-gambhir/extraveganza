import express from 'express';
import { addRestaurant, getRestaurants, getRestaurantMenu } from '../controllers/restaurant-controller.js';

/** 
 * Router
*/
const router = express.Router();

/**
* Routes
*/

/**
 * Get restaurants list
 */
router.get('/', getRestaurants);

/**
 * Write to add restaurant
 */
router.post('/add', addRestaurant);

/**
 * Get restaurant menu
 */
router.get('/', getRestaurantMenu);

/**
 * Update dietary restrictions
 */
router.put('restrictions/update',);


export default router;



