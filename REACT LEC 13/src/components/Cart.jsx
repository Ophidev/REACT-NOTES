import { useSelector } from "react-redux";
import FoodItems from "./FoodItems";

const Cart = () => {
  const cardItems = useSelector((store) => store.cart.Items);
  console.log(cardItems);
  return (
    <div>
      {cardItems.map((elements) => {
        return <FoodItems restaurantMenu={cardItems}></FoodItems>;
      })}
    </div>
  );
};

export default Cart;
