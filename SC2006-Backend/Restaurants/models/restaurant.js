import mongoose from "mongoose";
import Menu from "./menu";

const RestaurantSchema = new mongoose.schema(
    {
        id: {
            type: Number,
        },
        name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        latitude: {
            type: Number,
        },
        longtitude: {
            type: Number,
        },
        vegan: {
            type: Number,
        },
        vegetarian: {
            type: Number,
        },
        glutenFree: {
            type: Number,
        },
        lactoseFree: {
            type: Number,
        },
        rating: {
            type: Number,
            required: false,
        },
        menu: Menu,
    }
)

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
export default Restaurant;
