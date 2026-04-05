import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorPage from "../Pages/ErrorPage/Error";
import Books from "../Pages/Book/Books.jsx";
import BookDetails from "../Pages/BookDetails/BookDetails.jsx";

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
        path: "books",
        Component: Books,
      },
      {
        path: "book-details/:bookId",
        loader: () => fetch("/booksData.json"),
        Component: BookDetails,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
