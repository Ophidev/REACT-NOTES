

const FoodItems = (items) => {
  
    console.log("the items is : ",items?.restaurantMenu[0]?.card)
    return (
    <>
         
              <div className="menuList">
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                    items?.restaurantMenu[0]?.card?.info?.imageId
                  }
                ></img>

                <div className="menuListDetails">
                  <h4>{items?.restaurantMenu[0]?.card?.info?.name}</h4>
                  <h5>{items?.restaurantMenu[0]?.card?.info?.category}</h5>
                  <h6>{"At price : ₹" + items?.restaurantMenu[0]?.card?.info?.price}</h6>
                </div>
              </div>
    </>
  );
};

export default FoodItems;
