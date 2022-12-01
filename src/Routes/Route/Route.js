import axios from "axios";
import DashBoardLayout from "../../Layout/DashBoardLayout";
import AllProduct from "../../Pages/AllProduct/AllProduct";
import Blogs from "../../Pages/Blogs/Blogs";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import MyWishList from "../../Pages/Dashboard/MyWishList/MyWishList";
import OneCategories from "../../Pages/Home/ProductCategories/OneCategories";
import Payment from "../../Pages/Payment/Payment";
import Err404Page from "../../Pages/Share/Err404Page/Err404Page";
import ErrorElement from "../../Pages/Share/ErrorElement/ErrorElement";
import Login from "../../Pages/Sign-IN-UP/Login";
import SignUp from "../../Pages/Sign-IN-UP/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorElement></ErrorElement>,
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
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/categories/:category",
        loader: ({ params }) =>
          fetch(
            `https://wild-camera-zone-server.vercel.app/product/category/${params.category}`,
            {
              headers: {
                authorization: `bearer ${localStorage.getItem("jwToken")}`,
              },
            }
          ),
        element: (
          <PrivateRoute>
            <OneCategories></OneCategories>,
          </PrivateRoute>
        ),
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
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/dashboard/add-product",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        loader: ({ params }) =>
          axios.get(
            `https://wild-camera-zone-server.vercel.app/product/${params.id}`
          ),
        element: (
          <BuyerRoute>
            <Payment></Payment>
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/my-orders",
        element: (
          <BuyerRoute>
            <MyOrders></MyOrders>
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/my-wishlist",
        element: (
          <BuyerRoute>
            <MyWishList></MyWishList>
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/my-products",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/all-buyers",
        element: (
          <AdminRoute>
            <AllBuyers></AllBuyers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-sellers",
        element: (
          <AdminRoute>
            <AllSellers></AllSellers>
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Err404Page></Err404Page>,
  },
]);

export default router;
