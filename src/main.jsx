import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./Router/Route.jsx";
import BookProvider from "./Context/BookContext/BookProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router}></RouterProvider>
    </BookProvider>
  </StrictMode>,
);
