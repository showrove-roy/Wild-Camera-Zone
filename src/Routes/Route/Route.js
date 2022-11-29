import DashBoardLayout from "../../Layout/DashBoardLayout";
import AllProduct from "../../Pages/AllProduct/AllProduct";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import OneCategories from "../../Pages/Home/ProductCategories/OneCategories";
import Err404Page from "../../Pages/Share/Err404Page/Err404Page";
import Login from "../../Pages/Sign-IN-UP/Login";
import SignUp from "../../Pages/Sign-IN-UP/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
      {
        path: "/product/all",
        element: <AllProduct></AllProduct>,
      },
      {
        path: "/categories/:category",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/category/${params.category}`),
        element: <OneCategories></OneCategories>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/add-product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/my-orders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/my-products",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/dashboard/all-buyers",
        element: <AllBuyers></AllBuyers>,
      },
      {
        path: "/dashboard/all-sellers",
        element: <AllSellers></AllSellers>,
      },
    ],
  },
  {
    path: "*",
    element: <Err404Page></Err404Page>,
  },
]);

export default router;
