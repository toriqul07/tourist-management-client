import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AllTouristSpot from "../pages/AllTouristSpot/AllTouristSpot";
import AddTouristSpot from "../pages/AddTouristSpot/AddTouristSpot";
import MyList from "../pages/MyList/MyList";
import Login from "../pages/Login/Login";
import Register from "../pages/register/Register";
import CountryCard from "../pages/CountryCard/CountryCard";
import ViewDetails from "../components/ViewDetails/ViewDetails";
import UpdatedTouristSpot from "../pages/updatedTouristSpot/updatedTouristSpot";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('https://tourist-management-server-five.vercel.app/tourism')
            },
            {
                path:'/allTouristSpot',
                element:<AllTouristSpot></AllTouristSpot>,
                loader:()=> fetch('https://tourist-management-server-five.vercel.app/tourism')
            },
            {
                path:'/addTouristSpot',
                element:<PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>
            },
            {
                path:'/myList',
                element:<PrivateRoute><MyList></MyList></PrivateRoute>,
                loader:()=> fetch('https://tourist-management-server-five.vercel.app/tourism')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/viewDetails/:id',
                element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader:({params})=> fetch(`https://tourist-management-server-five.vercel.app/tourism/${params.id}`)
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/countryCard',
                element:<CountryCard></CountryCard>,
                loader:()=> fetch('https://tourist-management-server-five.vercel.app/tourism')
            },
            {
                path:'/updatedTouristSpot/:id',
                element:<UpdatedTouristSpot></UpdatedTouristSpot>,
                loader:({params})=> fetch(`https://tourist-management-server-five.vercel.app/tourism/${params.id}`)
            }
        ]
    }

]);
export default router;