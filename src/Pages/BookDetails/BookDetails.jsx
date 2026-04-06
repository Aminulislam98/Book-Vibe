import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BooksContext } from "../../Context/BookContext/BookProvider.jsx";
import { FaBookOpen } from "react-icons/fa";

const BookDetails = () => {
  const { bookId } = useParams();
  const books = useLoaderData();
  const existBook = books.find((book) => book.bookId === Number(bookId));
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = existBook;

  const { handleBookMarkRead, handleWishlist } = useContext(BooksContext);

  return (
    <section className="px-4 bg-[radial-gradient(ellipse_at_70%_50%,#0f2238_0%,#070f1e_40%,#020508_100%)] pb-20 min-h-screen flex flex-row justify-center items-center">
      <div className="flex flex-col-reverse md:flex-row max-w-6xl gap-10 lg:gap-5 pt-10">
        {/* left section */}
        <div className="lg:max-w-110">
          <img className="h-full object-contain" src={image} alt={bookName} />
        </div>
        {/* wright section */}
        <div className="px-2 text-white flex flex-col justify-center items-start w-full space-y-2">
          <h1 className="font-bold text-4xl">{bookName}</h1>
          <p className="font-medium text-xl text-[#b794f4]">{author}</p>
          <p className="font-medium text-xl text-[#F5A623] tracking-widest uppercase">
            {category}
          </p>
          <div>
            <span className="text-white-50 uppercase tracking-widest text-sm">
              About this Book
            </span>
            <p className="text-base text-[#a89bc2]">{review}</p>
          </div>
          <div className="flex flex-row gap-3">
            <p className="uppercase tracking-widest text-sm">Tags:</p>
            <p className="flex flex-row gap-2 ">
              {tags.map((tag) => {
                return (
                  <span className="px-2 flex justify-center items-center rounded text-sm bg-[#0f2238] border border-[#1a3a5c] text-[#a0c4e0] ">
                    {tag}
                  </span>
                );
              })}
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <p className="uppercase tracking-widest text-sm">Number of Page:</p>
            <div className="flex flex-row justify-center items-center gap-2">
              <FaBookOpen />
              {totalPages}
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-4">
            <p className="tracking-widest uppercase text-sm">Publisher:</p>
            <p>{publisher}</p>
          </div>
          <div className="flex flex-row justify-center items-center gap-3">
            <p className="tracking-widest uppercase text-sm">Rating:</p>
            <div className="flex justify-between items-center gap-1 ">
              {/* Numeric rating */}
              <span className="text-sm text-yellow-600 font-semibold">
                {rating}
              </span>

              {/* Outline star */}
              <svg
                className="w-4 h-4 text-yellow-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </div>
          </div>

          <div className=" flex flex-row gap-x-3 text-white">
            <button
              onClick={() => {
                handleBookMarkRead(existBook);
              }}
              className="px-6 py-2 rounded-lg bg-[#0d3b2e] text-[#00ff87] border border-[#1a6b50] hover:bg-[#1a6b50] transition-colors duration-200"
            >
              Mark as Read
            </button>
            <button
              onClick={() => {
                handleWishlist(existBook);
              }}
              className="px-6 py-2 rounded-lg bg-[#2d1130] text-[#f472b6] border border-[#6b2150] hover:bg-[#6b2150] transition-colors duration-200"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
