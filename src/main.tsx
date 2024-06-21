import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminContextProvider } from "./contexts/AdminContext.tsx";
import { BasketContextProvider } from "./contexts/BasketContext.tsx";
import { ProductContextProvider } from "./contexts/ProductContext.tsx";
import "./index.css";
import { router } from "./router/router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProductContextProvider>
      <BasketContextProvider>
        <AdminContextProvider>
          <ToastContainer position="bottom-right" />
          <RouterProvider router={router} />
        </AdminContextProvider>
      </BasketContextProvider>
    </ProductContextProvider>
  </React.StrictMode>
);
