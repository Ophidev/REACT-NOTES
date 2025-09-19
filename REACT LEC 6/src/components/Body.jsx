import {RestaurantList} from "../Utils/constant.js";
import RestaurantCard from "./RestaurantCard.jsx";
import {useState} from "react";



//filterData JS function

function FilterData(InputValue,Restaurants){

   const filter =  Restaurants.filter((RestaurantObj) =>

        RestaurantObj?.info?.name.toLowerCase().includes(InputValue.toLowerCase())
   );

   return filter;
}


const Body = () =>{

    let InputVal = "Burger King";//local variable (JS varibles) React does not track them.

    const[InputValue,setInputValue] = useState("");
    
    const[Restaurants,setRestaurant] = useState(RestaurantList);

    return(

        <>
         <h1>{InputValue}</h1>
        <div className="Search-Container">

            <input type="text" placeholder="Enter Restaurant Name..." value={InputValue} onChange={(event)=>setInputValue(event.target.value)}></input>

            <button id="SearchBtn" onClick={()=>{

                const searchedRestaurantData = FilterData(InputValue,Restaurants);

                setRestaurant(searchedRestaurantData);

            }}>Search</button>

           

        </div>

        <div className="CardsInsideBody">


        {/* //returning card for each object of RestaurantList which is a array */}
        
        {
        Restaurants.map((restaurantObj)=>{

            return <RestaurantCard {...restaurantObj.info} key={restaurantObj.info.id}></RestaurantCard>;

        })
        }

        </div>
        </>
    );

};


export default Body;