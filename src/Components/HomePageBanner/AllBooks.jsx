import React, { use } from "react";
import Book from "../../Utility/BookCard/Book.jsx";
const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const booksData = use(booksPromise);
  console.log(booksData.length);

  return (
    <section className="mt-10 lg:mt-20 max-w-7xl w-full mx-auto px-4">
      <div className="flex justify-center items-center pb-10">
        <h1 className="font-bold text-4xl">Books</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 ">
        {booksData.map((book) => (
          <Book book={book}></Book>
        ))}
      </div>
    </section>
  );
};

export default AllBooks;
