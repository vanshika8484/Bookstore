import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";
import axios from "axios";
const FreeBook = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    // Set mounted state after component mounts
    setIsMounted(true);

    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstore-backend-inlc.onrender.com/book");
        console.log(res.data);
        setBook(res.data.filter((data) => data.category === "Free"));
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  if (!isMounted) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: isMobile ? 1 : 3,
    initialSlide: 0,
    touchThreshold: 10,
    arrows: !isMobile,
    swipeToSlide: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="flex flex-col max-w-screen-2xl container mx-auto md:px-34 px-4 mt-10 md:mt-15">
        <h1 className="text-3xl font-bold pb-2">Free Offered Courses</h1>
        <p className="text-md font-normal">
          Great selection of modern and classic books waiting to be discovered.
          All free and available in most ereader formats.
        </p>

<div className="slider-container">
  <Slider {...settings}>
    {book.map((item) => (
      <div key={item.id} style={{ padding: '0 10px' }}>  {/* Add padding between cards */}
        <Cards item={item} />
      </div>
    ))}
  </Slider>
</div>
      </div>
    </>
  );
};

export default FreeBook;
