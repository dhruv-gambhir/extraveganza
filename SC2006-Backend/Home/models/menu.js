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
   * @typedef Menu
   * @property {string} item.required - name of the menu item
   * @property {number} price.required - price of the menu item
   * @property {Array} ingredients.required - ingredients of the menu item
   * @property {Dietary_Restriction} dietaryRestriction.required - dietary restriction of the menu item
   * @property {string} dietaryRestriction.default - none
   * @property {string} dietaryRestriction.enum - Vegan, Vegetarian, GlutenFree, LactoseFree, None
   */
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
