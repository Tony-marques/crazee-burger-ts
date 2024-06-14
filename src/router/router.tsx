import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../components/pages/LoginPage/LoginPage";
import OrderPage from "../components/pages/OrderPage/OrderPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/order/:name",
    element: <OrderPage />,
  },
]);
