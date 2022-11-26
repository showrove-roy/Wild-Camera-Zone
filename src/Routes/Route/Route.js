import DashBoardLayout from "../../Layout/DashBoardLayout";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import Err404Page from "../../Pages/Share/Err404Page/Err404Page";
import Login from "../../Pages/Sign-IN-UP/Login";
import SignUp from "../../Pages/Sign-IN-UP/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout></DashBoardLayout>,
    children: [
      {
        path: "/dashboard/add-product",
        element: <AddProduct></AddProduct>,
      },
    ],
  },
  {
    path: "*",
    element: <Err404Page></Err404Page>,
  },
]);

export default router;
