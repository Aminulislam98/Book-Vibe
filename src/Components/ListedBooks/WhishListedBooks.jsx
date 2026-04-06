import React, { useContext } from "react";
import { BooksContext } from "../../Context/BookContext/BookProvider";

const WhishListedBooks = () => {
  const { storeWishList, setWishList, handleWishlist } =
    useContext(BooksContext);
  return (
    <div>
      <h2>This is wish list books :{storeWishList.length}</h2>
    </div>
  );
};

export default WhishListedBooks;
