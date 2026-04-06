import React, { useContext } from "react";
import { BooksContext } from "../../Context/BookContext/BookProvider.jsx";
import ReadBookCard from "./ReadBookCard.jsx";

const ReadListedBooks = () => {
  const { readList, setReadList, handleBookMarkRead } =
    useContext(BooksContext);

  return (
    <section className="">
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-5">
        {readList.map((readBook) => (
          <ReadBookCard readBook={readBook}></ReadBookCard>
        ))}
      </div>
    </section>
  );
};

export default ReadListedBooks;
