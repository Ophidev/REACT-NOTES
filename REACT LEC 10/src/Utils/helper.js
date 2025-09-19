export function FilterData(InputValue,Restaurants){

   const filter =  Restaurants.filter((RestaurantObj) =>

        RestaurantObj?.info?.name.toLowerCase().includes(InputValue.toLowerCase())
   );


   return filter;
  
}