import React, { useContext } from "react";
import { BooksContext } from "../../Context/BookContext/BookProvider.jsx";
import ReadBookCard from "./ReadBookCard.jsx";
import { FaBookOpen } from "react-icons/fa";
import NoBooks from "./NoBooks.jsx";

const ReadListedBooks = () => {
  const { readList, setReadList, handleBookMarkRead } =
    useContext(BooksContext);

  return (
    <section className="">
      <div className="max-w-5xl w-full mx-auto flex flex-col gap-6 sm:gap-5">
        {readList.length > 0 ? (
          readList.map((readBook) => (
            <ReadBookCard readBook={readBook}></ReadBookCard>
          ))
        ) : (
          <NoBooks></NoBooks>
        )}
      </div>
    </section>
  );
};

export default ReadListedBooks;
