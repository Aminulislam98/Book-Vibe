import React from "react";
import { Link } from "react-router";

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    // review,
    // totalPages,
    rating,
    category,
    tags,
    // publisher,
    // yearOfPublishing,
  } = book;
  return (
    <Link
      to={`book-details/${bookId}`}
      title="Click to show details"
      className="w-full flex flex-col bg-white rounded-xl md:rounded-3xl border border-gray-300 shadow-md overflow-hidden p-2 md:p-3 md:hover:-translate-y-0.5 md:hover:shadow-[0_7px_20px_-10px_gray] transition-all duration-300 ease-in-out cursor-pointer "
    >
      {/* top section  */}
      <div className="rounded-xl md:rounded-2xl bg-gray-800 max-h-60 h-full  flex items-center justify-center overflow-hidden py-4 ">
        <img
          src={image}
          alt={bookName}
          className="w-full h-full object-contain"
        />
      </div>
      {/* middle section */}
      <div className="pt-4 pb-5 flex flex-col">
        <div className="flex gap-2 mb-3.25">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3.25 py-1 rounded-xl text-[12px] font-semibold border bg-green-50 border-green-300 text-green-600"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2
          className="text-[20px] font-extrabold text-gray-950 leading-tight tracking-tight mb-[5px]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {bookName}
        </h2>
        <p className="text-[12.5px] text-gray-400 font-medium mb-4">
          By : {author}
        </p>
      </div>

      {/* bottom section */}
      <div className="flex flex-col  mt-auto">
        {/* ── DASHED DIVIDER ─────────────────────────────── */}
        <div className="border-t border-dashed border-gray-200 mb-3.5" />

        {/* ── FOOTER ROW — Genre LEFT · Rating RIGHT ─────── */}
        <div className="flex items-center justify-between mt-auto">
          {/* Genre label */}
          <span className="text-[13px] text-green-600 font-medium">
            {category}
          </span>

          {/* Rating + star */}
          <div className="flex justify-center items-center gap-1.25">
            {/* Numeric rating */}
            <span className="text-[13px] text-yellow-600 font-semibold">
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
          {/* ── END RATING ─────────────────────────────── */}
        </div>
      </div>
    </Link>
  );
};

export default Book;
