import React, { createContext, useState } from "react";
export const BooksContext = createContext();
const BookProvider = ({ children }) => {
  const [readList, setReadList] = useState([]);
  const [storeWishList, setWishList] = useState([]);

  const handleBookMarkRead = (selectedBook) => {
    const existBook = readList.find(
      (book) => book.bookId === selectedBook.bookId,
    );
    if (existBook) {
      //
    } else {
      setReadList([...readList, selectedBook]);
    }
  };
  const handleWishlist = (selectedWhishListBook) => {
    const existWishList = storeWishList.find(
      (book) => book.bookId === selectedWhishListBook.bookId,
    );
    if (existWishList) {
      // alert(`${existWishList.bookName} is already added to read list`);
    } else {
      setWishList([...storeWishList, selectedWhishListBook]);
      // alert(`Added to read List`);
    }
  };
  const data = {
    handleBookMarkRead,
    readList,
    setReadList,
    storeWishList,
    setWishList,
    handleWishlist,
  };
  return <BooksContext.Provider value={data}>{children}</BooksContext.Provider>;
};

export default BookProvider;
