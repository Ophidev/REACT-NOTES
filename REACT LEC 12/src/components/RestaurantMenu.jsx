import {useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import ShimmerUI from "./ShimmerUI";
import useRestaurantMenu from "../Hooks/useRestaurantMenu";

//useParam() HOOk
/*

 ->useParam() is a hook wich is used to get the parameter of (id) for dynamic routing.

*/

const RestaurantMenu = () =>{

    // const param = useParams();

    const { resId } = useParams();
    const restaurantMenu = useRestaurantMenu(resId);
    
//    console.log(id); //it will print the value of the id;

    return !restaurantMenu ? (
    <ShimmerUI/>
    ) : (

        <div className="menuContainer">

        <div className="menuOfDiv">
        {/* <h1>restaurant: {id}</h1> */}
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+restaurantMenu.data?.cards[2]?.card?. card.info.cloudinaryImageId}></img>

        <div className="menuOfDivDetails">
        <h2>{restaurantMenu?.data?.cards[2]?.card?.card?.info?.name}</h2>
        <h3>{restaurantMenu?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
        </div>

        </div>

        
        <div className="menuListContainer">
        <br></br> <center><h1>MENU</h1></center><br></br>

             {
                restaurantMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.slice(2).map((elements)=>{

                    if (Array.isArray(elements?.card?.card?.itemCards)) {
                        // If it's an array, map over it and render items
                        return elements?.card?.card?.itemCards.map((items) => (
                            
                        <div className="menuList">

                          <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+items?.card?.info?.imageId}></img>

                          <div className="menuListDetails">
                          <h4>{items?.card?.info?.name}</h4>
                          <h5>{items?.card?.info?.category}</h5>
                          <h6>{"At price : ₹"+items?.card?.info?.price}</h6>
                          </div>

                        </div>
                        ));
                      } else {
                        // If it's not an array, render something else or nothing
                        return <h6>Item not available</h6>
                      }
                   
                  
                })
                
               
            }   

        </div><br></br>
        </div>
    );
};

export default RestaurantMenu;