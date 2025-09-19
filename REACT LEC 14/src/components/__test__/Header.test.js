import { getAllByTestId, render } from "@testing-library/react";

import Header from "../Header.jsx";

import store from "../../Utils/store.js";
import { Provider } from "react-redux";

import {StaticRouter} from "react-router-dom/server";

test("Logo should load on rendring Header", () => {
  //render Header

  const header = render(

    <StaticRouter>
    <Provider store={store}>
      <Header />
    </Provider>
    </StaticRouter>
  );
  
  console.log(header); //->It will contain our virtual ReactDom object but now it is not of a real browser but of a container.

  //check if logo is loaded

  const logo = header.getAllByTestId("logo");//header is a object of our react vertual dom so to get or find any element in it we get many method.
            //This is a method given to us by Jest and it return an array which include "data-testid = "xyz" " here.
            //so we have to give data-testid="logo" to our img tag which is in header.

  console.log(logo);
  expect(logo[0].src).toBe("http://localhost/dummy.png");

  
});


 test("cart should be 0 on the header load",()=>{

    const header = render(

        <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
        </StaticRouter>
      );

      
      const cart = header.getByTestId("cart");//is a function which return only single element not array

      expect(cart.innerHTML).toBe("cart-0");

 });