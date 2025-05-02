
import {
  createBrowserRouter,
} from "react-router-dom";


import ErrorPage from "../components/ErrorPage/ErrorPage";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home/Home";
import AddCoffee from "../components/AddCoffee/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee/UpdateCoffee";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Users from "../components/Users/Users";

 export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('https://coffee-store-server-wine-pi.vercel.app/coffee')
      },
      {
        path: "/addcoffee",
        element: <AddCoffee></AddCoffee>
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({params}) => fetch(`https://coffee-store-server-wine-pi.vercel.app/coffee/${params.id}`)
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch('https://coffee-store-server-wine-pi.vercel.app/users')
      },
      
     
  
    ],
    
  },
  
  
]);
