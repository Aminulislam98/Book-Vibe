import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import BookPage from "../Pages/HomePage/Book/BookPage";
import HomePage from "../Pages/HomePage/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "book-page",
        Component: BookPage,
      },
    ],
  },
]);
