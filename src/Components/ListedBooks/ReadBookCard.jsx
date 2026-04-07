import React, { useContext } from "react";
import { FaArrowLeft, FaBookOpen } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { BooksContext } from "../../Context/BookContext/BookProvider";

const ReadBookCard = ({ readBook, showRemove = false }) => {
  const {
    bookId,
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
    narratedBy,
    length,
    releaseDate,
    language,
    price,
  } = readBook;

  const { removeWishList } = useContext(BooksContext);

  return (
    <section className="w-full mx-auto flex flex-col sm:flex-row  gap-5 grow border-b  border-gray-300  space-y-1 pb-5">
      {/* left side */}
      <div className="  max-w-3xl w-full flex flex-row justify-start items-start gap-2 ">
        <div className="w-30 md:w-37 flex justify-start items-start aspect-2/3 shrink-0 rounded-xl overflow-hidden">
          <img
            src={image}
            alt={bookName}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="px-2 text-white flex flex-col justify-start items-start h-full">
          <h1 className="font-bold text-base md:text-xl text-[#0E5B9B]">
            {bookName}
          </h1>
          <div className="flex flex-row justify-center items-center gap-1">
            <p className="font-medium md:text-base text-sm text-[#061624]">
              By
            </p>

            <p className="font-medium md:text-base text-sm text-[#0E5B9B]">
              {author}
            </p>
          </div>
          <div className="flex flex-row justify-center items-center gap-1">
            <p className="font-medium md:text-base text-sm text-[#061624]">
              Narrated by:
            </p>
            <p className="font-medium md:text-base text-sm text-[#0E5B9B]">
              {narratedBy}
            </p>
          </div>
          <div className="flex flex-row justify-center items-center gap-1">
            <p className="font-medium md:text-base text-sm text-[#061624]">
              Length:
            </p>
            <p className="font-medium md:text-base text-sm text-[#061624]">
              {length}
            </p>
          </div>
          <div className="flex flex-row justify-center items-center gap-1">
            <p className="font-medium md:text-base text-sm text-[#061624]">
              Release date:
            </p>
            <p className="font-medium md:text-base text-sm text-[#061624]">
              {releaseDate}
            </p>
          </div>
          <div className="flex flex-row justify-center items-center gap-1">
            <p className="font-medium md:text-base text-sm text-[#061624]">
              Language:
            </p>
            <p className="font-medium md:text-base text-sm text-[#061624]">
              {language}
            </p>
          </div>
          <div className="flex flex-row justify-center items-center gap-2">
            <p className="font-medium md:text-base text-sm text-[#061624]">
              Number of Page:
            </p>
            <div className="flex flex-row text-[#061624] md:text-base text-sm justify-center items-center gap-1">
              <FaBookOpen />
              {totalPages}
            </div>
          </div>

          <div className="flex flex-row justify-center items-center gap-1">
            <p className="font-medium md:text-base text-sm text-[#061624]">
              Publisher:
            </p>
            <p className="font-medium md:text-base text-sm text-[#061624]">
              {publisher}
            </p>
          </div>
          <div className="flex flex-row justify-center items-center gap-3">
            <p className="font-medium md:text-base text-sm text-[#061624]">
              Rating:
            </p>
            <div className="flex justify-between items-center gap-1 ">
              {/* Numeric rating */}
              <span className=" text-yellow-600 font-medium md:text-base text-sm">
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
        </div>
      </div>
      {/* right side */}
      <div className="flex flex-col justify-center items-start gap-4">
        <div>
          <p>
            <span className="font-bold">{`£${price}`}</span> or free with trial.
            Auto-renews at £5.99/month after trial.
          </p>
        </div>
        <div className="w-full flex flex-col gap-2">
          <button className="bg-[#F5A623] text-[#020508] w-full  font-semibold py-1 px-3 md:px-7 rounded  md:rounded-xl cursor-pointer hover:bg-[#d4891a] transition-colors duration-200">
            Sign Up
          </button>
          <Link
            to={`/book-details/${bookId}`}
            className="w-full font-semibold py-1 px-3 md:px-7 rounded  md:rounded-xl cursor-pointer bg-transparent border border-[#b794f4] text-[#b794f4] hover:bg-[#2d1b4e] transition-colors duration-200 flex justify-center items-center"
          >
            View Page Details
          </Link>
          {showRemove && (
            <button
              onClick={() => {
                removeWishList(readBook);
              }}
              className="font-semibold py-1 px-3 md:px-7 rounded  md:rounded-xl cursor-pointer flex items-center justify-center gap-2 bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100 transition-all duration-200"
            >
              <svg
                className="w-4 h-4 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
              Remove from Wishlist
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReadBookCard;
