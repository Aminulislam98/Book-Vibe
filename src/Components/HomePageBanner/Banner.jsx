import React from "react";
import BannerBook from "../../assets/bannerBook.png";

const Banner = () => {
  return (
    <section className=" px-4 bg-[radial-gradient(ellipse_at_70%_50%,#0f2238_0%,#070f1e_40%,#020508_100%)]">
      <div className="hero min-h-[70vh] max-w-7xl w-full mx-auto rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between p-0 py-10 md:px-30">
          <div className="hover-3d">
            {/* content */}
            <figure className="bg-transparent rounded-2xl">
              <img
                src={BannerBook}
                className="max-w-sm rounded-lg"
                alt="banner-book"
              />
            </figure>
            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="flex flex-col gap-y-4 lg:gap-y-10 mt-5 justify-center items-center text-center sm:text-start sm:items-start sm:justify-start sm:mt-0 ">
            <h1 className="text-3xl lg:text-6xl font-bold  lg:leading-17 text-[#e2f0ff] ">
              Books to freshen up <br className="lg:flex hidden" /> your
              bookshelf
            </h1>

            <button
              className=" w-fit   text-base md:text-xl md:font-bold  font-semibold py-2.5 px-3 lg:py-4 lg:px-7 rounded  md:rounded-xl  bg-[#0f2238] border border-[#1a3a5c] text-[#a0c4e0] 
           hover:bg-[#1a3a5c] hover:border-[#a0c4e0] transition-colors duration-200 cursor-not-allowed"
            >
              View The List
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
