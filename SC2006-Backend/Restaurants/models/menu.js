import mongoose from "mongoose";

const Dietary_Restriction = {
    Vegan: "vegan",
    Vegetarian: "vegetarian",
    Halal: "halal",
    None: "none"
  }

const MenuSchema = new mongoose.schema(
    {
        item: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: false,
        },
        ingredients: {
            type: Array,
            required: false,
        },
        dietaryRestriction: {
            type: Dietary_Restriction,
            required: true,
            default: "none",
        },
    }
)

const Menu = mongoose.model("Menu", MenuSchema);
export default Menu;
