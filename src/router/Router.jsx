import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Booking from "../pages/Booking";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
    {
        path: "/booking",
        Component: Booking
    },
    {
        path: "/login",
        Component: Login
    },
    {
        path:"/signup",
        Component: Signup
    }
])


export default router;