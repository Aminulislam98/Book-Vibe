import React, { useContext } from "react";
import { BooksContext } from "../../Context/BookContext/BookProvider.jsx";

const ReadListedBooks = () => {
  const { readList, setReadList, handleBookMarkRead } =
    useContext(BooksContext);

  return <div>This is read list books: {readList.length}</div>;
};

export default ReadListedBooks;
