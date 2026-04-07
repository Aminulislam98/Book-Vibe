import React, { createContext, useEffect, useState } from "react";
import {
  getAllReadBoosFromDb,
  addReadBookInLocalDb,
} from "../../DataBase/BooksData.js";
export const BooksContext = createContext();
const BookProvider = ({ children }) => {
  const [readList, setReadList] = useState(() => getAllReadBoosFromDb());
  const [storeWishList, setWishList] = useState([]);

  const handleBookMarkRead = (selectedBook) => {
    const existBook = readList.find(
      (book) => book.bookId === selectedBook.bookId,
    );
    if (existBook) {
      //
    } else {
      setReadList([...readList, selectedBook]);
      addReadBookInLocalDb(selectedBook);
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
  // removing data from wishlist
  const removeWishList = (book) => {
    console.log(book.bookId);
    const matchingWishList = storeWishList.find(
      (wish) => wish.bookId === book.bookId,
    );
    if (matchingWishList) {
      const newWishList = storeWishList.filter(
        (wishList) => wishList.bookId !== book.bookId,
      );
      setWishList(newWishList);
    }
  };
  const data = {
    handleBookMarkRead,
    readList,
    setReadList,
    storeWishList,
    setWishList,
    handleWishlist,
    removeWishList,
  };
  return <BooksContext.Provider value={data}>{children}</BooksContext.Provider>;
};

export default BookProvider;
