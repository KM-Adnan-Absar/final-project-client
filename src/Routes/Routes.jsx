import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import {
    createBrowserRouter,
    
  } from "react-router-dom";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
        path: '/',
        element: <Home></Home>
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        {
          path:'/shop/:category',
          element:<Order></Order>
        },
    ]
  },
]);
