import React, { useContext, useEffect } from "react";
import { BooksContext } from "../../Context/BookContext/BookProvider";
import ReadBookCard from "./ReadBookCard";
import NoWishList from "./NoWishList";

const WhishListedBooks = () => {
  const { storeWishList, setWishList, handleWishlist } =
    useContext(BooksContext);

  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <section className="">
      <div className="max-w-5xl w-full mx-auto flex flex-col gap-6 sm:gap-5">
        {storeWishList.length > 0 ? (
          storeWishList.map((readBook) => (
            <ReadBookCard readBook={readBook}></ReadBookCard>
          ))
        ) : (
          <NoWishList></NoWishList>
        )}
      </div>
    </section>
  );
};

export default WhishListedBooks;
