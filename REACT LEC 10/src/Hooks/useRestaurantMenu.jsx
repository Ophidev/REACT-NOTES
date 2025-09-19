import {useState,useEffect} from "react";

const useRestaurantMenu = (resId) =>{

    const[restaurantMenu,setRestaurantMenu] = useState(null); //null if it does not contain any value initially then it will not show any error

    useEffect(()=>{

        getRestaurantMenu();
        

    },[]);

    async function getRestaurantMenu(){

        const data = await fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId="+
        resId);
        //pata nahi id enter krne ke baad he kun kaam kr ri hai

        const json = await data.json();

        setRestaurantMenu(json);
       

    }
    return restaurantMenu;
}

export default useRestaurantMenu;