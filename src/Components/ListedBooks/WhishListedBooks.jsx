import React, { useContext, useEffect, useMemo } from "react";
import { BooksContext } from "../../Context/BookContext/BookProvider";
import ReadBookCard from "./ReadBookCard";
import NoWishList from "./NoWishList";

const WhishListedBooks = ({ setShortingType, shortingType }) => {
  const { storeWishList, setWishList, handleWishlist } =
    useContext(BooksContext);

  useEffect(() => {
    window.scroll(0, 0);
  });

  const filterWishList = useMemo(() => {
    if (shortingType === "rating") {
      return [...storeWishList].sort((a, b) => a.rating - b.rating);
    }
    if (shortingType === "page") {
      return [...storeWishList].sort((a, b) => a.totalPages - b.totalPages);
    }
    return storeWishList;
  }, [shortingType, storeWishList]);

  return (
    <section className="">
      {filterWishList.length > 0 && (
        <div className="dropdown mb-3">
          <div
            tabIndex={0}
            role="button"
            className="flex items-center gap-2 px-4 py-2 rounded-md text-[#0E5B9B] bg-transparent hover:bg-[#E6F1FB] transition-colors duration-200 text-sm font-medium cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7h18M6 12h12M10 17h4"
              />
            </svg>
            Sort by
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-white border border-gray-200 rounded-xl z-50 w-52 p-2 mt-1 shadow-md"
          >
            <li
              onClick={() => {
                setShortingType("rating");
                document.activeElement.blur();
              }}
            >
              <a className="text-[#061624] hover:bg-[#E6F1FB] hover:text-[#0E5B9B] rounded-lg flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                Rating
              </a>
            </li>
            <li
              onClick={() => {
                setShortingType("page");
                document.activeElement.blur();
              }}
            >
              <a className="text-[#061624] hover:bg-[#E6F1FB] hover:text-[#0E5B9B] rounded-lg flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
                Number of pages
              </a>
            </li>
          </ul>
        </div>
      )}

      <div className="max-w-5xl w-full mx-auto flex flex-col gap-6 sm:gap-5">
        {filterWishList.length > 0 ? (
          filterWishList.map((readBook) => (
            <ReadBookCard readBook={readBook} showRemove={true}></ReadBookCard>
          ))
        ) : (
          <NoWishList></NoWishList>
        )}
      </div>
    </section>
  );
};

export default WhishListedBooks;
