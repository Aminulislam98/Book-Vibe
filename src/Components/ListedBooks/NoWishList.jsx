import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router";

const NoWishList = () => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_70%_50%,#0f2238_0%,#070f1e_40%,#020508_100%)] border-2 border-dashed border-[#2d1b4e] rounded-2xl p-12 flex flex-col items-center gap-4 text-center">
      <div className="w-16 h-16 rounded-full bg-[#2d1130] flex items-center justify-center">
        <FaHeart className="text-[#f472b6] text-2xl" />
      </div>
      <h3 className="text-white text-lg font-medium">Your wishlist is empty</h3>
      <p className="text-gray-400 text-sm max-w-xs">
        Save books you want to read later. Find something you love and add it to
        your wishlist.
      </p>
      <Link
        to={"/"}
        className="mt-2 px-7 py-2 rounded-lg bg-[#2d1130] text-[#f472b6] border border-[#6b2150] hover:bg-[#6b2150] transition-colors duration-200 text-sm font-medium"
      >
        Explore Books
      </Link>
    </div>
  );
};

export default NoWishList;
