import mongoose from 'mongoose';
import Menu from './menu.js';

const RestaurantSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    x: {
        type: Number,
        required: true
    },
    y: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    vegan: {
        type: Number,
        required: false
    },
    vegetarian: {
        type: Number,
        required: false
    },
    glutenFree: {
        type: Number,
        required: false
    },
    lactoseFree: {
        type: Number,
        required: false
    },
    rating: {
        type: Number,
        required: false
    },
    menu: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu'
    }]
});

/**
 * Model of a restaurant from restaurant records
 * @typedef Restaurant
 * @property {number} id.required - id of the restaurant
 * @property {number} x.required - x coordinate of the restaurant
 * @property {number} y.required - y coordinate of the restaurant
 * @property {string} name.required - name of the restaurant
 * @property {string} address.required - address of the restaurant
 * @property {number} vegan.required - vegan options of the restaurant
 * @property {number} vegetarian.required - vegetarian options of the restaurant
 * @property {number} glutenFree.required - gluten free options of the restaurant
 * @property {number} lactoseFree.required - lactose free options of the restaurant
 */
const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
export default Restaurant;


