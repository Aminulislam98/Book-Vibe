import React, { createContext, useState } from "react";
export const BooksContext = createContext();
const BookProvider = ({ children }) => {
  const [storeBooks, setStoreBooks] = useState([]);
  const handleBookMarkRead = (selectedBook) => {
    const existBook = storeBooks.find(
      (book) => book.bookId === selectedBook.bookId,
    );
    if (existBook) {
      alert(`${existBook.bookName} is already added to read list`);
    } else {
      setStoreBooks([...storeBooks, selectedBook]);
      alert(`Added to read List`);
    }
  };
  const data = { handleBookMarkRead, storeBooks, setStoreBooks };
  return <BooksContext.Provider value={data}>{children}</BooksContext.Provider>;
};

export default BookProvider;
