import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Home/LogIn/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secrete from "../pages/shared/Secrete/Secrete";
import PrivateRoute from "./privateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Additems from "../pages/Dashboard/AddItems/Additems";
import AdminRoute from "./AdminRoute";

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
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/secrete',
          element:<PrivateRoute><Secrete></Secrete></PrivateRoute>
        }
    ]
  },
  {
    path:'dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      // normal user routes 
      {
        path:'cart',
        element: <Cart></Cart>
      },

      // admin only routes 
      {
        path: 'addItems',
        element: <Additems></Additems>
      },
      {
        path: 'users',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      }
    ]
  }
]);
