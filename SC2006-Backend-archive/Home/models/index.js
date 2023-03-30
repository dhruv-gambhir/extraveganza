// Manual data for menu

import mongoose from "mongoose";

const menuOptions = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const menu = [
  {
    _id: menuOptions[0],
    item: "Impossible Burger",
    price: 5.5,
    ingredients: ["soy protein concentrate", "coconut oil", "sunflower oil", "potato protein", "methylcellulose", "yeast extract", "salt", "gums", "water", "additives"],
    dietaryRestriction: ["Vegan", "Vegetarian", "LactoseFree", "GlutenFree"],
  },
  {
    _id: menuOptions[1],
    item: "Salady Salad",
    price: 7.5,
    ingredients: ["orzo", "cherry tomato", "red onion", "cucumbers", "feta cheese", "olive oil"],
    dietaryRestriction: ["Vegetarian", "GlutenFree"],
  },
  {
    _id: menuOptions[2],
    item: "Fries",
    price: 3.5,
    ingredients: ["potato", "salt"],
    dietaryRestriction: ["Vegan", "Vegetarian", "GlutenFree", "LactoseFree"],
  },
  {
    _id: menuOptions[3],
    item: "Ice Lemon Tea",
    price: 2.5,
    ingredients: ["lemon", "water", "sugar", "green tea"],
    dietaryRestriction: ["Vegan", "Vegetarian", "GlutenFree", "LactoseFree"],
  },
  {
    _id: menuOptions[4],
    item: "Fresh Milk",
    price: 3.5,
    ingredients: ["cow milk"],
    dietaryRestriction: ["Vegan", "Vegetarian", "GlutenFree"],
  },
]
