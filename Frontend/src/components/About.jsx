import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Heart, Sparkles, Users } from "lucide-react"; // Optional: using lucide-react icons
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
    <Navbar />
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-12">
      {/* Hero Section */}
      <div className="mt-16 items-center justify-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold ">
          Welcome to <span className="text-pink-500">BookHeaven</span> 📚
        </h1>
        <p className="mt-10 text-md md:text-lg  max-w-3xl mx-auto ">
          A cozy little corner of the internet where stories come alive, hearts find comfort, and every book feels like coming home.
        </p>
      </div>

      {/* Our Story */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-7xl font-semibold ">
            Our Story
          </h2>
          <p className="mt-6  leading-7">
            BookHeaven was born from a simple dream: to create a place where book lovers — dreamers, thinkers, feelers, and wanderers — could find stories that speak directly to their souls.
          </p>
          <p className="mt-4  leading-7">
            We believe that the right book at the right time can change everything. Whether you're healing, growing, escaping, or falling in love with reading all over again — we're here to help you find <span className="text-pink-500 font-medium">"your"</span> book.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="rounded-2xl p-10 ">
           <img src="/images/book.png" className="h-100 mt-20"></img>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mt-16">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          What We Believe In
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="inline-block p-6 bg-pink-100 rounded-full mb-4">
              <Heart className="w-10 h-10 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold">Curated with Love</h3>
            <p className="mt-3 text-gray-700">
              Every book on our shelves is hand-picked with care and passion.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-block p-6 bg-pink-100 rounded-full mb-4">
              <Sparkles className="w-10 h-10 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold">Magic in Every Page</h3>
            <p className="mt-3 text-gray-700">
              We celebrate stories that inspire, heal, and spark joy.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-block p-6 bg-pink-100 rounded-full mb-4">
              <Users className="w-10 h-10 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold">A Community of Readers</h3>
            <p className="mt-3 text-gray-700">
              You're not just a customer — you're part of our book family.
            </p>
          </div>
        </div>
      </div>

      {/* Closing Message */}
      <div className="mt-24 text-center bg-pink-50 rounded-3xl py-16 px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          This is more than a bookstore.
        </h2>
        <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
          It's a sanctuary for souls who find peace between pages, a gathering place for those who believe in the power of words, and a celebration of every story waiting to be loved.
        </p>
        <p className="mt-8 text-pink-600 font-medium text-xl">
          Thank you for being here. Truly. 💗
        </p>
      </div>

      {/* Back Button */}
      <div className="mt-16 text-center">
        <Link to="/">
          <button className="bg-pink-500 cursor-pointer text-white px-6 py-3 rounded-md hover:bg-pink-700 transition duration-300 text-lg font-medium">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
    </>
  );
};

export default About;