import { useDispatch } from "react-redux";
import { addItems } from "../Utils/cartSlice";

const MenuItems = ({restaurantMenu}) => {
  
    const dispatch = useDispatch();

    const handleAddItem = (items) =>{

        dispatch(addItems(items));
        console.log(items);//good data
    }

  
    return (
    <>
      {restaurantMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        ?.slice(2)
        .map((elements) => {
          if (Array.isArray(elements?.card?.card?.itemCards)) {
            // If it's an array, map over it and render items
            return elements?.card?.card?.itemCards.map((items) => (
      
              <div className="menuList" >
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                    items?.card?.info?.imageId
                  }
                ></img>

                <div className="menuListDetails" key={items}>
                  <h4>{items?.card?.info?.name}</h4>
                  <h5>{items?.card?.info?.category}</h5>
                  <h6>{"At price : ₹" + items?.card?.info?.price}</h6>
                  <button
                    className="bg-green-200 p-1"
                    onClick={() => handleAddItem(items)}
                  >
                    add
                  </button>
              
                </div>
              </div>
            ));
          } else {
            // If it's not an array, render something else or nothing
            return <h6>Item not available</h6>;
          }
        })}
    </>
  );
};

export default MenuItems;
