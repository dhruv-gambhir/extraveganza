import retaurant from "../models/retaurant.js";

export const getRestaurants = async (req, res, next) => {
    let restaurants;
    try {
        restaurants = await retaurant.find();
    } catch (err) {
        console.log(err);
    }
    if (!restaurants) {
        return res.status(404).json({ message: "Could not find restaurants." });
    }
    return res.status(200).json({ restaurants: restaurants});
};

export const addRestaurants = async (req, res, next) => {
    const{name,location} = req.body;

    let existingRestaurant;

    try{
        existingRestaurant = await restaurants.findOne({name:name});
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


