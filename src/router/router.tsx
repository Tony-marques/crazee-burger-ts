import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/pages/ErrorPage/ErrorPage";
import LoginPage from "../components/pages/LoginPage/LoginPage";
import OrderPage from "../components/pages/OrderPage/OrderPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  // {
  //   path: "/order/:name",
  //   element: (
  //     <ProductContextProvider>
  //       <BasketContextProvider>
  //         <AdminContextProvider>
  //           <OrderPage />
  //         </AdminContextProvider>
  //       </BasketContextProvider>
  //     </ProductContextProvider>
  //   ),
  // },
  {
    path: "/order/:name",
    element: <OrderPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
