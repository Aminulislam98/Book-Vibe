import React from "react";
import BannerBook from "../../assets/bannerBook.png";

const Banner = () => {
  return (
    <section className="mt-12 px-4">
      <div className="hero bg-gray-800 min-h-[70vh] max-w-7xl w-full mx-auto rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between px-4 md:px-30">
          <img
            src={BannerBook}
            className="max-w-sm rounded-lg "
            alt="banner-book"
          />
          <div className="flex flex-col gap-y-4 lg:gap-y-10">
            <h1 className="text-3xl lg:text-6xl font-bold  lg:leading-17 text-white">
              Books to freshen up <br className="lg:flex hidden" /> your
              bookshelf
            </h1>

            <button className=" w-fit text-white bg-[#23BE0A] text-base md:text-xl md:font-bold  font-semibold py-2.5 px-3 lg:py-4 lg:px-7 rounded  md:rounded-xl cursor-pointer">
              View The List
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
