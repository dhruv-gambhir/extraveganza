import mongoose from "mongoose";

/**
 * Enumeration of Dietary Restriction: Vegan, Vegetarian, GlutenFree and LactoseFree
 */
const Dietary_Restriction = {
    Vegan: "vegan",
    Vegetarian: "vegetarian",
    GlutenFree: "glutenFree",
    LactoseFree: "lactoseFree",
    None: "none"
  }

  /**
   * Schema of menu options of a restaurant
   */
const MenuSchema = new mongoose.Schema(
    {
        menuItemID: {
            type: Number,
            required: true,
        },
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
            type: String,
            enum: Object.values(Dietary_Restriction),
            required: true,
            default: "none",
        },
    }
)

const Menu = mongoose.model("Menu", MenuSchema);
export default Menu;
