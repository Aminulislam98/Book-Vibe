import React, { use } from "react";
import Book from "../../Utility/BookCard/Book.jsx";
const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const booksData = use(booksPromise);
  return (
    <section className="px-4 bg-[radial-gradient(ellipse_at_70%_50%,#0f2238_0%,#070f1e_40%,#020508_100%)] pb-20 ">
      <div className="flex flex-col justify-center items-center mb-10 md:pb-12 max-w-7xl w-full mx-auto gap-2">
        <h1 className="font-bold text-4xl text-white text-center">
          Explore the World of Bestselling Books
        </h1>
        <p className="text-base text-[#a0c4e0] text-center">
          Stay up to date with what’s popular and discover the perfect book for
          your next read.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 md:gap-6 max-w-7xl w-full mx-auto">
        {booksData.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </section>
  );
};

export default AllBooks;
