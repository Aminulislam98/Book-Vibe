import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black w-full">
      {/* frequently asked questions */}
      <div className="max-w-5xl mx-auto py-10 flex flex-col justify-center items-center gap-y-2">
        <h1 className="font-bold text-3xl text-white mb-5">
          Frequently asked questions
        </h1>
        <details className="collapse  text-white border-b rounded-none border-[#A3D4FF]/40">
          <summary className="collapse-title font-semibold text-xl">
            How do I add a book to my read list?
          </summary>
          <div className="collapse-content text-sm">
            Simply click the "Add to Read List" button on any book card. If the
            book is already in your list, you will get a notification letting
            you know it has been added before.
          </div>
        </details>
        <details className="collapse  text-white border-b rounded-none border-[#A3D4FF]/40">
          <summary className="collapse-title font-semibold text-xl">
            Can I read the same book twice in my list?
          </summary>
          <div className="collapse-content text-sm">
            No — Book Vibe automatically checks your read list before adding. If
            you try to add a duplicate, an alert will appear with the book name
            so you know it is already saved.
          </div>
        </details>
        <details className="collapse  text-white border-b rounded-none border-[#A3D4FF]/40">
          <summary className="collapse-title font-semibold text-xl">
            How many books can I add to my read list?
          </summary>
          <div className="collapse-content text-sm">
            There is no limit! You can add as many books as you like to your
            read list and browse them anytime from the Listed page.
          </div>
        </details>
        <details className="collapse  text-white border-b rounded-none border-[#A3D4FF]/40">
          <summary className="collapse-title font-semibold text-xl">
            What information is shown for each book?
          </summary>
          <div className="collapse-content text-sm">
            Each book card shows the cover image, title, author, rating,
            category, tags, publisher, year of publishing, and total pages —
            everything you need to decide your next read.
          </div>
        </details>
        <details className="collapse  text-white border-b rounded-none border-[#A3D4FF]/40">
          <summary className="collapse-title font-semibold text-xl">
            How do I find books by category or genre?
          </summary>
          <div className="collapse-content text-sm">
            You can browse books by category such as Fantasy, Fiction, Mystery,
            Non-Fiction, and more. Use the category filter on the home page to
            narrow down books that match your taste.
          </div>
        </details>
      </div>
      {/* footer section */}
      <div className="w-full bg-white">
        <div className="footer sm:footer-horizontal  text-white-content p-10 max-w-7xl mx-auto flex flex-row justify-between">
          <aside>
            <div className=" text-xl font-bold flex flex-col justify-center items-center">
              <p className="text-2xl">
                <span>Book</span> <span className="text-[#b794f4]">Vibe</span>
              </p>
              <p className="text-[10px] font-normal hidden lg:flex text-[#b794f4]">
                YOUR READING WORLD
              </p>
            </div>
            <p>
              BookVibe Ltd.
              <br />
              Discover your next great read since 2024
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Explore</h6>
            <a className="link link-hover">All Books</a>
            <a className="link link-hover">Top Rated</a>
            <a className="link link-hover">New Arrivals</a>
            <a className="link link-hover">Categories</a>
          </nav>
          <nav>
            <h6 className="footer-title">Account</h6>
            <a className="link link-hover">Sign In</a>
            <a className="link link-hover">Sign Up</a>
            <a className="link link-hover">My Read List</a>
            <a className="link link-hover">Reading History</a>
          </nav>
          <nav className="flex flex-col justify-end">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
