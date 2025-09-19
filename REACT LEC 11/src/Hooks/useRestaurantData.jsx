import { useState, useEffect } from "react";

const useRestaurantData = (restaurantAPI) => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);

  useEffect(() => {
    const getRestaurantData = async () => {
      try {
        const data = await fetch(restaurantAPI);
        const json = await data.json();

        setFilteredRes(
          json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
        );
        setAllRestaurants(
          json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
        );
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };

    getRestaurantData();
  }, [restaurantAPI]);

  return [allRestaurants, filteredRes];
};

export default useRestaurantData;
