// import {RestaurantList} from "../Utils/config.js";
import RestaurantCard from "./RestaurantCard.jsx";
import {useState,useEffect} from "react";
import ShimmerUI from "./ShimmerUI";
import {restaurantAPI} from "../Utils/config.js";
import { Link } from "react-router-dom";



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
    
    const[allRestaurants,setAllRestaurants] = useState([]);
    const[filteredRestaurants,setFilteredRestaurants] = useState([]);
    
    

    console.log("top data");

     useEffect(()=>{

        // console.log("useEffect called on InputValue changes");
        getRestaurantData();

        console.log("useEffect Hook")
    },[]);
    
    async function getRestaurantData(){
        const data = await fetch(restaurantAPI);

        const json = await data.json();

        // console.log(json);

        setFilteredRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setAllRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

        console.log("async function")
    }

    // console.log("render(");

 {/*Conditional Rendring-:

            =>If Restaurants state variable is empty then => render Shimmer UI
            =>else Render RestaurantCard(actual data)

*/}


//How to avod the rendring the component(Early return)

if(!allRestaurants) return null; //if there is no allRestaurants or it will not contain
                                // any value. Then return null and it will not render.

   

    return (

        <>
        <div className="Search-Container">

            <input type="text" placeholder="Enter Restaurant Name..." value={InputValue} onChange={(event)=>setInputValue(event.target.value)}></input>

            <button id="SearchBtn" onClick={()=>{

                const searchedRestaurantData = FilterData(InputValue,allRestaurants);

                setFilteredRestaurants(searchedRestaurantData);

            }}>Search</button>

        </div>
            
        {/*if allRestaurants?.length==0 then renders shimmer Ui else data*/}
        {allRestaurants?.length === 0 ?(<ShimmerUI/>):(

        <div className="CardsInsideBody">

        {/*Write code for the no Restaurant found here*/    }

        {filteredRestaurants?.length === 0 ?(<p>No data found for : {InputValue}</p>): (

        //returning card for each object of RestaurantList which is a array */
        
        
        filteredRestaurants.map((restaurantObj)=>{

            return(
            <Link to={"/restaurant/"+restaurantObj.info.id}>
             <RestaurantCard {...restaurantObj.info} ></RestaurantCard>
            </Link>
            
            );
        }) 
        

         )}
        

        </div>)}
        {/* {console.log("last data of body")} */}
        </>
    
    );

};


export default Body;