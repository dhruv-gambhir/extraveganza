import { Component, Fragment, useState, useEffect } from "react";

function RestaurantFilter(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch('http://localhost:2007/api/restaurants')
        .then(response => response.json())
        .then(data => setData(data.restaurants));
    }, []);
  
    const { dietaryRestrictions } = props;
  
    const filteredRestaurants = data.filter(restaurant => {
        const selectedRestrictions = dietaryRestrictions.filter(restriction => restriction.selected);
        const hasVegan = selectedRestrictions.some(restriction => restriction.title === 'vegan');
        const hasVegetarian = selectedRestrictions.some(restriction => restriction.title === 'vegetarian');
        const hasGlutenFree = selectedRestrictions.some(restriction => restriction.title === 'gluten-free');
        const hasLactoseFree = selectedRestrictions.some(restriction => restriction.title === 'lactose-free');
      
        if (hasVegan && hasVegetarian && hasGlutenFree && hasLactoseFree) {
          return restaurant.vegan > 5 && restaurant.vegetarian > 5 && restaurant.glutenFree > 5 && restaurant.lactoseFree > 5;
        } else if (hasVegan && hasVegetarian && hasGlutenFree) {
          return restaurant.vegan > 5 && restaurant.vegetarian > 5 && restaurant.glutenFree > 5;
        } else if (hasVegan && hasVegetarian && hasLactoseFree) {
          return restaurant.vegan > 5 && restaurant.vegetarian > 5 && restaurant.lactoseFree > 5;
        } else if (hasVegetarian && hasGlutenFree && hasLactoseFree) {
          return restaurant.vegetarian > 5 && restaurant.glutenFree > 5 && restaurant.lactoseFree > 5;
        } else if (hasVegan && hasGlutenFree && hasLactoseFree) {
          return restaurant.vegan > 5 && restaurant.glutenFree > 5 && restaurant.lactoseFree > 5;
        } else if (hasVegan && hasVegetarian) {
          return restaurant.vegan > 5 && restaurant.vegetarian > 5;
        } else if (hasVegan && hasGlutenFree) {
          return restaurant.vegan > 5 && restaurant.glutenFree > 5;
        } else if (hasVegan && hasLactoseFree) {
          return restaurant.vegan > 5 && restaurant.lactoseFree > 5;
        } else if (hasVegetarian && hasGlutenFree) {
          return restaurant.vegetarian > 5 && restaurant.glutenFree > 5;
        } else if (hasVegetarian && hasLactoseFree) {
          return restaurant.vegetarian > 5 && restaurant.lactoseFree > 5;
        } else if (hasGlutenFree && hasLactoseFree) {
          return restaurant.glutenFree > 5 && restaurant.lactoseFree > 5;
        } else if (hasVegan) {
          return restaurant.vegan > 5;
        } else if (hasVegetarian) {
          return restaurant.vegetarian > 5;
        } else if (hasGlutenFree) {
          return restaurant.glutenFree > 5;
        } else if (hasLactoseFree) {
          return restaurant.lactoseFree > 5;
        }
        return true;
      });
      
      //const first10FilteredRestaurants = filteredRestaurants.slice(0, 10);

      //console.log(first10FilteredRestaurants);
    return (
      <div>
        {/* your component JSX here */}
      </div>
    );
  }
  

export default RestaurantFilter;
