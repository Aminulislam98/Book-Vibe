import React from "react";
import { FaBookOpen } from "react-icons/fa";

const ReadBookCard = ({ readBook }) => {
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
  } = readBook;
  return (
    <section className="w-full mx-auto flex flex-col md:flex-row max-h-57  border border-gray-200 grow">
      {/* left side */}
      <div className="border border-gray-200 max-w-3xl w-full flex flex-row justify-start items-start gap-1 md:gap-2">
        <div className="w-30 md:w-37 h-full flex justify-start items-start aspect-2/3 shrink-0">
          <img
            src={image}
            alt={bookName}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="px-2 text-white flex flex-col justify-start items-start space-y-0.5 md:space-y-1">
          <h1 className="font-bold text-base md:text-xl text-[#0E5B9B]">
            {bookName}
          </h1>
          <div className="flex flex-row justify-center items-center gap-1">
            <p className="font-medium text-xs md:text-sm text-[#061624]">By</p>

            <p className="font-medium text-xs md:text-sm text-[#0E5B9B]">
              {author}
            </p>
          </div>
          <div className="flex flex-row justify-center items-center gap-1">
            <p className="font-medium text-xs md:text-sm text-[#061624]">
              Narrated by:
            </p>
            <p className="font-medium text-xs md:text-sm text-[#0E5B9B]">
              {narratedBy}
            </p>
          </div>
          <div className="flex flex-row justify-center items-center gap-1">
            <p className="font-medium text-xs md:text-sm text-[#061624]">
              Length:
            </p>
            <p className="font-medium text-xs md:text-sm text-[#061624]">
              {length}
            </p>
          </div>
          <div className="flex flex-row justify-center items-center gap-1">
            <p className="font-medium text-xs md:text-sm text-[#061624]">
              Release date:
            </p>
            <p className="font-medium text-xs md:text-sm text-[#061624]">
              {releaseDate}
            </p>
          </div>
          <div className="flex flex-row justify-center items-center gap-1">
            <p className="font-medium text-xs md:text-sm text-[#061624]">
              Language:
            </p>
            <p className="font-medium text-xs md:text-sm text-[#061624]">
              {language}
            </p>
          </div>
          <div className="flex flex-row justify-center items-center gap-2">
            <p className="font-medium text-xs md:text-sm text-[#061624]">
              Number of Page:
            </p>
            <div className="flex flex-row text-[#061624] text-xs md:text-sm justify-center items-center gap-1">
              <FaBookOpen />
              {totalPages}
            </div>
          </div>

          <div className="flex flex-row justify-center items-center gap-1">
            <p className="font-medium text-xs md:text-sm text-[#061624]">
              Publisher:
            </p>
            <p className="font-medium text-xs md:text-sm text-[#061624]">
              {publisher}
            </p>
          </div>
          <div className="flex flex-row justify-center items-center gap-3">
            <p className="font-medium text-xs md:text-sm text-[#061624]">
              Rating:
            </p>
            <div className="flex justify-between items-center gap-1 ">
              {/* Numeric rating */}
              <span className=" text-yellow-600 font-medium text-xs md:text-sm">
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
      <div>
        <div></div>
      </div>
    </section>
  );
};

export default ReadBookCard;
