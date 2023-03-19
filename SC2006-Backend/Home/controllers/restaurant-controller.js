import Restaurant from "../models/restaurant.js";

export const getRestaurants = async (req, res, next) => {
    let restaurants;
    try {
        restaurants = await Restaurant.find();
    } catch (err) {
        console.log(err);
    }
    if (!restaurants) {
        return res.status(404).json({ message: "Could not find restaurants." });
    }
    return res.status(200).json({ restaurants: restaurants});
};

export const addRestaurant = async (req, res, next) => {
    const{name,location} = req.body;

    let existingRestaurant;

    try{
        existingRestaurant = await Restaurant.findOne({name:name});
    } catch (err) {
        console.log(err);
    }
    if(existingRestaurant){
        return res.status(402).json({message: "Restaurant already exists."});
    }

    const newRestaurant = new retaurant({
        id,
        name,
        x: 0,
        y: 0,
        vegan: 0,
        vegetarian: 0,
        glutenFree: 0,
        lactoseFree: 0,
        rating: 0
    });

    try{
        newRestaurant.save();
    } catch (err) {
        console.log(err);
    }
    return res.status(201).json({message: "Restaurant added."});
};

// Fetches restaurant menu
export const getRestaurantMenu = async (req, res) =>
{
  try {
    const { id } = req.params;
    const restaurant = await Restaurant.findById(id); 

    const menu = await Promise.all(
      restaurant.menu.map((id) => Restaurant.findById(id))
    );

    res.status(200).json(menu);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

