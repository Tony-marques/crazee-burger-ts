import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminContextProvider } from "./contexts/AdminContext.tsx";
import "./index.css";
import { router } from "./router/router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AdminContextProvider>
      <ToastContainer position="bottom-right" />
      <RouterProvider router={router} />
    </AdminContextProvider>
  </React.StrictMode>
);
