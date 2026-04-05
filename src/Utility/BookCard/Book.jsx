import React from "react";

const Book = ({ book }) => {
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
  } = book;
  return (
    <div className="w-full flex flex-col bg-white rounded-xl md:rounded-3xl border border-gray-300 shadow-md overflow-hidden p-2 md:p-3 md:hover:-translate-y-0.5 md:hover:shadow-[0_7px_20px_-10px_gray] transition-all duration-300 ease-in-out">
      {/* top section  */}
      <div className="rounded-xl md:rounded-2xl bg-gray-800 max-h-60 h-full  flex items-center justify-center overflow-hidden py-4">
        <img
          src={image}
          alt={bookName}
          className="w-auto object-contain drop-shadow-xl text-white h-full "
        />
      </div>
      {/* middle section */}
      <div className="pt-4 pb-5 flex flex-col grow ">
        {/* ── GENRE TAGS ─────────────────────────────────── */}
        <div className="flex gap-2 mb-3.25">
          {/* Tag: Young Adult */}
          <span
            className="px-3.25 py-1.25 rounded-full text-[12px] font-semibold border"
            style={{
              background: "#edfaf4",
              color: "#1a7a52",
              borderColor: "#c6edd9",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {tags[0]}
          </span>

          {/* Tag: Identity */}
          <span
            className="px-[13px] py-[5px] rounded-full text-[12px] font-semibold border"
            style={{
              background: "#edfaf4",
              color: "#1a7a52",
              borderColor: "#c6edd9",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {tags[1]}
          </span>
        </div>
        {/* ── END GENRE TAGS ─────────────────────────────── */}

        {/* ── BOOK TITLE ─────────────────────────────────── */}
        <h2
          className="text-[20px] font-extrabold text-gray-950 leading-tight tracking-tight mb-[5px]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {bookName}
        </h2>

        {/* ── AUTHOR ─────────────────────────────────────── */}
        <p className="text-[12.5px] text-gray-400 font-medium mb-4">
          By : {author}
        </p>
        {/* ── END FOOTER ROW ─────────────────────────────── */}
      </div>

      {/* bottom section */}
      <div className="flex flex-col  mt-auto">
        {/* ── DASHED DIVIDER ─────────────────────────────── */}
        <div className="border-t border-dashed border-gray-200 mb-[14px]" />

        {/* ── FOOTER ROW — Genre LEFT · Rating RIGHT ─────── */}
        <div className="flex items-center justify-between mt-auto">
          {/* Genre label */}
          <span className="text-[13px] text-gray-400 font-medium">Fiction</span>

          {/* Rating + star */}
          <div className="flex items-center gap-1.25">
            {/* Numeric rating */}
            <span className="text-[13px] text-gray-400 font-semibold">
              {rating}
            </span>

            {/* Outline star */}
            <svg
              className="w-4 h-4 text-gray-300"
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
    </div>
  );
};

export default Book;
