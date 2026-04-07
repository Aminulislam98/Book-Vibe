import React from "react";
import { Link } from "react-router";

const NoChartAvailable = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  rounded-xl p-12 text-center">
      <div className="w-24 h-24 rounded-full bg-[#112240] border border-[#1e3a5f] flex items-center justify-center mb-6">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1e3a5f"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      </div>

      {/* ✅ এই text গুলো change করলাম */}
      <h2 className="text-white text-xl font-semibold mb-2">
        No chart available
      </h2>
      <p className="text-[#6b7fa3] text-sm mb-1">
        Your wishlist is empty, so there is nothing to display here.
      </p>
      <p className="text-[#b794f4] text-sm mb-6">
        Add books to your wishlist to see the chart!
      </p>

      <Link
        to={"/"}
        className="bg-[#b794f4] text-[#0a1628] font-semibold px-6 py-2 rounded-lg"
      >
        Add books to wishlist
      </Link>
    </div>
  );
};

export default NoChartAvailable;
