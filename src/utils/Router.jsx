import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Login from "../pages/Login.jsx";
import ForgetPassword from "../pages/ForgetPassword.jsx";
import SignUp from "../pages/SignUp.jsx";
import AdminPanel from "../pages/AdminPanel.jsx";
import AllUsers from "../pages/AllUsers.jsx";
import AllProduct from "../pages/AllProduct.jsx";
import Home from "../pages/Home.jsx";
import CategoryProduct from "../components/CategoryProduct.jsx";
import ProductDetails from "../pages/ProductDetails.jsx";
import Cart from "../components/Cart.jsx";
import SearchProduct from "../pages/SearchProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <ForgetPassword />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "product-category",
        element: <CategoryProduct />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "search",
        element: <SearchProduct />,
      },
      {
        path: "admin-panel",
        element: <AdminPanel />,
        children: [
          {
            path: "all-users",
            element: <AllUsers />,
          },
          {
            path: "products",
            element: <AllProduct />,
          },
        ],
      },
    ],
  },
]);

export default router;
