import Restaurant from "../models/Restaurant.js";

/**
 * This function calls and gets the list of restaurants required from the database.
 * An error message is shown if no restaurant is returned.
 * @param {*} res represents the HTTP response that an Express app sends when it gets an HTTP request
 * @returns Restaurant records
 */
export const getRestaurants = async (req, res) => {
    let restaurants;
    try {
        restaurants = await Restaurant.find();
    } catch (err) {
        console.log(err);
    }
    if (!restaurants) {
        return res.status(404).json({ message: "Could not find restaurants." });
    }
    return res.status(200).json({ restaurants: restaurants });
};

/**
 * This function calls and get the restaurant record based on the restaurant ID.
 * An error message is shown if no restaurant is returned.
 * @param {*} req represents the HTTP request and has properties for the request query string, parameters, body and HTTP headers
 * @param {*} res represents the HTTP response that an Express app sends when it gets an HTTP request
 * @returns record of a specific restaurant
 */
export const getRestaurantByID = async (req, res) => {
    try {
        const { id } = req.params;
        const restaurant = await Restaurant.findOne({ id: id });
        if (restaurant)
            return res.status(200).json(restaurant);
        else
            return res.status(400).json({ message: ("Could not find restaurant of id: " + id) });
    } catch (err) {
        return res.status(404).json({ message: "Could not find restaurant." });
    }
};

/**
 * This function writes to the database to add a restaurant record.
 * An error message is shown when restaurant that function is trying to add has already existed.
 * @param {*} req represents the HTTP request and has properties for the request query string, parameters, body and HTTP headers
 * @param {*} res represents the HTTP response that an Express app sends when it gets an HTTP request
 * @returns String confirmation message
 */
export const addRestaurant = async (req, res) => {
    const { name } = req.body;

    let existingRestaurant;

    try {
        existingRestaurant = await Restaurant.findOne({ name: name });
    } catch (err) {
        console.log(err);
    }
    if (existingRestaurant) {
        return res.status(402).json({ message: "Restaurant already exists." });
    }

    const newRestaurant = new Restaurant({
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

    try {
        newRestaurant.save();
    } catch (err) {
        console.log(err);
    }
    return res.status(201).json({ message: "Restaurant added." });
};

/**
 * This function calls and gets the menu list of the particular restaurant by its id.
 * @param {*} req represents the HTTP request and has properties for the request query string, parameters, body and HTTP headers
 * @param {*} res represents the HTTP response that an Express app sends when it gets an HTTP request
 * @returns Menu options
 */
export const getRestaurantMenuByID = async (req, res) => {
    try {
        const { id } = req.params;
        const restaurant = await Restaurant.findById(id);

        const menu = await Promise.all(
            restaurant.menu.map((id) => Restaurant.findById(id))
        );

        res.status(200).json(menu);
    } catch (err) {
        res.status(404).json({ message: err.message });
    } return res.status(200).json({ menu: menu });
};

