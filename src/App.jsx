import React from "react";
import AppRoutes from "./Utils.jsx/AppRoutes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const API_URL = "https://659c2021d565feee2dac7796.mockapi.io/books";

function App() {
  const router = createBrowserRouter(AppRoutes);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;