import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorPage from "../Pages/ErrorPage/Error";
import Books from "../Pages/ListedBooks/ListedBooks.jsx";
import BookDetails from "../Pages/BookDetails/BookDetails.jsx";
import ListedBooks from "../Pages/ListedBooks/ListedBooks.jsx";
import PageToRead from "../Pages/PageToRead/PageToRead.jsx";

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
        path: "listed-books",
        Component: ListedBooks,
      },
      {
        path: "/pages-to-read",
        Component: PageToRead,
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
