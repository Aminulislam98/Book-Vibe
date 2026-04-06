import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { Link } from "react-router";

const NoBooks = () => {
  return (
    <div className="border-2 border-dashed border-[#2d1b4e] rounded-2xl p-12 flex flex-col items-center gap-4 text-center bg-[radial-gradient(ellipse_at_70%_50%,#0f2238_0%,#070f1e_40%,#020508_100%)]">
      <div className="w-16 h-16 rounded-full bg-[#0d3b2e] flex items-center justify-center">
        <FaBookOpen className="text-[#00ff87] text-2xl" />
      </div>
      <h3 className="text-white text-lg font-medium">
        No books in your read list
      </h3>
      <p className="text-gray-400 text-sm max-w-xs">
        You haven't marked any books as read yet. Start exploring and track your
        reading journey.
      </p>
      <Link
        to={"/"}
        className="mt-2 px-7 py-2 rounded-lg bg-[#0d3b2e] text-[#00ff87] border border-[#1a6b50] hover:bg-[#1a6b50] transition-colors duration-200 text-sm font-medium"
      >
        Browse Books
      </Link>
    </div>
  );
};

export default NoBooks;
