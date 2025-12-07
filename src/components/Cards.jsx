import React from "react";

const Cards = ({ item }) => {
  return (
    <div className="mt-4 my-3 p-3">
      <div className="card bg-base-100 w-94 h-160 shadow-sm transition-transform duration-200 hover:scale-103 text-black">
        <figure>
          <img src={item.image} alt="shoes" className="h-100 w-130" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <h3 className="font-semibold">by {item.author}</h3>
          <p>{item.desc}</p>
          <div className="card-actions flex justify-between">
            <div className="badge badge-outline">{item.price}</div>
            <div className=" hover:bg-pink-500 hover:text-white px-2 py-1 duration-300 rounded-full border border-[1px] cursor-pointer">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
