import mongoose from "mongoose";
import Menu from "./menu";

//TODO: use from frontend
const Dietary_Restriction = {
    Vegan: "vegan",
    Vegetarian: "vegetarian",
    Halal: "halal",
    None: "none"
}

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
        distance: {
            type: Number,
            required: false,
        },
        rating: {
            type: Number,
            required: false,
        },
        dietaryRestriction: {
            type: Dietary_Restriction,
            required: true,
            default: "none",
        },
        menu: Menu,
    }
)

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
export default Restaurant;
