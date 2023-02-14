import mongoose from "mongoose";

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
    }
)

const Menu = mongoose.model("Menu", MenuSchema);
export default Menu;
