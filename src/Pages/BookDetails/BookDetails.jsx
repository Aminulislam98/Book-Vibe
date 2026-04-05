import React from "react";
import { useLoaderData, useParams } from "react-router";

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
    yearOfPublishing,
  } = existBook;

  return (
    <div
      className="min-h-screen bg-[#f8f7f4]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 pt-5 pb-4">
            <span className="text-gray-500 text-[12px] font-medium hover:text-gray-300 cursor-pointer transition-colors">
              Home
            </span>
            <span className="text-gray-700 text-[11px]">/</span>
            <span className="text-gray-500 text-[12px] font-medium hover:text-gray-300 cursor-pointer transition-colors">
              Books
            </span>
            <span className="text-gray-700 text-[11px]">/</span>
            <span className="text-gray-300 text-[12px] font-medium truncate max-w-[140px] sm:max-w-none">
              {bookName}
            </span>
          </div>

          {/* Hero row: cover + text */}
          <div className="flex gap-4 sm:gap-6 lg:gap-10 items-end">
            {/* ── Book cover — floats down into body ─────────── */}
            <div className="shrink-0 translate-y-7 sm:translate-y-8">
              <img
                src={image}
                alt={image}
                className="w-[100px] sm:w-[120px] lg:w-[140px] rounded-xl block shadow-2xl ring-1 ring-white/10"
              />
            </div>

            {/* ── Hero text ───────────────────────────────────── */}
            <div className="flex-1 min-w-0 pb-1">
              {/* Category badge */}
              <div className="inline-flex items-center gap-1.5 bg-amber-400/10 border border-amber-400/25 text-amber-400 text-[11px] font-semibold px-3 py-1 rounded-full mb-3 tracking-wide">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                {category}
              </div>

              {/* Title — scales across breakpoints */}
              <h1
                className="text-[20px] sm:text-[26px] lg:text-[32px] font-extrabold text-white leading-tight tracking-tight mb-1.5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {bookName}
              </h1>

              {/* Author */}
              <p className="text-gray-400 text-[13px] font-medium mb-3">
                by{" "}
                <span className="text-emerald-400 font-semibold cursor-pointer hover:underline">
                  {author}
                </span>
              </p>

              {/* Stars + meta — wraps naturally on mobile */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                {/* Stars */}
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

                <span className="text-gray-300 text-[13px] font-semibold"></span>
                <span className="text-gray-600 text-[11px]">·</span>
                <span className="text-gray-400 text-[12px]">{totalPages}</span>
                <span className="text-gray-600 text-[11px]">·</span>
                <span className="text-gray-400 text-[12px]">
                  {yearOfPublishing}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ── END HERO ────────────────────────────────────────── */}

      {/* ══════════════════════════════════════════════════════
          BODY — main grid
          Mobile : 1 column, sidebar on top
          Tablet : 1 column
          Desktop: 2 columns (content | sidebar)
      ══════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 items-start">
          {/* ════════════════════════════════════════════════
              LEFT — main content
              On mobile: renders below sidebar (order-2)
              On desktop: renders left naturally
          ════════════════════════════════════════════════ */}
          <div className="flex flex-col gap-5 order-2 lg:order-1">
            {/* ── ABOUT CARD ──────────────────────────────── */}
            <div className="bg-white rounded-2xl border border-[#e8e6e1] p-5 sm:p-6">
              <h2
                className="text-[18px] sm:text-[20px] font-bold text-gray-900 mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                About this book
              </h2>

              <p className="text-[13.5px] sm:text-[14px] text-gray-500 leading-[1.9]">
                {review}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {/* <span className="px-3.5 py-1.5 rounded-full text-[12px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Fiction
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-[12px] font-semibold bg-rose-50 text-rose-700 border border-rose-200">
                  Romance
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-[12px] font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                  Classic
                </span> */}
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
              </div>
            </div>
            {/* ── END ABOUT CARD ──────────────────────────── */}

            {/* ── BOOK DETAILS CARD ───────────────────────── */}
            <div className="bg-white rounded-2xl border border-[#e8e6e1] p-5 sm:p-6">
              <h2
                className="text-[18px] sm:text-[20px] font-bold text-gray-900 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Book details
              </h2>

              {/* Detail grid
                  Mobile : 1 column (stacked)
                  sm+    : 2 columns side by side    */}
              <div className="rounded-xl border border-[#f0eeea] overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y divide-[#f0eeea]">
                  {/* Book ID */}
                  <div className="px-4 py-3.5 sm:border-r sm:border-[#f0eeea]">
                    <p className="text-[10.5px] font-semibold text-gray-400 uppercase tracking-widest mb-1">
                      Book ID
                    </p>
                    <p className="text-[13.5px] font-semibold text-gray-900">
                      #{bookId}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="px-4 py-3.5">
                    <p className="text-[10.5px] font-semibold text-gray-400 uppercase tracking-widest mb-1">
                      Author
                    </p>
                    <p className="text-[13.5px] font-semibold text-emerald-600">
                      {author}
                    </p>
                  </div>

                  {/* Category */}
                  <div className="px-4 py-3.5 sm:border-r sm:border-[#f0eeea]">
                    <p className="text-[10.5px] font-semibold text-gray-400 uppercase tracking-widest mb-1">
                      Category
                    </p>
                    <p className="text-[13.5px] font-semibold text-gray-900">
                      {category}
                    </p>
                  </div>

                  {/* Publisher */}
                  <div className="px-4 py-3.5">
                    <p className="text-[10.5px] font-semibold text-gray-400 uppercase tracking-widest mb-1">
                      Publisher
                    </p>
                    <p className="text-[13.5px] font-semibold text-gray-900">
                      {publisher}
                    </p>
                  </div>

                  {/* Total Pages */}
                  <div className="px-4 py-3.5 sm:border-r sm:border-[#f0eeea]">
                    <p className="text-[10.5px] font-semibold text-gray-400 uppercase tracking-widest mb-1">
                      Total Pages
                    </p>
                    <p className="text-[13.5px] font-semibold text-gray-900">
                      {totalPages}
                    </p>
                  </div>

                  {/* Year */}
                  <div className="px-4 py-3.5">
                    <p className="text-[10.5px] font-semibold text-gray-400 uppercase tracking-widest mb-1">
                      Year Published
                    </p>
                    <p className="text-[13.5px] font-semibold text-gray-900">
                      {yearOfPublishing}
                    </p>
                  </div>

                  {/* Tags — full width row */}
                  <div className="px-4 py-3.5 col-span-1 sm:col-span-2">
                    <p className="text-[10.5px] font-semibold text-gray-400 uppercase tracking-widest mb-2.5">
                      Tags
                    </p>
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
                  </div>
                </div>
              </div>
            </div>
            {/* ── END BOOK DETAILS CARD ───────────────────── */}
          </div>
          {/* ── END LEFT COLUMN ─────────────────────────────── */}

          {/* ════════════════════════════════════════════════
              RIGHT SIDEBAR
              Mobile : renders first (order-1), full width
              Desktop: renders right as sticky sidebar
          ════════════════════════════════════════════════ */}
          <div className="flex flex-col gap-4 order-1 lg:order-2 lg:sticky lg:top-6">
            {/* ── ACTION CARD ─────────────────────────────── */}
            <div className="bg-white rounded-2xl border border-[#e8e6e1] p-5 sm:p-6">
              {/* Big rating */}
              <div className="flex items-center gap-4 pb-4 mb-4 border-b border-[#f3f2ef]">
                <span
                  className="text-[40px] font-extrabold text-gray-900 leading-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {rating}
                </span>

                <div>
                  <div className="flex items-center gap-0.5 mb-1.5">
                    {[0, 1, 2, 3].map((i) => (
                      <svg
                        key={i}
                        className="w-3 h-3 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg
                      className="w-3 h-3 text-amber-400 opacity-40"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p className="text-[11px] text-gray-400 font-medium">
                    out of 5.0 rating
                  </p>
                </div>
              </div>

              {/* CTA buttons */}
              <button className="w-full py-3.5 rounded-xl bg-[#111827] text-white text-[13.5px] font-semibold tracking-wide hover:bg-[#1f2937] transition-colors mb-2.5">
                Read Now
              </button>
              <button className="w-full py-3 rounded-xl bg-white text-gray-600 text-[13.5px] font-semibold border border-gray-200 hover:bg-gray-50 transition-colors mb-4">
                + Add to Wishlist
              </button>

              {/* Quick meta rows */}
              <div className="flex flex-col divide-y divide-[#f9f8f6]">
                {/* Pages */}
                <div className="flex items-center gap-3 py-3">
                  <div className="w-8 h-8 rounded-lg bg-[#f3f2ef] flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0118 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 font-medium leading-none mb-1">
                      Total pages
                    </p>
                    <p className="text-[13px] font-semibold text-gray-900 leading-none">
                      {totalPages}
                    </p>
                  </div>
                </div>

                {/* Year */}
                <div className="flex items-center gap-3 py-3">
                  <div className="w-8 h-8 rounded-lg bg-[#f3f2ef] flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 font-medium leading-none mb-1">
                      Year published
                    </p>
                    <p className="text-[13px] font-semibold text-gray-900 leading-none">
                      {yearOfPublishing}
                    </p>
                  </div>
                </div>

                {/* Category */}
                <div className="flex items-center gap-3 py-3">
                  <div className="w-8 h-8 rounded-lg bg-[#f3f2ef] flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 font-medium leading-none mb-1">
                      Category
                    </p>
                    <p className="text-[13px] font-semibold text-gray-900 leading-none">
                      {category}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ── END ACTION CARD ─────────────────────────── */}

            {/* ── PUBLISHER CARD ──────────────────────────── */}
            <div className="bg-white rounded-2xl border border-[#e8e6e1] p-5 sm:p-6">
              <p className="text-[13px] font-semibold text-gray-700 mb-3">
                Publisher
              </p>

              <div className="flex items-center gap-3 bg-[#f8f7f4] rounded-xl p-4 border border-[#e8e6e1]">
                <div className="w-10 h-10 rounded-xl bg-[#111827] flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[14px] font-bold text-gray-900">
                    {publisher}
                  </p>
                  <p className="text-[11.5px] text-gray-400 mt-0.5">
                    Official Publisher
                  </p>
                </div>
              </div>
            </div>
            {/* ── END PUBLISHER CARD ──────────────────────── */}
          </div>
          {/* ── END RIGHT SIDEBAR ───────────────────────────── */}
        </div>
      </section>
      {/* ── END BODY ────────────────────────────────────────── */}
    </div>
  );
};

export default BookDetails;
