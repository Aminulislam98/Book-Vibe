import React, { createContext, useEffect, useState } from "react";
import {
  getAllReadBoosFromDb,
  addReadBookInLocalDb,
  getAllWishListBookFromDb,
  AddWishBookInLocalStorage,
  removeWishListFromDb,
} from "../../DataBase/BooksData.js";
export const BooksContext = createContext();
const BookProvider = ({ children }) => {
  const [readList, setReadList] = useState(() => getAllReadBoosFromDb());
  const [storeWishList, setWishList] = useState(() =>
    getAllWishListBookFromDb(),
  );

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
    if (!existWishList) {
      setWishList([...storeWishList, selectedWhishListBook]);
      AddWishBookInLocalStorage(selectedWhishListBook);
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
      removeWishListFromDb(newWishList);
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
