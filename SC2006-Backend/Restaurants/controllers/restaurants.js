import Restaurant from "../models/restaurant";

// Fetches restaurant
export const getRestaurant = async (req, res) => 
{
  try 
  {
    const { id } = req.params;
    const restaurant = await Restaurant.findById(id); 
    res.status(200).json(restaurant);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
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