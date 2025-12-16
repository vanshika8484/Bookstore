import React, { useEffect } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
const Course = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstore-backend-inlc.onrender.com/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className=" items-center justify-center text-center">
          <h1 className="h-30"></h1>
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">here! :)</span>
          </h1>
          <p className="mt-8">
            Welcome to our world of stories and imagination. We’re truly
            delighted to have you here. Explore inspiring reads, meaningful
            ideas, and books that open new perspectives.Discover books that
            comfort, inspire, and stay with you long after the last page. Take a
            moment, browse around, and let your next great story find
            you.Explore freely and find the story that speaks to you.
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 mt-6 rounded-md hover:bg-pink-700 duration 300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
