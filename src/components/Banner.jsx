import React from "react";

const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 mt-2 md:mt-32 md:order-1 order-2">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold">
            Hello, welcomes here to learn something{" "}
            <span className="text-pink-500">new everyday!!!</span>
          </h1>
          <p className="text-xl font-normal">
            Books don’t just entertain us; they expand our minds, rescue us from
            boredom, and occasionally make us laugh at how predictable we are as
            readers. Humor and wit add spark to the reading experience, offering
            fresh ways to see ourselves through the pages.
          </p>
          <label className="input focus-within:outline-none focus-within:ring-0 focus-within:shadow-none w-full">
            <svg
              className="h-[1em] opacity-50 text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              placeholder="Email"
              required
              className="outline-none appearance-none focus:outline-none focus:ring-0 text-black"
            />
          </label>
        </div>
        <button className="btn btn-secondary mt-3">Secondary</button>
      </div>
      <div className="w-full md:w-1/2 order-1">
        <img src="./images/book.png" className="w-200 md:h-160 h-100 pt-0 pl-20" />
      </div>
    </div>
  );
};

export default Banner;
