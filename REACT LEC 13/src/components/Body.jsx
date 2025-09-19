// import {RestaurantList} from "../Utils/config.js";
import RestaurantCard from "./RestaurantCard.jsx";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { FilterData } from "../Utils/helper.js";
import useOnline from "../Hooks/useOnline.jsx";
import useRestaurantData from "../Hooks/useRestaurantData.jsx"; 
import { restaurantAPI } from "../Common/config.js";
//filterData JS function

const Body = () => {
  const [InputValue, setInputValue] = useState("");

  const [allRestaurants,filteredRes] = useRestaurantData(restaurantAPI);

  const [filteredRestaurants, setFilteredRestaurants] = useState(null);

  const renderCondition = filteredRestaurants === null? filteredRes : filteredRestaurants;

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Please Check your Internet connectivity</h1>;
  }

  //How to avod the rendring the component(Early return)

  if (!allRestaurants) return null; //if there is no allRestaurants or it will not contain
  // any value. Then return null and it will not render.

  return (
    <>  
      <div className="Search-Container">
        <input
          type="text"
          placeholder="Enter Restaurant Name..."
          value={InputValue}
          onChange={(event) => setInputValue(event.target.value)}
        ></input>

        <button
          id="SearchBtn"
          onClick={() => {
            const searchedRestaurantData = FilterData(
              InputValue,
              allRestaurants
            );

            setFilteredRestaurants(searchedRestaurantData);
          }}
        >
          Search
        </button>
      </div>

      {/*if allRestaurants?.length==0 then renders shimmer Ui else data*/}
      {allRestaurants?.length === 0 ? (
        <ShimmerUI />
      ) : (
        <div className="CardsInsideBody">
          {/*Write code for the no Restaurant found here*/}

          {filteredRestaurants?.length === 0 ? (
            <p>No data found for : {InputValue}</p>
          ) : (
            //returning card for each object of RestaurantList which is a array */

            renderCondition.map((restaurantObj) => {
              return (
                <Link
                  to={"/restaurant/" + restaurantObj.info.id}
                  key={restaurantObj.info.id}
                >
                  <RestaurantCard {...restaurantObj.info}></RestaurantCard>
                </Link>
              );
            })
          )}
        </div>
      )}
      {/* {console.log("last data of body")} */}
    </>
  );
};

export default Body;
