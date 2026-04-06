import React, { use } from "react";
import Book from "../../Utility/BookCard/Book.jsx";
const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const booksData = use(booksPromise);
  return (
    <section className="px-4 bg-[radial-gradient(ellipse_at_70%_50%,#0f2238_0%,#070f1e_40%,#020508_100%)]">
      <div className="flex justify-center items-center pb-10 max-w-7xl w-full mx-auto">
        <h1 className="font-bold text-4xl">Books</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 max-w-7xl w-full mx-auto">
        {booksData.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </section>
  );
};

export default AllBooks;
