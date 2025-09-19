import {useState,useEffect} from "react";

const useREstaurantData = (restaurantAPI) =>{

  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);


  useEffect(() => {
    // console.log("useEffect called on InputValue changes");
    getRestaurantData();

    console.log("useEffect Hook");
  }, []);

  async function getRestaurantData() {
    const data = await fetch(restaurantAPI);

    const json = await data.json();

    // console.log(json);

    setFilteredRes(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setAllRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );

   
  };



  return[allRestaurants,filteredRes];
}

export default useREstaurantData;