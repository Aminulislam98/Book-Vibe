import React, { useContext, useEffect } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import { BooksContext } from "../../Context/BookContext/BookProvider.jsx";
import { FaArrowLeft, FaArrowRight, FaBookOpen } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { IoBookSharp } from "react-icons/io5";

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
    // yearOfPublishing,
  } = existBook;

  const {
    handleBookMarkRead,
    handleWishlist,
    readList,
    storeWishList,
    // setStoredReadMark,
  } = useContext(BooksContext);
  const goBack = useNavigate();

  const existReadMark = readList.find((list) => list.bookId == bookId);
  const existWishMark = storeWishList.find(
    (wishList) => wishList.bookId === Number(bookId),
  );

  // const bookDetailsRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [bookId]);

  return (
    <div
      // ref={bookDetailsRef}
      className="px-4 bg-[radial-gradient(ellipse_at_70%_50%,#0f2238_0%,#070f1e_40%,#020508_100%)] pt-5 md:pt-10 "
    >
      <div className="flex flex-row justify-between mx-auto max-w-6xl">
        <button
          onClick={() => {
            goBack(-1);
          }}
          className="flex items-center  gap-2 text-[#b794f4] hover:text-white transition-colors duration-200 text-base font-medium max-w-6xl   pb-5"
        >
          <FaArrowLeft className="text-base" />
          Back
        </button>
        <Link
          to={"/listed-books"}
          className="flex items-center  gap-2 text-[#b794f4] hover:text-white transition-colors duration-200 text-base font-medium max-w-6xl   pb-5 underline md:hidden"
        >
          <IoBookSharp className="text-base" />
          Go to the listed books.
        </Link>
      </div>
      <section className=" flex flex-row justify-center items-center lg:pt-10 pb-20">
        <div className="flex flex-col-reverse lg:flex-row max-w-6xl gap-10 lg:gap-5">
          {/* left section */}
          <div className="lg:max-w-100">
            <img
              className="h-full w-full object-cover"
              src={image}
              alt={bookName}
            />
          </div>
          {/* right section */}
          <div className=" text-white flex flex-col justify-center items-start w-full space-y-2">
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
              <p className="uppercase tracking-widest text-sm">
                Number of Page:
              </p>
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
                className={`px-6 py-2 rounded-lg bg-[#0d3b2e] text-[#00ff87] border border-[#1a6b50] hover:bg-[#1a6b50] transition-colors duration-200 ${existReadMark && "cursor-not-allowed "}`}
                disabled={!!existReadMark}
              >
                Mark as Read
              </button>
              <button
                onClick={() => {
                  handleWishlist(existBook);
                }}
                disabled={!!existWishMark}
                className={`px-6 py-2 rounded-lg bg-[#2d1130] text-[#f472b6] border border-[#6b2150] hover:bg-[#6b2150] transition-colors duration-200 ${existWishMark && "cursor-not-allowed"}`}
              >
                Wishlist
              </button>
            </div>
            {existReadMark ? (
              <div className="flex items-center gap-3  w-fit">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 2L13.5 4.5H17.5V8.5L20 11L17.5 13.5V17.5H13.5L11 20L8.5 17.5H4.5V13.5L2 11L4.5 8.5V4.5H8.5L11 2Z"
                    fill="#1a3a6b"
                    stroke="#4a9eff"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.5 11L9.5 13L14.5 8.5"
                    stroke="#4a9eff"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="text-[#00ff87] text-sm font-medium flex flex-row gap-2">
                  {/* {`"${bookName}" added to Reading List`} */}
                  <span className="font-bold ">{`"${bookName}"`}</span>
                  <span className=" text-sm font-medium">
                    added to Reading List
                  </span>
                </div>
              </div>
            ) : (
              ""
            )}
            {existWishMark ? (
              <div className="flex items-center gap-3  w-fit">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 2L13.5 4.5H17.5V8.5L20 11L17.5 13.5V17.5H13.5L11 20L8.5 17.5H4.5V13.5L2 11L4.5 8.5V4.5H8.5L11 2Z"
                    fill="#1a3a6b"
                    stroke="#4a9eff"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.5 11L9.5 13L14.5 8.5"
                    stroke="#4a9eff"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="text-[#f472b6] text-sm font-medium flex flex-row gap-2">
                  <span className="font-bold ">{`"${bookName}"`}</span>
                  <span className=" text-sm font-medium">
                    added to WishList
                  </span>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookDetails;
